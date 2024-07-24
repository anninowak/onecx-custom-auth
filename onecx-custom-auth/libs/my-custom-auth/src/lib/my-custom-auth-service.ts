import { AuthService, AuthServiceFactory, Injectables } from './auth.service';

export class MyCustomAuthService implements AuthService {
  constructor(
    private keycloakAuthService: AuthService,
    config: Record<string, string>
  ) {}
  async init(config?: Record<string, unknown> | undefined): Promise<boolean> {
    console.log('MyCustomAuthService: start init');
    const value = await this.keycloakAuthService.init(config);
    console.log('MyCustomAuthService: initResult', value);
    return value;
  }
  getHeaderValues(): Record<string, string> {
    const headerValues = this.keycloakAuthService.getHeaderValues();
    return headerValues;
  }
  logout(): void {
    console.log('Logout: This message derives from the MyCustomAuthLibrary');
    this.keycloakAuthService.logout();
  }
  updateTokenIfNeeded(): Promise<boolean> {
    return this.keycloakAuthService.updateTokenIfNeeded();
  }
}
const factory: AuthServiceFactory = (
  injectorFunction: (injectable: Injectables) => unknown
) => {
  const authService = injectorFunction(
    Injectables.KEYCLOAK_AUTH_SERVICE
  ) as AuthService;
  const config = injectorFunction(Injectables.CONFIG) as Record<string, string>;
  return new MyCustomAuthService(authService, config);
};
export default factory;
