/**
 * @file principios.ts
 * @description Componente controlador de la página principal del Módulo Tema 2.
 *
 * Este componente actúa como el **controlador** de la vista `principios.html`,
 * siguiendo el patrón MVC (Modelo-Vista-Controlador) adaptado a Angular.
 * Su responsabilidad principal es proveer los datos tipados al template,
 * obtenidos desde las constantes definidas en la capa de interfaces.
 *
 * @remarks
 * **Separación de responsabilidades aplicada:**
 * - Los **datos** residen en `principio.interface.ts` (fuente de verdad).
 * - La **lógica de presentación** está en este componente.
 * - La **estructura visual** está en `principios.html`.
 * - Los **estilos** están en `principios.scss`.
 *
 * Este componente no usa servicios externos ya que los datos son
 * estáticos (material de clase). Si el contenido fuera dinámico,
 * se inyectaría un `Service` en el constructor.
 *
 * @example
 * ```html
 * <!-- Declarado en Tema2Module y accesible en la ruta /tema-2 -->
 * <app-principios></app-principios>
 * ```
 *
 * @module PrincipiosComponent
 */

import { Component } from '@angular/core';
import {
  Principio,
  Resumen,
  Ejercicio,
  PRINCIPIOS_DATA,
  RESUMEN_DATA,
  EJERCICIO_DATA
} from '../../interfaces/principio.interface';

/**
 * Componente de la página "Principios de la Arquitectura de Software".
 *
 * @remarks
 * Expone tres colecciones tipadas al template para ser iteradas con `*ngFor`:
 * - `listaPrincipios`: los cuatro principios arquitectónicos fundamentales.
 * - `listaResumen`: tabla comparativa de los principios.
 * - `listaEjercicios`: ejercicios prácticos de identificación de problemas.
 *
 * Al usar `standalone: false`, este componente debe ser declarado
 * dentro de un `NgModule` (en este caso {@link Tema2Module}).
 */
@Component({
  selector: 'app-principios',
  standalone: false,
  templateUrl: './principios.html',
  styleUrl: './principios.scss'
})
export class PrincipiosComponent {

  /**
   * Lista de los principios fundamentales de la arquitectura de software.
   *
   * @remarks
   * Cada elemento de tipo {@link Principio} contiene:
   * - `titulo`: nombre del principio con su nivel deseable.
   * - `descripcion`: explicación conceptual del principio.
   * - `beneficios`: ventajas de aplicar el principio correctamente.
   * - `ejemplo`: caso concreto ilustrativo con ejemplos correctos e incorrectos.
   *
   * @type {Principio[]}
   */
  listaPrincipios: Principio[] = PRINCIPIOS_DATA;

  /**
   * Lista de resumen para la tabla comparativa de principios.
   *
   * @remarks
   * Cada elemento de tipo {@link Resumen} contiene:
   * - `principio`: nombre del principio arquitectónico.
   * - `tipoBadge`: clase Bootstrap válida para colorear el badge (success, info, etc.).
   * - `textoNivel`: texto descriptivo del nivel deseable (Alta / Bajo).
   * - `descripcion`: resumen de una línea del objetivo del principio.
   *
   * @type {Resumen[]}
   */
  listaResumen: Resumen[] = RESUMEN_DATA;

  /**
   * Lista de ejercicios prácticos para identificar problemas arquitectónicos.
   *
   * @remarks
   * Cada elemento de tipo {@link Ejercicio} contiene:
   * - `situacion`: descripción del escenario problemático.
   * - `problema`: nombre del anti-patrón o violación del principio.
   * - `tipoBadge`: color Bootstrap del badge para categorizar el problema.
   *
   * @type {Ejercicio[]}
   */
  listaEjercicios: Ejercicio[] = EJERCICIO_DATA;

}
