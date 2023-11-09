import { Component, Input } from '@angular/core';
import { InfoCard } from 'src/app/interfaces/infoCard';
@Component({
  selector: 'app-info-cards',
  templateUrl: './info-cards.component.html',
  styleUrls: ['./info-cards.component.scss']
})

export class InfoCardsComponent {
  // Input sirve para traer info de afuera del componente
  // esta funcion Input la llamamos desde htmlTag(donde queremos renderizar el componente(home))= title={{infoCard.title}}"
  @Input() infoCard: InfoCard | null = null;

  ngOnInit():void {
  };

}
