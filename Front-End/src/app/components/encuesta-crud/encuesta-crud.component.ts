import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Pregunta } from 'src/app/interfaces/pregunta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-encuesta-crud',
  templateUrl: './encuesta-crud.component.html',
  styleUrls: ['./encuesta-crud.component.scss']
})
export class SurveyCrudComponent implements OnInit {
  listPreguntas: Pregunta[] = []
  //loading: boolean = false;

  constructor(private _preguntaService: PreguntaService, private toastr: ToastrService) {  }

  ngOnInit(): void {
    this.getListPreguntas();
  }

  getListPreguntas() {
    //this.loading = true;
    this._preguntaService.getListPreguntas().subscribe((data: Pregunta[]) => {
      this.listPreguntas = data;
      //this.loading = false;
    })
  }

  deletePregunta(id: number) {
    //this.loading = true;
    this._preguntaService.deletePregunta(id).subscribe(() => {
      this.getListPreguntas();
      this.toastr.error('La pregunta fue eliminada con exito!', 'Pregunta eliminada');
    })
  }
  
}
