import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Admin } from 'src/app/interfaces/admin';
import { ErrorService } from 'src/app/services/error.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  loading: boolean = false;

  constructor(private toastr: ToastrService,
    private _adminService: AdminService,
    private router: Router,
    private _errorService: ErrorService) { }

  ngOnInit(): void {   
  }

  addUser() {

  // Validamos que el User ingrese valores en todos los campos
    if (this.username == '' || this.password == '' || this.confirmPassword == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return;
    }

  // Validamos que las passwords sean iguales
    if (this.password != this.confirmPassword) {
      this.toastr.error('Las contraseñas ingresadas no coinciden', 'Error');
      return;
    }

  // Creamos el Objeto
    const admin: Admin = {
      username: this.username,
      password: this.password
    }

    this.loading = true;
    this._adminService.signIn(admin).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success(`El usuario ${this.username} fue registrado con exito`, 'Admin registrado');
        this.router.navigate(['/loginAdm']);
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      }
    })
  }
}


