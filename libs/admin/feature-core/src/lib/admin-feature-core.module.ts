import { APP_INITIALIZER, NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AdminFeatureCoreGraphQLModule } from './admin-feature-core-graphql.module'
import { AdminFeatureCoreService } from './admin-feature-core.service'

export function loadConfiguration(service: AdminFeatureCoreService) {
  return () => service.loadConfig().subscribe()
}

@NgModule({
  imports: [HttpClientModule, AdminFeatureCoreGraphQLModule],
  providers: [
    AdminFeatureCoreService,
    {
      provide: APP_INITIALIZER,
      deps: [AdminFeatureCoreService],
      multi: true,
      useFactory: loadConfiguration,
    },
  ],
})
export class AdminFeatureCoreModule {}
