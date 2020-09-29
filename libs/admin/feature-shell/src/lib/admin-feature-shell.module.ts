import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AdminFeatureShellComponent } from './admin-feature-shell.component'

const routes: Routes = [
  {
    path: '',
    component: AdminFeatureShellComponent,
    children: [
      // Application routes here
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'about',
        loadChildren: () => import('@bls007/admin/feature-about').then((m) => m.AdminFeatureAboutModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('@bls007/admin/feature-dashboard').then((m) => m.AdminFeatureDashboardModule),
      },
      {
        path: 'intercom',
        loadChildren: () => import('@bls007/admin/feature-intercom').then((m) => m.AdminFeatureIntercomModule),
      },
    ],
  },
]

@NgModule({
  declarations: [AdminFeatureShellComponent],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AdminFeatureShellModule {}
