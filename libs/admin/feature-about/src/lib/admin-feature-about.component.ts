import { Component } from '@angular/core'
import { AdminDataAccessService } from '@bls007/admin/data-access'
import { environment } from '@bls007/admin/feature-core'

@Component({
  template: `
    <h2>About</h2>
    <pre>Server uptime: {{ uptime$ | async }}</pre>
    <pre>{{ environment | json }}</pre>
  `,
})
export class AdminFeatureAboutComponent {
  public environment = environment
  public uptime$ = this.data.uptime()
  constructor(private readonly data: AdminDataAccessService) {}
}
