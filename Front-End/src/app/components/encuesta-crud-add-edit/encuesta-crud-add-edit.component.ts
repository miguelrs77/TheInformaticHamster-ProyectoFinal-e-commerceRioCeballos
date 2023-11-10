import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pregunta } from 'src/app/interfaces/pregunta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-encuesta-crud-add-edit',
  templateUrl: './encuesta-crud-add-edit.component.html',
  styleUrls: ['./encuesta-crud-add-edit.component.scss']
})
export class SurveyCrudAddEditComponent implements OnInit {
  formPreguntas: FormGroup;
  //loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor(private fb: FormBuilder,
              private _preguntaService: PreguntaService,
              private router: Router,
              private toastr: ToastrService,
              private aRouter: ActivatedRoute) {
              this.formPreguntas = this.fb.group({
                question: ['', Validators.required],
              })
              this.id = Number(aRouter.snapshot.paramMap.get('id'));
            }

  ngOnInit(): void {
    if (this.id != 0) {
      // Es editar
      this.operacion = 'Editar ';
      this.getPregunta(this.id);
    }  
  }

  getPregunta(id: number) {
    //this.loading = true;
    this._preguntaService.getPregunta(id).subscribe((data: Pregunta) => {
      //this.loading = false;
      this.formPreguntas.setValue({
        question: data.question
      })
    })
  }

  addPregunta() {
    const pregunta: Pregunta = {
      question: this.formPreguntas.value.question
    }
    //this.loading = true;

    if (this.id !== 0) {
      // Es editar
      pregunta.id = this.id;
      this._preguntaService.updatePregunta(this.id, pregunta).subscribe(() => {
        this.toastr.info('La pregunta fue actualizada con exito!', 'Pregunta Actualizada');
        //this.loading = false;
        this.router.navigate(['/survey']);
      })
    } else {
      // Es agregar
      this._preguntaService.savePregunta(pregunta).subscribe(() => {
        this.toastr.success('La pregunta fue creada con exito!', 'Pregunta Creada');
        //this.loading = false;
        this.router.navigate(['/survey']);
      })
    }
  }
}
