import { Field, ObjectType } from '@nestjs/graphql'
import { Profile } from '@bls007/api/feature-profile'

@ObjectType()
export class Project {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  createdAt: Date

  @Field({ nullable: true })
  updatedAt: Date

  @Field({ nullable: true })
  name: string

  @Field(() => Profile)
  owner: Profile
}
