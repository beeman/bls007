import { Field, ObjectType } from '@nestjs/graphql'
import { ProfileStatus } from './profile-status'

@ObjectType()
export class Profile {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  created: Date

  @Field({ nullable: true })
  username?: string

  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  avatarUrl?: string

  @Field({ nullable: true })
  bio?: string

  @Field({ nullable: true })
  location?: string

  @Field({ nullable: true })
  lastSeen?: Date

  status?: ProfileStatus
}
