import { Component } from '@angular/core'

@Component({
  template: `
    <h1>
      Admin
      <small>
        &nbsp; <a routerLink="/dashboard">Dashboard</a> &nbsp;
        <a routerLink="/about">About</a>
      </small>
    </h1>
    <router-outlet></router-outlet>
  `,
})
export class AdminFeatureShellComponent {}
