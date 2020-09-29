import { Component } from '@angular/core'
import { AdminDataAccessService } from '@bls007/admin/data-access'

@Component({
  template: `
    <h2>Dashboard</h2>
    <pre>Server uptime: {{ uptime$ | async }}</pre>
  `,
})
export class AdminFeatureDashboardComponent {
  public uptime$ = this.data.uptime()
  constructor(private readonly data: AdminDataAccessService) {}
}
