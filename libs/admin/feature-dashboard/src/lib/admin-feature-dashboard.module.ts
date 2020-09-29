import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { AdminDataAccessModule } from '@bls007/admin/data-access'
import { AdminFeatureDashboardComponent } from './admin-feature-dashboard.component'

@NgModule({
  declarations: [AdminFeatureDashboardComponent],
  imports: [
    CommonModule,
    AdminDataAccessModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: AdminFeatureDashboardComponent,
      },
    ]),
  ],
})
export class AdminFeatureDashboardModule {}
