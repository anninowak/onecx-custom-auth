import { ConfigurationService } from '@onecx/angular-integration-interface';
import { AuthService } from '@onecx/angular-auth;

export class MyCustomAuthService implements AuthService {

    constructor(configService: ConfigurationService) {}
}

export default function(params: { configService: ConfigurationService }): AuthService {
    return new MyCustomAuthService(params.configService);
  }
