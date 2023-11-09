import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InfoCard } from 'src/app/interfaces/infoCard';
import { InfoCardService } from 'src/app/services/infoCard.service';

@Component({
  selector: 'app-info-cards-crud-add-edit',
  templateUrl: './info-cards-crud-add-edit.component.html',
  styleUrls: ['./info-cards-crud-add-edit.component.scss']
})
export class InfoCardsCrudAddEditComponent implements OnInit {
  formInfoCards: FormGroup;
  //loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor(private fb: FormBuilder,
              private _infoCardService: InfoCardService,
              private router: Router,
              private toastr: ToastrService,
              private aRouter: ActivatedRoute) {
              this.formInfoCards = this.fb.group({
                category: ['', Validators.required],
                title: ['', Validators.required],
                description: ['', Validators.required],
                image: ['', Validators.required],
              })
              this.id = Number(aRouter.snapshot.paramMap.get('id'));
            }

  ngOnInit(): void {
    if (this.id != 0) {
      // Es editar
      this.operacion = 'Editar ';
      this.getInfoCard(this.id);
    }  
  }

  getInfoCard(id: number) {
    //this.loading = true;
    this._infoCardService.getInfoCard(id).subscribe((data: InfoCard) => {
      //this.loading = false;
      this.formInfoCards.setValue({
        category: data.category,
        title: data.title,
        description: data.description,
        image: data.image
      })
    })
  }

  addInfoCard() {
    const infoCard: InfoCard = {
      category: this.formInfoCards.value.category,
      title: this.formInfoCards.value.title,
      description: this.formInfoCards.value.description,
      image: this.formInfoCards.value.image,
    }
    //this.loading = true;

    if (this.id !== 0) {
      // Es editar
      infoCard.id = this.id;
      this._infoCardService.updateInfoCard(this.id, infoCard).subscribe(() => {
        this.toastr.info('La Carta fue actualizada con exito!', 'Carta Actualizada');
        //this.loading = false;
        this.router.navigate(['/infocard']);
      })
    } else {
      // Es agregar
      this._infoCardService.saveInfoCard(infoCard).subscribe(() => {
        this.toastr.success('La Carta fue creada con exito!', 'Carta Creada');
        //this.loading = false;
        this.router.navigate(['/infocard']);
      })
    }
  }
}
