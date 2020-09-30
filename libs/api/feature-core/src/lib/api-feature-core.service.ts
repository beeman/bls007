import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class ApiFeatureCoreService {
  constructor(public readonly config: ConfigService) {}

  uptime(): number {
    return process.uptime()
  }

  configuration(): any {
    return {
      environment: this.config.get('environment'),
      host: this.config.get('host'),
      port: this.config.get('port'),
      apiUrl: this.config.get('apiUrl'),
    }
  }

  get apiUrl(): string {
    return this.config.get('apiUrl')
  }
}
