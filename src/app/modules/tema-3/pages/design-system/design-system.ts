import { Component } from '@angular/core';
import { HeaderData } from '../../../shared/interfaces/header.interface';
import { CardData } from '../../../shared/interfaces/card.interface';
import { 
  BENEFICIOS_DATA, 
  PROBLEMAS_DATA, 
  COMPONENTES_CLAVE_DATA, 
  NIVELES_ATOMICOS_DATA,
  Beneficio,
  Problema
} from '../../interfaces/design-system.interface';

@Component({
  selector: 'app-design-system',
  standalone: false,
  templateUrl: './design-system.html',
  styleUrl: './design-system.scss'
})
export class DesignSystemComponent {

  datosHeader: HeaderData = {
    badge: 'Docente: Jesus David Mejia',
    titulo: 'Sistemas de Diseño',
    descripcion: 'Es un conjunto de principios, reglas, componentes y patrones reutilizables. Asegura la consistencia visual y funcional, sirve como puente entre el diseño y el desarrollo, y permite escalar productos digitales de forma ordenada.'
  };

  beneficios: Beneficio[] = BENEFICIOS_DATA;
  problemas: Problema[] = PROBLEMAS_DATA;
  componentesClave: string[] = COMPONENTES_CLAVE_DATA;
  nivelesAtomicos: CardData[] = NIVELES_ATOMICOS_DATA;
}
