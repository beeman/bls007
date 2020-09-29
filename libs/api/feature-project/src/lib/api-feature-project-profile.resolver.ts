import { Profile } from '@bls007/api/feature-profile'
import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { Project } from './models/project'

@Resolver(() => Profile)
export class ApiFeatureProjectProfileResolver {
  @ResolveField(() => [Project], { nullable: true })
  projects(@Parent() profile) {
    return profile?.projects
  }
}
