import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { SocialAuthServiceConfig } from '../app-config/appConfig';
import { HomeScreenComponent } from '../app-screens';

@NgModule({
  declarations: [AppComponent, HomeScreenComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule.forRoot(), SocialLoginModule],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
