import { Component } from '@angular/core';

@Component({
  selector: 'app-design-system',
  templateUrl: './design-system.component.html',
  styleUrls: ['./design-system.component.css']
})
export class DesignSystemComponent {

  principios = [
    {
      titulo: 'Consistencia',
      descripcion: 'Mantener reglas y componentes uniformes en todo el sistema.'
    },
    {
      titulo: 'Reutilización',
      descripcion: 'Utilizar componentes y soluciones existentes para evitar duplicación.'
    },
    {
      titulo: 'Escalabilidad',
      descripcion: 'Diseñar soluciones que puedan crecer junto con el sistema.'
    },
    {
      titulo: 'Mantenibilidad',
      descripcion: 'Facilitar la modificación y evolución de la arquitectura.'
    }
  ];

  patrones = [
    {
      nombre: 'MVC',
      descripcion: 'Separa la aplicación en Modelo, Vista y Controlador.'
    },
    {
      nombre: 'Microservicios',
      descripcion: 'Divide una aplicación en servicios pequeños e independientes.'
    },
    {
      nombre: 'Repository',
      descripcion: 'Centraliza el acceso a los datos mediante una capa de abstracción.'
    },
    {
      nombre: 'Observer',
      descripcion: 'Permite notificar cambios a múltiples objetos dependientes.'
    }
  ];
}