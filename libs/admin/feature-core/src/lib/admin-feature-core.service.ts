import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment.prod'
import { tap } from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class AdminFeatureCoreService {
  static config = {}
  constructor(private readonly http: HttpClient) {}

  loadConfig() {
    console.log('loadConfig loaded', environment.api + '/config')
    return this.http.get(environment.api + '/config').pipe(
      tap((config) => {
        AdminFeatureCoreService.config = config
        console.log('config loaded', config)
      }),
    )
  }
}
