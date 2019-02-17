import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { APP_CONSTANTS } from './AppConstants';

// Configs
export const SocialAuthServiceConfig = () => {
  const config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(APP_CONSTANTS.google.webClientId)
    }
  ]);
  return config;
};
