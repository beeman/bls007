import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AdminFeatureCoreModule } from '@bls007/admin/feature-core'
import { AdminFeatureShellModule } from '@bls007/admin/feature-shell'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, AdminFeatureCoreModule, AdminFeatureShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
