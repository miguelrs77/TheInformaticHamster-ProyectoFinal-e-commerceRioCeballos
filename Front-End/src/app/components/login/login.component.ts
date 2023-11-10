import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Admin } from 'src/app/interfaces/admin';
import { ErrorService } from 'src/app/services/error.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  loading: boolean = false;


  constructor(private toastr: ToastrService,
    private _adminService: AdminService,
    private router: Router,
    private _errorService: ErrorService) { }

  ngOnInit(): void {
  }
  
  login() {
    // Validamos que el usuario ingrese los datos necesarios
    if (this.username == '' || this.password == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return;
  }

  // Creamos el Objeto
  const admin: Admin = {
    username: this.username,
    password: this.password
  }

  this.loading = true;
  this._adminService.login(admin).subscribe({
    next: (token) => {
      localStorage.setItem('token', token);
      this.router.navigate(['/dashboard']);
    },
    error: (e: HttpErrorResponse) => {
      this._errorService.msjError(e);
      this.loading = false;
    }
  })
  }
  
}
