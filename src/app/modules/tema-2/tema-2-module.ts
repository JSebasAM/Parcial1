/**
 * @file tema-2-module.ts
 * @description Módulo funcional del Tema 2 de la aplicación.
 *
 * Este módulo agrupa y encapsula todos los componentes, páginas y dependencias
 * relacionados con la temática "Principios de la Arquitectura de Software".
 *
 * Sigue el principio de **modularidad**: cada módulo es independiente y puede
 * cargarse de forma perezosa (lazy loading) desde el enrutador principal.
 *
 * @remarks
 * - Importa {@link SharedModule} para acceder a los componentes reutilizables
 *   como `app-header`, `app-card`, `app-badge` y `app-footer`.
 * - Registra {@link PrincipiosComponent} como el único componente de este módulo.
 * - Delega el enrutamiento interno a {@link Tema2RoutingModule}.
 *
 * @module Tema2Module
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Tema2RoutingModule } from './tema-2-routing.module';
import { PrincipiosComponent } from './pages/principios/principios';
import { SharedModule } from '../shared/shared-module';

/**
 * Módulo Angular que encapsula el contenido del Tema 2.
 *
 * @remarks
 * Está diseñado para cargarse de forma diferida (lazy loading) mediante
 * la ruta `/tema-2` definida en el enrutador raíz de la aplicación.
 * Esto mejora el rendimiento inicial de la aplicación al no cargar este
 * módulo hasta que el usuario lo necesite.
 */
@NgModule({
  declarations: [
    /** Componente principal que presenta los Principios de Arquitectura de Software. */
    PrincipiosComponent
  ],
  imports: [
    /** Provee directivas comunes de Angular como *ngFor y *ngIf. */
    CommonModule,
    /** Configura las rutas internas del módulo. */
    Tema2RoutingModule,
    /** Provee componentes de UI reutilizables (Header, Card, Badge, Footer). */
    SharedModule
  ]
})
export class Tema2Module { }
