import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AdminFeatureShellModule } from '@bls007/admin/feature-shell'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, AdminFeatureShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
