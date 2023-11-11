import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
})
export class LoginUserComponent implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(
    private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService
  ) {}

  ngOnInit(): void {}

  login() {
    // Validamos que el usuario ingrese los datos necesarios
    if (this.email == '' || this.password == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return;
    }
    
    // Creamos el Objeto
    const user: User = {
      username: this.username,
      email: this.email,
      password: this.password,
    };

    this.loading = true;

    // TODO: si role: USER then .navigate(['/home']);
    // TODO: si role: ADMIN then .navigate(['/dashboard']);
    this._userService.login(user).subscribe((res: any) => {
      console.log('RESPONSE: ', res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['/home']);
    });
  } // login() close 
  
}
