import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Encuestador } from 'src/app/interfaces/encuestador';
import { EncuestadorService } from 'src/app/services/encuestador.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-login-enc',
  templateUrl: './login-enc.component.html',
  styleUrls: ['./login-enc.component.scss']
})
export class LoginEncComponent implements OnInit {
  username: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(private toastr: ToastrService,
    private _encuestadorService: EncuestadorService,
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
    const encuestador: Encuestador = {
      username: this.username,
      password: this.password
    }

    this.loading = true;
    this._encuestadorService.login(encuestador).subscribe({
      next: (token) => {
        // Mala practica que el nombre sea token, que sea distinto
        localStorage.setItem('token', token);
        this.router.navigate(['/encrud']);
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msjError(e);
        this.loading = false;
      }
    })
  }
}
