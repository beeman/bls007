import { Component } from '@angular/core'
import { AdminFeatureCoreService } from '@bls007/admin/feature-core'

@Component({
  template: `
    <h1>
      <img [attr.src]="logo" height="30" alt="" />
      Admin
      <small>
        &nbsp; <a routerLink="/dashboard">Dashboard</a> &nbsp; <a routerLink="/intercom">Intercom</a> &nbsp;
        <a routerLink="/about">About</a>
      </small>
    </h1>
    <pre>{{ config | json }}</pre>
    <router-outlet></router-outlet>
  `,
})
export class AdminFeatureShellComponent {
  config = AdminFeatureCoreService.config
  logo = '/assets/images/logo.png'
  // Determine what links we want to show
}
