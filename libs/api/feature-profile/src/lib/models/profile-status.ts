import { registerEnumType } from '@nestjs/graphql'

export enum ProfileStatus {
  Away = 'Away',
  Offline = 'Offline',
  Online = 'Online',
  Pending = 'Pending',
}

registerEnumType(ProfileStatus, {
  name: 'ProfileStatus',
  description: 'User profile status',
})
