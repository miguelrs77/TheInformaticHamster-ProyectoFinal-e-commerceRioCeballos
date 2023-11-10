import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { InfoCard } from 'src/app/interfaces/infoCard';
import { InfoCardService } from 'src/app/services/infoCard.service';

@Component({
  selector: 'app-info-cards-crud',
  templateUrl: './info-cards-crud.component.html',
  styleUrls: ['./info-cards-crud.component.scss']
})
export class InfoCardsCrudComponent implements OnInit {
  listInfoCards: InfoCard[] = []
  //loading: boolean = false;

  constructor(private _infoCardService: InfoCardService, private toastr: ToastrService) {  }

  ngOnInit(): void {
    this.getListInfoCards();
  }

  getListInfoCards() {
    //this.loading = true;
    this._infoCardService.getListInfoCards().subscribe((data: InfoCard[]) => {
      this.listInfoCards = data;
      //this.loading = false;
    })
  }

  deleteInfoCard(id: number) {
    //this.loading = true;
    this._infoCardService.deleteInfoCard(id).subscribe(() => {
      this.getListInfoCards();
      this.toastr.error('La carta informativa fue eliminada con exito!', 'Carta informativa eliminada');
    })
  }
  
}