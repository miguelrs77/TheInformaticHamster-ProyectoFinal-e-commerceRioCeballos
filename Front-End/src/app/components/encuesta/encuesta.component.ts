import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/interfaces/pregunta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss']
})
export class EncuestaComponent implements OnInit {
  listPreguntas: Pregunta[] = []

  constructor(private _preguntaService: PreguntaService) {  }

  ngOnInit(): void {
    this.getListPreguntas();
  }

  getListPreguntas() {
    this._preguntaService.getListPreguntas().subscribe((data: Pregunta[]) => {
      this.listPreguntas = data;
    })
  }
}
