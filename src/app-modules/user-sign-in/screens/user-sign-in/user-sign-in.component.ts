import { Component, OnInit } from '@angular/core';
import { UserSignInService } from '../../services/user-sign-in.service';
import { SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.scss']
})
export class UserSignInComponent implements OnInit {
  public signedInUser: SocialUser = null;

  constructor(private userSignInService: UserSignInService, private router: Router) {}

  ngOnInit() {}

  onSignInPress = async (provider: string = 'google') => {
    await this.userSignInService.userSignIn(provider);
    this.signedInUser = this.userSignInService.signedInUser;
    this.router.navigate(['/home']);
  };
}
