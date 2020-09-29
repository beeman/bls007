import { ApiFeatureAuthModule } from '@bls007/api/feature-auth'
import { ApiFeatureCoreModule } from '@bls007/api/feature-core'
import { Module } from '@nestjs/common'
import { ApiFeatureProfileModule } from '@bls007/api/feature-profile'
import { ApiFeatureProjectModule } from '@bls007/api/feature-project'

@Module({
  imports: [ApiFeatureAuthModule, ApiFeatureCoreModule, ApiFeatureProfileModule, ApiFeatureProjectModule],
})
export class AppModule {}
