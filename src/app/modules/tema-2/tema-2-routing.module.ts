/**
 * @file tema-2-routing.module.ts
 * @description Configuración del enrutamiento interno del Módulo Tema 2.
 *
 * Define las rutas disponibles dentro del módulo y las asocia a los
 * componentes correspondientes. Al utilizar `RouterModule.forChild()`,
 * este módulo delega el control del router al módulo raíz y opera
 * de forma complementaria al enrutador principal.
 *
 * @remarks
 * La ruta vacía (`''`) actúa como ruta por defecto del módulo, lo que
 * significa que al navegar a `/tema-2`, Angular instanciará directamente
 * el {@link PrincipiosComponent} sin necesidad de subrutas adicionales.
 *
 * @module Tema2RoutingModule
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipiosComponent } from './pages/principios/principios';

/**
 * Definición de rutas internas del Módulo Tema 2.
 *
 * @remarks
 * Actualmente contiene una única ruta raíz que mapea la URL base
 * del módulo (`/tema-2`) al componente {@link PrincipiosComponent}.
 *
 * @type {Routes}
 */
const routes: Routes = [
  {
    /**
     * Ruta raíz del módulo. Al acceder a `/tema-2`, se renderiza
     * {@link PrincipiosComponent} en el `<router-outlet>` principal.
     */
    path: '',
    component: PrincipiosComponent
  }
];

/**
 * Módulo de enrutamiento del Tema 2.
 *
 * @remarks
 * Usa `RouterModule.forChild(routes)` en lugar de `forRoot()` para
 * registrar rutas secundarias (child routes) sin reemplazar la
 * configuración del enrutador raíz.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tema2RoutingModule { }
