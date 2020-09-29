import { ApiFeatureAuthModule } from '@bls007/api/feature-auth'
import { ApiFeatureCoreModule } from '@bls007/api/feature-core'
import { Module } from '@nestjs/common'

@Module({
  imports: [ApiFeatureAuthModule, ApiFeatureCoreModule],
})
export class AppModule {}
