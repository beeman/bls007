import { ApiDataAccessService } from '@bls007/api/data-access'

import { Injectable } from '@nestjs/common'
import { ProfileStatus } from './models/profile-status'
import { UpdateStatusInput } from './dto/update-status.input'

@Injectable()
export class ApiFeatureProfileService {
  constructor(private readonly data: ApiDataAccessService) {}

  profiles() {
    return this.data.user.findMany({
      orderBy: { createdAt: 'desc' },
      include: { projects: true },
    })
  }

  profile(username: string) {
    return this.data.user.findOne({ where: { username }, include: { projects: true } })
  }

  updateStatus(userId: string, input: UpdateStatusInput) {
    return this.data.user.update({
      where: { id: userId },
      data: {
        lastSeen: new Date(),
        status: input.status,
      },
    })
  }
}
