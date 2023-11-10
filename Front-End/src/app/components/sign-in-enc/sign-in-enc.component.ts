import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Encuestador } from 'src/app/interfaces/encuestador';
import { EncuestadorService } from 'src/app/services/encuestador.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-sign-in-enc',
  templateUrl: './sign-in-enc.component.html',
  styleUrls: ['./sign-in-enc.component.scss']
})
export class SignInEncComponent implements OnInit {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  loading: boolean = false;

  constructor(private toastr: ToastrService,
    private _encuestadorService: EncuestadorService,
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
    const encuestador: Encuestador = {
      username: this.username,
      password: this.password
    }

    this.loading = true;
    this._encuestadorService.signIn(encuestador).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success(`El usuario ${this.username} fue registrado con exito`, 'Encuestador registrado');
        this.router.navigate(['/loginEnc']);
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      }
    })
  }

}
