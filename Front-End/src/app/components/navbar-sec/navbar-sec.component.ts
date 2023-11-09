import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-navbar-sec',
  templateUrl: './navbar-sec.component.html',
  styleUrls: ['./navbar-sec.component.scss']
})
export class NavbarSecComponent {
  isLoggedIn: boolean = false;

  constructor(
    private _userService: UserService,
    private router: Router,
  ) {
    this.isLoggedIn = _userService.isLoggedIn();
  }

  logout(): void {
    this._userService.logout(); // Llama a función logout() del UserService.
    this.isLoggedIn = false;
    this.router.navigate(['/home']);
  }
}
