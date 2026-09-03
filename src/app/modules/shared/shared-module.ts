import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BadgeComponent } from './components/badge/badge.component';
import { IconComponent } from './components/icon/icon.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card';
@NgModule({
  declarations: [
    BadgeComponent,
    IconComponent,
    NavbarComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    BadgeComponent,
    IconComponent,
    NavbarComponent,
    CardComponent,
  ]
})
export class SharedModule { }
