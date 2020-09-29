import { Component } from '@angular/core'
import { AdminDataAccessService } from '@bls007/admin/data-access'

@Component({
  template: `
    <h2>Dashboard</h2>
    <pre>Projects: {{ projects$ | async | json }}</pre>
  `,
})
export class AdminFeatureDashboardComponent {
  public projects$ = this.data.sdk.projects()
  constructor(private readonly data: AdminDataAccessService) {}
}
