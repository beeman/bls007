import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { CtxUser, GqlAuthGuard, User } from '@bls007/api/feature-auth'

import { ApiFeatureProjectService } from './api-feature-project.service'
import { CreateProjectInput } from './dto/create-project.input'

import { Project } from './models/project'

@Resolver(() => Project)
export class ApiFeatureProjectResolver {
  constructor(private readonly service: ApiFeatureProjectService) {}

  @Query(() => [Project], { nullable: true })
  projects() {
    return this.service.projects()
  }

  @Query(() => [Project], { nullable: true })
  userProjects(@Args('userId') userId: string) {
    return this.service.userProjects(userId)
  }

  @Query(() => Project, { nullable: true })
  project(@CtxUser() user: User, @Args('id') id: string) {
    return this.service.project({ id })
  }

  @Mutation(() => Project, { nullable: true })
  @UseGuards(GqlAuthGuard)
  async createProject(@CtxUser() user: User, @Args('data') data: CreateProjectInput) {
    return this.service.createProject(user.id, data)
  }

  @Mutation(() => Project, { nullable: true })
  @UseGuards(GqlAuthGuard)
  async deleteProject(@CtxUser() user: User, @Args('id') id: string) {
    return this.service.deleteProject(user.id, id)
  }

  @ResolveField('owner', () => User, { nullable: true })
  owner(@Parent() project: Project) {
    return this.service.projectOwner(project.id)
  }
}
