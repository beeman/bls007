import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient, UserCreateInput } from '@prisma/client'
import { getGravatarUrl, hashPassword } from './api-data-access.helper'
import { sampleUsers } from './sample-data/sample-users'

@Injectable()
export class ApiDataAccessService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super()
  }

  public async onModuleDestroy() {
    await this.$disconnect()
  }

  public async onModuleInit() {
    await this.$connect()
    await this.sampleData()
  }

  async createUser(input: UserCreateInput) {
    const password = await hashPassword(input.password)

    return this.user.create({
      data: {
        username: input.username,
        name: input.name || input.username,
        email: input.email.toLowerCase(),
        avatarUrl: input.avatarUrl || getGravatarUrl(input.email.toLowerCase()),
        password,
      },
    })
  }

  public findUserByEmail(email: string) {
    return this.user.findOne({ where: { email } })
  }

  public findUserById(userId: string) {
    return this.user.findOne({ where: { id: userId } })
  }

  public findUserByUsername(username: string) {
    return this.user.findOne({ where: { username } })
  }

  private async sampleData() {
    await this.deleteData()

    for (const data of sampleUsers) {
      await this.user.create({ data })
    }

    const projects = await this.project.count()
    const userCount = await this.user.count()

    console.log('Sample data:', { projects, users: userCount })
  }

  private async deleteData() {
    await this.project.deleteMany({ where: {} })
    await this.user.deleteMany({ where: {} })
  }
}
