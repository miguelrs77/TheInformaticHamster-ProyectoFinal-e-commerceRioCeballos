import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.scss'],
})
export class SignupUserComponent implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  loading: boolean = false;

  constructor(
    private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService
  ) {}

  ngOnInit(): void {}

  addUser() {
    // Validamos que el User ingrese valores en todos los campos
    if (
      this.username == '' ||
      this.email == '' ||
      this.password == '' ||
      this.confirmPassword == ''
    ) {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return;
    }

    // Validamos que las passwords sean iguales
    if (this.password != this.confirmPassword) {
      this.toastr.error('Las contraseñas ingresadas no coinciden', 'Error');
      return;
    }

    // Creamos el Objeto
    const user: User = {
      username: this.username,
      email: this.email,
      password: this.password,
    };

    this.loading = true;
    this._userService.signUp(user).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success(
          `El usuario ${this.username} fue registrado con exito`,
          'User registrado'
        );
        this.router.navigate(['/login']);
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      },
    });
  }
}
