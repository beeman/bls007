import { gql } from 'apollo-angular'
import { Injectable } from '@angular/core'
import * as Apollo from 'apollo-angular'
import * as ApolloCore from '@apollo/client/core'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type User = {
  __typename?: 'User'
  id?: Maybe<Scalars['String']>
  created?: Maybe<Scalars['DateTime']>
  updated?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  avatarUrl?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  role?: Maybe<Role>
}

/** User role */
export enum Role {
  Admin = 'Admin',
  User = 'User',
}

export type UserToken = {
  __typename?: 'UserToken'
  /** JWT Bearer token */
  token: Scalars['String']
  user: User
}

export type IntercomMessage = {
  __typename?: 'IntercomMessage'
  type?: Maybe<Scalars['String']>
  scope?: Maybe<Scalars['String']>
  payload?: Maybe<Scalars['JSON']>
}

export type Profile = {
  __typename?: 'Profile'
  id?: Maybe<Scalars['String']>
  created?: Maybe<Scalars['DateTime']>
  username?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  avatarUrl?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  lastSeen?: Maybe<Scalars['DateTime']>
  status?: Maybe<Scalars['String']>
  projects?: Maybe<Array<Project>>
}

export type Project = {
  __typename?: 'Project'
  id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  name?: Maybe<Scalars['String']>
  owner: Profile
}

export type Query = {
  __typename?: 'Query'
  me?: Maybe<User>
  uptime: Scalars['Float']
  profiles?: Maybe<Array<Profile>>
  profile?: Maybe<Profile>
  projects?: Maybe<Array<Project>>
  userProjects?: Maybe<Array<Project>>
  project?: Maybe<Project>
}

export type QueryProfileArgs = {
  username: Scalars['String']
}

export type QueryUserProjectsArgs = {
  userId: Scalars['String']
}

export type QueryProjectArgs = {
  id: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  register?: Maybe<UserToken>
  login?: Maybe<UserToken>
  intercomPub?: Maybe<IntercomMessage>
  createProject?: Maybe<Project>
  deleteProject?: Maybe<Project>
}

export type MutationRegisterArgs = {
  data: RegisterInput
}

export type MutationLoginArgs = {
  data: LoginInput
}

export type MutationIntercomPubArgs = {
  payload?: Maybe<Scalars['JSON']>
  scope?: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type MutationCreateProjectArgs = {
  data: CreateProjectInput
}

export type MutationDeleteProjectArgs = {
  id: Scalars['String']
}

export type RegisterInput = {
  username: Scalars['String']
  email: Scalars['String']
  name?: Maybe<Scalars['String']>
  avatarUrl?: Maybe<Scalars['String']>
  password: Scalars['String']
}

export type LoginInput = {
  username: Scalars['String']
  password: Scalars['String']
}

export type CreateProjectInput = {
  name: Scalars['String']
}

export type Subscription = {
  __typename?: 'Subscription'
  intercomSub?: Maybe<IntercomMessage>
}

export type SubscriptionIntercomSubArgs = {
  scope?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type UserDetailsFragment = { __typename?: 'User' } & Pick<
  User,
  'id' | 'name' | 'username' | 'avatarUrl' | 'email'
>

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = { __typename?: 'Query' } & { me?: Maybe<{ __typename?: 'User' } & UserDetailsFragment> }

export type RegisterMutationVariables = Exact<{
  data: RegisterInput
}>

export type RegisterMutation = { __typename?: 'Mutation' } & {
  register?: Maybe<
    { __typename?: 'UserToken' } & Pick<UserToken, 'token'> & { user: { __typename?: 'User' } & UserDetailsFragment }
  >
}

export type LoginMutationVariables = Exact<{
  data: LoginInput
}>

export type LoginMutation = { __typename?: 'Mutation' } & {
  login?: Maybe<
    { __typename?: 'UserToken' } & Pick<UserToken, 'token'> & { user: { __typename?: 'User' } & UserDetailsFragment }
  >
}

export type UptimeQueryVariables = Exact<{ [key: string]: never }>

export type UptimeQuery = { __typename?: 'Query' } & Pick<Query, 'uptime'>

export type IntercomDetailsFragment = { __typename?: 'IntercomMessage' } & Pick<
  IntercomMessage,
  'type' | 'scope' | 'payload'
>

export type IntercomPubMutationVariables = Exact<{
  type: Scalars['String']
  scope?: Maybe<Scalars['String']>
  payload?: Maybe<Scalars['JSON']>
}>

export type IntercomPubMutation = { __typename?: 'Mutation' } & {
  intercomPub?: Maybe<{ __typename?: 'IntercomMessage' } & IntercomDetailsFragment>
}

export type IntercomSubSubscriptionVariables = Exact<{ [key: string]: never }>

export type IntercomSubSubscription = { __typename?: 'Subscription' } & {
  intercomSub?: Maybe<{ __typename?: 'IntercomMessage' } & IntercomDetailsFragment>
}

export type ProfileDetailsFragment = { __typename?: 'Profile' } & Pick<
  Profile,
  'id' | 'username' | 'avatarUrl' | 'name' | 'bio' | 'location' | 'lastSeen' | 'status'
>

export type ProfilesQueryVariables = Exact<{ [key: string]: never }>

export type ProfilesQuery = { __typename?: 'Query' } & {
  profiles?: Maybe<Array<{ __typename?: 'Profile' } & ProfileDetailsFragment>>
}

export type ProfileQueryVariables = Exact<{
  username: Scalars['String']
}>

export type ProfileQuery = { __typename?: 'Query' } & {
  profile?: Maybe<
    { __typename?: 'Profile' } & {
      projects?: Maybe<Array<{ __typename?: 'Project' } & ProjectDetailsFragment>>
    } & ProfileDetailsFragment
  >
}

export type OwnerDetailsFragment = { __typename?: 'Profile' } & Pick<
  Profile,
  'id' | 'username' | 'avatarUrl' | 'name' | 'lastSeen' | 'status'
>

export type ProjectDetailsFragment = { __typename?: 'Project' } & Pick<
  Project,
  'id' | 'name' | 'createdAt' | 'updatedAt'
> & { owner: { __typename?: 'Profile' } & OwnerDetailsFragment }

export type ProjectsQueryVariables = Exact<{ [key: string]: never }>

export type ProjectsQuery = { __typename?: 'Query' } & {
  projects?: Maybe<Array<{ __typename?: 'Project' } & ProjectDetailsFragment>>
}

export type UserProjectsQueryVariables = Exact<{
  userId: Scalars['String']
}>

export type UserProjectsQuery = { __typename?: 'Query' } & {
  userProjects?: Maybe<Array<{ __typename?: 'Project' } & ProjectDetailsFragment>>
}

export type ProjectQueryVariables = Exact<{
  id: Scalars['String']
}>

export type ProjectQuery = { __typename?: 'Query' } & {
  project?: Maybe<{ __typename?: 'Project' } & ProjectDetailsFragment>
}

export type CreateProjectMutationVariables = Exact<{
  data: CreateProjectInput
}>

export type CreateProjectMutation = { __typename?: 'Mutation' } & {
  createProject?: Maybe<{ __typename?: 'Project' } & ProjectDetailsFragment>
}

export const UserDetailsFragmentDoc = gql`
  fragment UserDetails on User {
    id
    name
    username
    avatarUrl
    email
  }
`
export const IntercomDetailsFragmentDoc = gql`
  fragment IntercomDetails on IntercomMessage {
    type
    scope
    payload
  }
`
export const ProfileDetailsFragmentDoc = gql`
  fragment ProfileDetails on Profile {
    id
    username
    avatarUrl
    name
    bio
    location
    lastSeen
    status
  }
`
export const OwnerDetailsFragmentDoc = gql`
  fragment OwnerDetails on Profile {
    id
    username
    avatarUrl
    name
    lastSeen
    status
  }
`
export const ProjectDetailsFragmentDoc = gql`
  fragment ProjectDetails on Project {
    id
    name
    createdAt
    updatedAt
    owner {
      ...OwnerDetails
    }
  }
  ${OwnerDetailsFragmentDoc}
`
export const MeDocument = gql`
  query me {
    me {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class MeGQL extends Apollo.Query<MeQuery, MeQueryVariables> {
  document = MeDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const RegisterDocument = gql`
  mutation Register($data: RegisterInput!) {
    register(data: $data) {
      token
      user {
        ...UserDetails
      }
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class RegisterGQL extends Apollo.Mutation<RegisterMutation, RegisterMutationVariables> {
  document = RegisterDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const LoginDocument = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      token
      user {
        ...UserDetails
      }
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
  document = LoginDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UptimeDocument = gql`
  query Uptime {
    uptime
  }
`

@Injectable({
  providedIn: 'root',
})
export class UptimeGQL extends Apollo.Query<UptimeQuery, UptimeQueryVariables> {
  document = UptimeDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const IntercomPubDocument = gql`
  mutation IntercomPub($type: String!, $scope: String, $payload: JSON) {
    intercomPub(type: $type, scope: $scope, payload: $payload) {
      ...IntercomDetails
    }
  }
  ${IntercomDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class IntercomPubGQL extends Apollo.Mutation<IntercomPubMutation, IntercomPubMutationVariables> {
  document = IntercomPubDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const IntercomSubDocument = gql`
  subscription IntercomSub {
    intercomSub {
      ...IntercomDetails
    }
  }
  ${IntercomDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class IntercomSubGQL extends Apollo.Subscription<IntercomSubSubscription, IntercomSubSubscriptionVariables> {
  document = IntercomSubDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const ProfilesDocument = gql`
  query profiles {
    profiles {
      ...ProfileDetails
    }
  }
  ${ProfileDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class ProfilesGQL extends Apollo.Query<ProfilesQuery, ProfilesQueryVariables> {
  document = ProfilesDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const ProfileDocument = gql`
  query profile($username: String!) {
    profile(username: $username) {
      ...ProfileDetails
      projects {
        ...ProjectDetails
      }
    }
  }
  ${ProfileDetailsFragmentDoc}
  ${ProjectDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class ProfileGQL extends Apollo.Query<ProfileQuery, ProfileQueryVariables> {
  document = ProfileDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const ProjectsDocument = gql`
  query projects {
    projects {
      ...ProjectDetails
    }
  }
  ${ProjectDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class ProjectsGQL extends Apollo.Query<ProjectsQuery, ProjectsQueryVariables> {
  document = ProjectsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserProjectsDocument = gql`
  query userProjects($userId: String!) {
    userProjects(userId: $userId) {
      ...ProjectDetails
    }
  }
  ${ProjectDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserProjectsGQL extends Apollo.Query<UserProjectsQuery, UserProjectsQueryVariables> {
  document = UserProjectsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const ProjectDocument = gql`
  query project($id: String!) {
    project(id: $id) {
      ...ProjectDetails
    }
  }
  ${ProjectDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class ProjectGQL extends Apollo.Query<ProjectQuery, ProjectQueryVariables> {
  document = ProjectDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const CreateProjectDocument = gql`
  mutation createProject($data: CreateProjectInput!) {
    createProject(data: $data) {
      ...ProjectDetails
    }
  }
  ${ProjectDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class CreateProjectGQL extends Apollo.Mutation<CreateProjectMutation, CreateProjectMutationVariables> {
  document = CreateProjectDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

interface WatchQueryOptionsAlone<V> extends Omit<ApolloCore.WatchQueryOptions<V>, 'query' | 'variables'> {}

interface QueryOptionsAlone<V> extends Omit<ApolloCore.QueryOptions<V>, 'query' | 'variables'> {}

interface MutationOptionsAlone<T, V> extends Omit<ApolloCore.MutationOptions<T, V>, 'mutation' | 'variables'> {}

interface SubscriptionOptionsAlone<V> extends Omit<ApolloCore.SubscriptionOptions<V>, 'query' | 'variables'> {}

@Injectable({ providedIn: 'root' })
export class ApolloAngularSDK {
  constructor(
    private meGql: MeGQL,
    private registerGql: RegisterGQL,
    private loginGql: LoginGQL,
    private uptimeGql: UptimeGQL,
    private intercomPubGql: IntercomPubGQL,
    private intercomSubGql: IntercomSubGQL,
    private profilesGql: ProfilesGQL,
    private profileGql: ProfileGQL,
    private projectsGql: ProjectsGQL,
    private userProjectsGql: UserProjectsGQL,
    private projectGql: ProjectGQL,
    private createProjectGql: CreateProjectGQL,
  ) {}

  me(variables?: MeQueryVariables, options?: QueryOptionsAlone<MeQueryVariables>) {
    return this.meGql.fetch(variables, options)
  }

  meWatch(variables?: MeQueryVariables, options?: WatchQueryOptionsAlone<MeQueryVariables>) {
    return this.meGql.watch(variables, options)
  }

  register(
    variables: RegisterMutationVariables,
    options?: MutationOptionsAlone<RegisterMutation, RegisterMutationVariables>,
  ) {
    return this.registerGql.mutate(variables, options)
  }

  login(variables: LoginMutationVariables, options?: MutationOptionsAlone<LoginMutation, LoginMutationVariables>) {
    return this.loginGql.mutate(variables, options)
  }

  uptime(variables?: UptimeQueryVariables, options?: QueryOptionsAlone<UptimeQueryVariables>) {
    return this.uptimeGql.fetch(variables, options)
  }

  uptimeWatch(variables?: UptimeQueryVariables, options?: WatchQueryOptionsAlone<UptimeQueryVariables>) {
    return this.uptimeGql.watch(variables, options)
  }

  intercomPub(
    variables: IntercomPubMutationVariables,
    options?: MutationOptionsAlone<IntercomPubMutation, IntercomPubMutationVariables>,
  ) {
    return this.intercomPubGql.mutate(variables, options)
  }

  intercomSub(
    variables?: IntercomSubSubscriptionVariables,
    options?: SubscriptionOptionsAlone<IntercomSubSubscriptionVariables>,
  ) {
    return this.intercomSubGql.subscribe(variables, options)
  }

  profiles(variables?: ProfilesQueryVariables, options?: QueryOptionsAlone<ProfilesQueryVariables>) {
    return this.profilesGql.fetch(variables, options)
  }

  profilesWatch(variables?: ProfilesQueryVariables, options?: WatchQueryOptionsAlone<ProfilesQueryVariables>) {
    return this.profilesGql.watch(variables, options)
  }

  profile(variables: ProfileQueryVariables, options?: QueryOptionsAlone<ProfileQueryVariables>) {
    return this.profileGql.fetch(variables, options)
  }

  profileWatch(variables: ProfileQueryVariables, options?: WatchQueryOptionsAlone<ProfileQueryVariables>) {
    return this.profileGql.watch(variables, options)
  }

  projects(variables?: ProjectsQueryVariables, options?: QueryOptionsAlone<ProjectsQueryVariables>) {
    return this.projectsGql.fetch(variables, options)
  }

  projectsWatch(variables?: ProjectsQueryVariables, options?: WatchQueryOptionsAlone<ProjectsQueryVariables>) {
    return this.projectsGql.watch(variables, options)
  }

  userProjects(variables: UserProjectsQueryVariables, options?: QueryOptionsAlone<UserProjectsQueryVariables>) {
    return this.userProjectsGql.fetch(variables, options)
  }

  userProjectsWatch(
    variables: UserProjectsQueryVariables,
    options?: WatchQueryOptionsAlone<UserProjectsQueryVariables>,
  ) {
    return this.userProjectsGql.watch(variables, options)
  }

  project(variables: ProjectQueryVariables, options?: QueryOptionsAlone<ProjectQueryVariables>) {
    return this.projectGql.fetch(variables, options)
  }

  projectWatch(variables: ProjectQueryVariables, options?: WatchQueryOptionsAlone<ProjectQueryVariables>) {
    return this.projectGql.watch(variables, options)
  }

  createProject(
    variables: CreateProjectMutationVariables,
    options?: MutationOptionsAlone<CreateProjectMutation, CreateProjectMutationVariables>,
  ) {
    return this.createProjectGql.mutate(variables, options)
  }
}
