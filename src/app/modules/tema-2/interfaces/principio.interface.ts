/**
 * @file principio.interface.ts
 * @description Contratos de datos (interfaces) y almacenamiento estático del contenido
 * del Tema 2: "Principios de la Arquitectura de Software".
 *
 * Este archivo centraliza tanto las **definiciones de tipo** como los **datos estáticos**
 * del módulo, actuando como fuente de verdad única (Single Source of Truth).
 *
 * @remarks
 * **Decisión de diseño:** Los datos se ubican junto a las interfaces porque son
 * estáticos (material de clase). En una aplicación con datos dinámicos, los datos
 * se moverían a un `Service` que consuma una API REST.
 *
 * **Tipado con `Themes`:** El campo `tipoBadge` usa el tipo {@link Themes} definido
 * en el core, garantizando que solo se pasen valores de Bootstrap válidos al
 * componente `app-badge`.
 *
 * @module principio.interface
 */

import { Themes } from '../../../core/interfaces/themes.interface';

/**
 * Representa un principio fundamental de la Arquitectura de Software.
 *
 * @remarks
 * Esta interfaz tipifica los datos que se muestran en las tarjetas (`app-card`)
 * de la sección "Principios Fundamentales" de la vista principal.
 *
 * @example
 * ```ts
 * const p: Principio = {
 *   titulo: 'Modularidad (Alta)',
 *   descripcion: 'Dividir el sistema en módulos...',
 *   beneficios: 'Facilita el trabajo en equipo...',
 *   ejemplo: 'Una tienda con módulos separados...'
 * };
 * ```
 */
export interface Principio {
  /** Nombre del principio con indicación de su nivel deseable (Alta/Baja). */
  titulo: string;

  /** Explicación conceptual del principio arquitectónico. */
  descripcion: string;

  /** Ventajas concretas de aplicar correctamente este principio. */
  beneficios: string;

  /** Caso ilustrativo con ejemplo correcto (✅) e incorrecto (❌). */
  ejemplo: string;
}

/**
 * Representa una fila de la tabla comparativa de principios.
 *
 * @remarks
 * Se usa en la sección "Resumen de los Principios" para renderizar
 * una tabla que compara los niveles deseables de cada principio.
 * El campo `tipoBadge` debe ser un valor Bootstrap válido del tipo {@link Themes}.
 *
 * @example
 * ```ts
 * const r: Resumen = {
 *   principio: 'Modularidad',
 *   tipoBadge: 'success',
 *   textoNivel: 'Alta',
 *   descripcion: 'Tener muchos módulos bien definidos.'
 * };
 * ```
 */
export interface Resumen {
  /** Nombre del principio arquitectónico a resumir. */
  principio: string;

  /**
   * Tipo de color Bootstrap para el componente `app-badge`.
   *
   * @remarks
   * Al usar el tipo {@link Themes}, el compilador TypeScript garantiza
   * que solo se usen valores válidos (success, info, danger, etc.).
   */
  tipoBadge: Themes;

  /** Texto descriptivo del nivel deseable del principio (ej. "Alta", "Bajo"). */
  textoNivel: string;

  /** Descripción breve del objetivo del principio. */
  descripcion: string;
}

/**
 * Representa un ejercicio práctico de identificación de problemas arquitectónicos.
 *
 * @remarks
 * Se usa en la sección "Ejercicios Prácticos" para renderizar la tabla del
 * Ejercicio 2. Cada elemento describe una situación con un problema arquitectónico
 * para que el estudiante lo identifique.
 *
 * @example
 * ```ts
 * const e: Ejercicio = {
 *   situacion: 'El sistema tiene 20,000 líneas en un solo archivo...',
 *   problema: 'Falta de Modularidad',
 *   tipoBadge: 'danger'
 * };
 * ```
 */
export interface Ejercicio {
  /** Descripción de la situación o escenario con el problema. */
  situacion: string;

  /** Nombre del anti-patrón o violación arquitectónica identificada. */
  problema: string;

  /**
   * Color Bootstrap para el badge del tipo de problema.
   * - `danger`: problemas críticos (Alto Acoplamiento, Falta de Modularidad).
   * - `warning`: problemas moderados (Baja Cohesión).
   */
  tipoBadge: Themes;
}

/**
 * Datos estáticos de los cuatro principios fundamentales de la Arquitectura de Software.
 *
 * @remarks
 * Esta constante inicializa la propiedad `listaPrincipios` de {@link PrincipiosComponent}.
 * Representa el material del Tema 2 sintetizado con ejemplos prácticos.
 *
 * @type {Principio[]}
 */
export const PRINCIPIOS_DATA: Principio[] = [
  {
    titulo: 'Modularidad (Alta)',
    descripcion: 'Consiste en dividir el sistema en partes más pequeñas llamadas módulos. Cada módulo debe tener una función clara y específica dentro del sistema. La idea es que los módulos puedan desarrollarse, evaluarse y modificarse de forma independiente.',
    beneficios: 'Facilita el trabajo en equipo. Reduce la complejidad. Permite reemplazar o mejorar módulos sin afectar todo el sistema.',
    ejemplo: 'Imagina una aplicación para una tienda en línea. En lugar de tener todo el código en un solo archivo, la divido en módulos como: Carrito, Inventario, Usuarios y Pagos. Cada módulo tiene su lógica propia.'
  },
  {
    titulo: 'Cohesión (Alta)',
    descripcion: 'Indica qué tan relacionadas están las tareas dentro de un módulo. Con alta cohesión, cada módulo cumple una sola responsabilidad clara y bien enfocada.',
    beneficios: 'Facilita la comprensión del código. Hace más simple el mantenimiento. Cada módulo tiene un propósito único y claro.',
    ejemplo: '✅ Alta Cohesión: Un módulo de "Gestión de Productos" únicamente Crea, Actualiza, Busca, Elimina. ❌ Baja Cohesión: Un módulo que maneja productos y además envía correos y procesa pagos.'
  },
  {
    titulo: 'Acoplamiento (Bajo)',
    descripcion: 'Mide la dependencia entre módulos. Con bajo acoplamiento, los módulos funcionan de forma independiente y los cambios en uno no afectan a los demás.',
    beneficios: 'Permite modificar o reemplazar módulos sin afectar a otros. Aumenta la flexibilidad del sistema. Facilidad de evolución del sistema.',
    ejemplo: '✅ Bajo Acoplamiento: La calculadora solo devuelve el resultado. El módulo Pantalla decide cómo mostrarlo. Puedes cambiar el diseño sin tocar la calculadora. ❌ Alto Acoplamiento: La calculadora sabe exactamente cómo debe mostrarse el resultado en pantalla.'
  },
  {
    titulo: 'Separación de Responsabilidades (Alta)',
    descripcion: 'Consiste en dividir el sistema según distintos tipos de responsabilidades, evitando mezclar lógica de negocio, presentación, acceso a datos u otros aspectos.',
    beneficios: 'Reduce errores al evitar que un cambio en una parte afecte otra innecesariamente. Facilita la organización en capas o componentes. Mejora la legibilidad y escalabilidad del sistema.',
    ejemplo: '✅ Correcto: Aplicación organizada por capas (Presentación, Negocio, Datos). El botón "Comprar" solo llama una función. ❌ Incorrecto: Mezclar lógica de negocio dentro del código de la interfaz.'
  }
];

/**
 * Datos estáticos de la tabla resumen de principios.
 *
 * @remarks
 * Usa `tipoBadge` con valores del tipo {@link Themes} para garantizar
 * compatibilidad con el componente `app-badge` del SharedModule.
 *
 * @type {Resumen[]}
 */
export const RESUMEN_DATA: Resumen[] = [
  { principio: 'Modularidad',                     tipoBadge: 'success', textoNivel: 'Alta',  descripcion: 'Tener muchos módulos bien definidos.' },
  { principio: 'Acoplamiento',                    tipoBadge: 'info',    textoNivel: 'Bajo',  descripcion: 'Que los módulos dependan poco entre sí.' },
  { principio: 'Cohesión',                        tipoBadge: 'success', textoNivel: 'Alta',  descripcion: 'Cada módulo debe hacer una sola cosa bien.' },
  { principio: 'Separación de Responsabilidades', tipoBadge: 'primary', textoNivel: 'Alta',  descripcion: 'Dividir la aplicación por tipos de tareas.' }
];

/**
 * Datos estáticos de los ejercicios prácticos del Tema 2.
 *
 * @remarks
 * Cada ejercicio describe una situación con una violación de principios
 * arquitectónicos. El `tipoBadge` categoriza visualmente la gravedad:
 * - `danger` para problemas críticos (Alto Acoplamiento, Falta de Modularidad).
 * - `warning` para problemas moderados (Baja Cohesión).
 *
 * @type {Ejercicio[]}
 */
export const EJERCICIO_DATA: Ejercicio[] = [
  { situacion: 'El sistema completo está implementado en un solo archivo de 20,000 líneas que maneja usuarios, pagos, reportes y notificaciones.', problema: 'Falta de Modularidad', tipoBadge: 'danger' },
  { situacion: 'El módulo llamado "Gestión General" contiene lógica de autenticación, cálculos financieros, generación de reportes y acceso a base de datos.', problema: 'Baja Cohesión', tipoBadge: 'warning' },
  { situacion: 'Cuando se cambia el formato de exportación de reportes, también es necesario modificar el módulo de usuarios y el módulo de pagos.', problema: 'Alto Acoplamiento', tipoBadge: 'danger' },
  { situacion: 'Para poder probar el módulo de pedidos es obligatorio tener activos los módulos de inventario y facturación.', problema: 'Alto Acoplamiento', tipoBadge: 'danger' },
  { situacion: 'El módulo de autenticación también gestiona estadísticas de ventas y genera reportes administrativos.', problema: 'Baja Cohesión', tipoBadge: 'warning' }
];
