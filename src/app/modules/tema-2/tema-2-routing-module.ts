/**
 * @file tema-2-routing.module.ts
 * @description Configuración de enrutamiento (Routing) para el Módulo Tema 2.
 * Habilita la navegación interna del módulo aislando sus rutas del enrutador principal (AppRoutingModule).
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importación del controlador principal de la vista
import { PrincipiosComponent } from './pages/principios/principios';

/**
 * @constant {Routes} routes
 * @description Definición de las rutas específicas del Tema 2.
 * La ruta vacía ('') determina que PrincipiosComponent se renderizará
 * por defecto cuando el usuario navegue hacia la URL base de este módulo.
 */
const routes: Routes = [
  {
    path: '',
    component: PrincipiosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tema2RoutingModule { }
