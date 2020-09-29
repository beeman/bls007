import { IsNotEmpty, MinLength } from 'class-validator'
import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateProjectInput {
  @Field()
  @IsNotEmpty()
  @MinLength(2)
  name: string
}
