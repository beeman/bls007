import { Field, InputType } from '@nestjs/graphql'
import { ProfileStatus } from '../models/profile-status'

@InputType()
export class UpdateStatusInput {
  @Field(() => ProfileStatus)
  status: ProfileStatus
}
