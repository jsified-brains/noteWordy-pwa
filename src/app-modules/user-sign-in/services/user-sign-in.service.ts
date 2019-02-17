import { Injectable } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSignInService {
  public signedInUser: SocialUser = null;
  public signedInUserSubject: BehaviorSubject<SocialUser> = new BehaviorSubject(null);

  constructor(private socialAuthService: AuthService) {}

  public userSignIn = async (socialPlatform: string): Promise<SocialUser> => {
    const socialPlatformProvider = this.getSocialProviderId(socialPlatform);
    if (socialPlatformProvider === '') {
      return null;
    }

    try {
      const userData = await this.socialAuthService.signIn(socialPlatformProvider);
      if (userData && userData.authToken) {
        localStorage.setItem('noteWordyUser', JSON.stringify(userData));
        this.signedInUser = userData;
        this.signedInUserSubject.next(userData);
      }
      return userData;
    } catch (err) {
      throw err;
    }
  };

  private getSocialProviderId = (socialPlatform: string): string => {
    switch (socialPlatform.toLowerCase()) {
      case 'google':
        return GoogleLoginProvider.PROVIDER_ID;
      case 'facebook':
        return ''; // facebook not supported
      default:
        return '';
    }
  };

  isUserSessionValid = () => {
    this.signedInUserSubject = new BehaviorSubject<SocialUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.signedInUser = JSON.parse(localStorage.getItem('currentUser'));
  };

  logOut = async () => {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    await this.socialAuthService.signOut(true);
    this.signedInUserSubject.next(null);
  };
}
