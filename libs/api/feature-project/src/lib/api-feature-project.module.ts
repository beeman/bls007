import { ApiDataAccessModule } from '@bls007/api/data-access'
import { Module } from '@nestjs/common'
import { ApiFeatureProjectProfileResolver } from './api-feature-project-profile.resolver'
import { ApiFeatureProjectResolver } from './api-feature-project.resolver'
import { ApiFeatureProjectService } from './api-feature-project.service'

@Module({
  imports: [ApiDataAccessModule],
  providers: [ApiFeatureProjectResolver, ApiFeatureProjectProfileResolver, ApiFeatureProjectService],
})
export class ApiFeatureProjectModule {}
