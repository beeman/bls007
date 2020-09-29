import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { AdminDataAccessModule } from '@bls007/admin/data-access'
import { AdminFeatureAboutComponent } from './admin-feature-about.component'

@NgModule({
  declarations: [AdminFeatureAboutComponent],
  imports: [
    CommonModule,
    AdminDataAccessModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: AdminFeatureAboutComponent }]),
  ],
})
export class AdminFeatureAboutModule {}
