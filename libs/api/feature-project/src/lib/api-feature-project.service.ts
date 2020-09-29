import { Injectable } from '@nestjs/common'
import { ApiDataAccessService } from '@bls007/api/data-access'

@Injectable()
export class ApiFeatureProjectService {
  constructor(private readonly data: ApiDataAccessService) {}

  projects() {
    return this.data.project.findMany({ orderBy: { createdAt: 'desc' }, take: 25 })
  }

  userProjects(userId: string) {
    return this.data.project.findMany({ where: { owner: { id: userId } }, orderBy: { createdAt: 'desc' }, take: 25 })
  }

  project({ id }) {
    return this.data.project.findOne({ where: { id } })
  }

  createProject(userId, data) {
    return this.data.project.create({
      data: {
        owner: { connect: { id: userId } },
        ...data,
      },
    })
  }

  async deleteProject(userId: string, projectId: string) {
    const owner = await this.projectOwner(projectId)
    if (owner.id !== userId) {
      throw new Error('You can only delete your own projects.')
    }
    return this.data.project.delete({ where: { id: projectId } })
  }

  projectOwner(projectId: string) {
    return this.data.project.findOne({ where: { id: projectId } }).owner()
  }
}
