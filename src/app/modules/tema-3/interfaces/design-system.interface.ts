import { Themes } from '../../../core/interfaces/themes.interface';
import { CardData } from '../../shared/interfaces/card.interface';

export interface Beneficio {
  texto: string;
  tipoBadge: Themes;
}

export interface Problema {
  texto: string;
  tipoBadge: Themes;
}

export const BENEFICIOS_DATA: Beneficio[] = [
  { texto: 'Reduce inconsistencias en interfaces.', tipoBadge: 'success' },
  { texto: 'Mejora la mantenibilidad del frontend.', tipoBadge: 'info' },
  { texto: 'Facilita la colaboración entre equipos.', tipoBadge: 'primary' },
  { texto: 'Escala productos y marcas.', tipoBadge: 'success' },
  { texto: 'Acelera el desarrollo.', tipoBadge: 'info' }
];

export const PROBLEMAS_DATA: Problema[] = [
  { texto: 'Interfaces inconsistentes.', tipoBadge: 'danger' },
  { texto: 'Componentes duplicados.', tipoBadge: 'warning' },
  { texto: 'Deuda técnica visual.', tipoBadge: 'danger' },
  { texto: 'Dificultad para escalar.', tipoBadge: 'danger' },
  { texto: 'Retrabajo constante.', tipoBadge: 'warning' }
];

export const COMPONENTES_CLAVE_DATA: string[] = [
  'Principios de diseño.',
  'Paleta de colores.',
  'Tipografía.',
  'Espaciados.',
  'Componentes UI.',
  'Patrones de interacción.',
  'Documentación.'
];

export const NIVELES_ATOMICOS_DATA: CardData[] = [
  {
    titulo: 'Átomos',
    descripcion: 'Los átomos son los elementos más básicos de una interfaz. No poseen funcionalidad completa por sí solos, pero definen la apariencia y el estilo base del sistema de diseño. Son altamente reutilizables y consistentes.',
    ejemplo: 'Ejemplos (Bootstrap 5): Input, Button, Badge, Labels'
  },
  {
    titulo: 'Moléculas',
    descripcion: 'Las moléculas son combinaciones de átomos que cumplen una función simple y específica. Ya tienen un significado funcional claro y pueden reutilizarse en distintas partes de la interfaz.',
    ejemplo: 'Ejemplos (Bootstrap 5): Input Group, Button Group, Breadcrumbs, List Group'
  },
  {
    titulo: 'Organismos',
    descripcion: 'Los organismos son estructuras más complejas, formadas por moléculas y átomos, que representan secciones completas de la interfaz. Tienen contexto propio y suelen contener múltiples responsabilidades visuales y funcionales.',
    ejemplo: 'Ejemplos (Bootstrap 5): Navbar, Cards complejas, Modal, Accordion, Tabs / Navs, Tables, Carousel'
  },
  {
    titulo: 'Plantillas (Templates)',
    descripcion: 'Conjuntos de organismos que articulan la estructura del diseño.',
    ejemplo: 'Estructura de una página sin contenido real.'
  },
  {
    titulo: 'Páginas',
    descripcion: 'Instancias específicas de las plantillas con contenido real representativo.',
    ejemplo: 'Página final poblada con datos.'
  }
];
