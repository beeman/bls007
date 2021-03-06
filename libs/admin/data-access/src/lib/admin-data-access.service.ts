import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { ApolloAngularSDK, IntercomMessage } from '../generated/graphql'

@Injectable()
export class AdminDataAccessService {
  constructor(public readonly sdk: ApolloAngularSDK) {}

  public uptime(): Observable<number> {
    return this.sdk.uptime(null, { fetchPolicy: 'network-only' }).pipe(map((res) => res?.data?.uptime))
  }

  public intercomPub(type: string, scope: string, payload: any): Observable<IntercomMessage> {
    return this.sdk.intercomPub({ type, scope, payload }).pipe(map((res) => res?.data?.intercomPub))
  }

  public intercomSub(): Observable<IntercomMessage> {
    return this.sdk.intercomSub().pipe(map((res) => res?.data?.intercomSub))
  }
}
