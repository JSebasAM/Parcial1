import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Tema1RoutingModule } from './tema-1-routing.module';
import { ArquitecturaComponent } from './pages/arquitectura/arquitectura';

@NgModule({
  declarations: [ArquitecturaComponent],
  imports: [CommonModule, Tema1RoutingModule],
})
export class Tema1Module {}
