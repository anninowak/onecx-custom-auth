import { ConfigurationService } from '@onecx/angular-integration-interface';
import { AuthService } from './auth.service';
import { KeycloakAuthService } from './keycloak-auth.service';
import { KeycloakConfig } from 'keycloak-js';
import { KeycloakService } from 'keycloak-angular';

export class MyCustomAuthService
  extends KeycloakAuthService
  implements AuthService
{
  constructor(configService: ConfigurationService) {
    super(new KeycloakService(), configService);
  }
  override async init(): Promise<boolean> {
    console.log('MyCustomAuthService: start init');
    const value = await super.init();
    console.log('MyCustomAuthService: initResult', value);
    return value;
  }
  override getHeaderValues(): Record<string, string> {
    const headerValues = super.getHeaderValues();
    console.log(
      'HeaderValues: ' +
        headerValues +
        'This message derives from the MyCustomAuthLibrary'
    );
    return headerValues;
  }
  override logout(): void {
    console.log('Logout: This message derives from the MyCustomAuthLibrary');
    super.logout();
  }

  override getValidKCConfig(): KeycloakConfig {
    const config = super.getValidKCConfig();
    console.log(
      'Config: ' + config + 'This message derives from the MyCustomAuthLibrary'
    );
    return config;
  }
}

export default function (params: {
  configService: ConfigurationService;
}): AuthService {
  return new MyCustomAuthService(params.configService);
}
