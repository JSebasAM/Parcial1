import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class CardComponent {
  @Input() numero: number = 0;
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() beneficios: string = '';
  @Input() ejemplo: string = '';
}
