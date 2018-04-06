import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { AngularFireAuth } from 'angularfire2/auth'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService, AngularFireAuth]
})
export class AppComponent {
  title = 'app';

  constructor(public authService: AuthenticationService) {
    this.authService.user.subscribe(user =>  {
    });
  }
}
