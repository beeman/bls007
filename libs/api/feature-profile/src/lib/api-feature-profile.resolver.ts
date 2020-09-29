import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'

import { ApiFeatureProfileService } from './api-feature-profile.service'
import { Profile } from './models/profile'
import { ProfileStatus } from './models/profile-status'
import { CtxUser, GqlAuthGuard, User } from '@bls007/api/feature-auth'
import { UseGuards } from '@nestjs/common'
import { UpdateStatusInput } from './dto/update-status.input'

@Resolver(() => Profile)
export class ApiFeatureProfileResolver {
  constructor(private readonly service: ApiFeatureProfileService) {}

  @Query(() => [Profile], { nullable: true })
  profiles() {
    return this.service.profiles()
  }

  @Query(() => Profile, { nullable: true })
  profile(@Args('username') username: string) {
    return this.service.profile(username)
  }

  @Mutation(() => Profile, { nullable: true })
  @UseGuards(GqlAuthGuard)
  updateStatus(@CtxUser() user: User, @Args('input') input: UpdateStatusInput) {
    return this.service.updateStatus(user.id, input)
  }

  @ResolveField(() => ProfileStatus, { nullable: true })
  status(@Parent() profile: Profile): ProfileStatus {
    if (profile.status) {
      return profile.status
    }

    if (!profile.lastSeen) {
      return ProfileStatus.Pending
    }

    return ProfileStatus.Offline
  }
}
