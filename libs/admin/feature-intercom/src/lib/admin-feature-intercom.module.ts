import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { AdminDataAccessModule } from '@bls007/admin/data-access'

import { AdminFeatureIntercomComponent } from './admin-feature-intercom.component'

@NgModule({
  declarations: [AdminFeatureIntercomComponent],
  imports: [
    CommonModule,
    AdminDataAccessModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: AdminFeatureIntercomComponent }]),
  ],
})
export class AdminFeatureIntercomModule {}
