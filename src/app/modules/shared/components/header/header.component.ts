import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-header.component',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  @Input() badge: string = '';
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
}
