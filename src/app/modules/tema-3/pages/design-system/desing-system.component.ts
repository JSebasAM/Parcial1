import { Component } from '@angular/core';
import { HeaderData } from '../../../shared/interfaces/header.interface';
import { CardData } from '../../../shared/interfaces/card.interface';

/**
 * @description
 * Componente principal del Módulo 3: Sistemas de Diseño.
 * Actúa como un contenedor de datos (Smart Component) que prepara y provee
 * la información académica estandarizada para ser inyectada y renderizada
 * por los componentes visuales del SharedModule (Header y Cards).
 */
@Component({
  selector: 'app-design-system',
  standalone: false,
  templateUrl: './design-system.html',
  styleUrl: './design-system.scss'
})
export class DesignSystemComponent {

  /**
   * @description
   * Objeto que contiene la configuración de metadatos y textos principales
   * para el encabezado de la página. Está estrictamente tipado mediante `HeaderData`.
   */
  datosHeader: HeaderData = {
    badge: 'Módulo 3 | Arquitectura Front-End',
    titulo: 'Sistemas de Diseño en Software',
    descripcion: 'Un sistema de diseño es un conjunto estructurado de reglas, principios y componentes reutilizables que garantizan la consistencia visual y técnica durante todo el ciclo de vida del desarrollo.'
  };

  /**
   * @description
   * Colección de conceptos arquitectónicos clave sobre los Sistemas de Diseño.
   * Se utiliza en la vista para iterar dinámicamente sobre el componente
   * reutilizable `<app-card>` asegurando la estructura a través de `CardData`.
   */
  listaTarjetas: CardData[] = [
    {
      titulo: 'Componentes Reutilizables',
      descripcion: 'Piezas modulares de interfaz gráfica (UI) construidas una sola vez para ser utilizadas en diferentes vistas o proyectos.',
      beneficios: 'Aceleran el desarrollo, reducen errores y evitan la duplicación de código (Principio DRY).',
      ejemplo: 'El componente <app-card> que estamos utilizando para renderizar este mismo texto.'
    },
    {
      titulo: 'Guías de Estilo',
      descripcion: 'Reglas documentadas estrictamente sobre el uso de tipografías, paletas de colores, iconografía y espaciados.',
      beneficios: 'Aseguran la cohesión visual y actúan como "fuente de la verdad" entre desarrolladores y diseñadores.'
    },
    {
      titulo: 'Tokens de Diseño',
      descripcion: 'Variables que almacenan decisiones de diseño para que la programación no dependa de valores fijos.',
      ejemplo: 'Usar la variable SCSS $primary-color en lugar de escribir #2563eb.'
    },
    {
      titulo: 'Librerías de Patrones',
      descripcion: 'Colecciones de soluciones estructurales y arquitectónicas para problemas recurrentes en la interacción del usuario.',
      beneficios: 'Estandarizan la navegación, mejorando la usabilidad y la previsibilidad del software.'
    }
  ];
}
