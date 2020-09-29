import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { ApiDataAccessModule } from '@bls007/api/data-access'
import { ApiFeatureAuthResolver } from './api-feature-auth.resolver'
import { ApiFeatureAuthService } from './api-feature-auth.service'
import { JwtStrategy } from './strategies/jwt.strategy'

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'PANNG_STACK_SECRET',
    }),
    ApiDataAccessModule,
  ],
  providers: [ApiFeatureAuthResolver, ApiFeatureAuthService, JwtStrategy],
})
export class ApiFeatureAuthModule {}
