import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AdminFeatureCoreGraphQLModule } from './admin-feature-core-graphql.module'

@NgModule({
  imports: [HttpClientModule, AdminFeatureCoreGraphQLModule],
})
export class AdminFeatureCoreModule {}
