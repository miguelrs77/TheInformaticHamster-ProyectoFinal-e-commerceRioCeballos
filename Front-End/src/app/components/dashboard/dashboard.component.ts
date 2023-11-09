import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { InfoCard } from 'src/app/interfaces/infoCard';
import { InfoCardService } from 'src/app/services/infoCard.service';
import { Pregunta } from 'src/app/interfaces/pregunta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  listPreguntas: Pregunta[] = [];
  listInfoCards: InfoCard[] = [];

  constructor(
    private _infoCardService: InfoCardService,
    private _preguntaService: PreguntaService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getListInfoCards();
    this.getListPreguntas();
  }

  getListPreguntas() {
    this._preguntaService.getListPreguntas().subscribe((data: Pregunta[]) => {
      this.listPreguntas = data;
    });
  }

  deletePregunta(id: number) {
    this._preguntaService.deletePregunta(id).subscribe(() => {
      this.getListPreguntas();
      this.toastr.error(
        'La pregunta fue eliminada con exito!',
        'Pregunta eliminada'
      );
    });
  }

  getListInfoCards() {
    this._infoCardService.getListInfoCards().subscribe((data: InfoCard[]) => {
      this.listInfoCards = data;
    });
  }

  deleteInfoCard(id: number) {
    this._infoCardService.deleteInfoCard(id).subscribe(() => {
      this.getListInfoCards();
      this.toastr.error(
        'La carta informativa fue eliminada con exito!',
        'Carta informativa eliminada'
      );
    });
  }

  // ngOnInit(): void {
  //   this.loadCustomer();
  // }

  //TODO: funciones para llamar a routes en back y obtener info para completar dashboard
  //TODO: ej: getUsers() obtenemos cuantas cuentas users se crearon en la DB
  // loadCustomer() {
  //   this._userService.getUser().subscribe((res: any) => {
  //   })
  // }
}
