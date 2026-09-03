import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { Tema3RoutingModule } from './tema-3-routing.module';
import { DesignSystemComponent } from './pages/design-system/design-system';

@NgModule({
  declarations: [
    DesignSystemComponent
  ],
  imports: [
    CommonModule,
    Tema3RoutingModule,
    SharedModule
  ]
})
export class Tema3Module { }
