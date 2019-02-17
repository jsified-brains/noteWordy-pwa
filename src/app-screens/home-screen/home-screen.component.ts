import { Component, OnInit } from '@angular/core';
import { UserSignInService } from '../../app-modules/user-sign-in/services/user-sign-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  constructor(private userSignInService: UserSignInService, private router: Router) {}

  ngOnInit() {}

  signOut = async () => {
    await this.userSignInService.logOut();
    this.router.navigate(['/signin']);
  };
}
