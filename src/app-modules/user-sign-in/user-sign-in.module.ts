import { UserSignInRoutingModule } from './routing/user-sign-in-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSignInComponent } from './screens/user-sign-in/user-sign-in.component';

@NgModule({
  declarations: [UserSignInComponent],
  imports: [CommonModule, UserSignInRoutingModule]
})
export class UserSignInModule {}
