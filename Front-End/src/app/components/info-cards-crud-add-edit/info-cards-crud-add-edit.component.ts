import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InfoCard } from 'src/app/interfaces/infoCard';
import { InfoCardService } from 'src/app/services/infoCard.service';

@Component({
  selector: 'app-info-cards-crud-add-edit',
  templateUrl: './info-cards-crud-add-edit.component.html',
  styleUrls: ['./info-cards-crud-add-edit.component.scss'],
})
export class InfoCardsCrudAddEditComponent implements OnInit {
  formInfoCards: FormGroup;
  id: number;
  operacion: string = 'Agregar ';
  fileFromEvent: any;

  constructor(
    private fb: FormBuilder,
    private _infoCardService: InfoCardService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute
  ) {
    this.formInfoCards = this.fb.group({
      category: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
    });
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  public onFileChanged(event: any) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.formInfoCards.value.image = file;
    }
  }

  ngOnInit(): void {
    if (this.id != 0) {
      this.operacion = 'Editar ';
      this.getInfoCard(this.id);
    }
  }

  getInfoCard(id: number) {
    this._infoCardService.getInfoCard(id).subscribe((data: InfoCard) => {
      this.formInfoCards.setValue({
        category: data.category,
        title: data.title,
        description: data.description,
        image: data.imageUrl,
      });
    });
  }

  addInfoCard() {
    const infoCard: InfoCard = {
      category: this.formInfoCards.value.category,
      title: this.formInfoCards.value.title,
      description: this.formInfoCards.value.description,
      imageUrl: '^^NO IMAGE^^',
    };

    console.log("Lalala ",this.fileFromEvent )
    
    if (this.id !== 0) {
      infoCard.id = this.id;
      this._infoCardService.updateInfoCard(this.id, infoCard).subscribe(() => {
        this.toastr.info(
          'La Carta fue actualizada con exito!',
          'Carta Actualizada'
        );
        this.router.navigate(['/infocard']);
      });
    } else {

      const fd = new FormData();
      fd.append('file', this.formInfoCards.value.image);
      console.log(fd.get('file'));
  
      this._infoCardService.uploadImgInfoCard(fd).subscribe((data) => {
        infoCard.imageUrl = data.url;
        this._infoCardService.saveInfoCard(infoCard).subscribe(() => {
          this.toastr.success('La Carta fue creada con exito!', 'Carta Creada');
          this.router.navigate(['/infocard']);  
        });
      });

    }
  }
  
}
