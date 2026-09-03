import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BadgeComponent } from './components/badge/badge.component';
import { IconComponent } from './components/icon/icon.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card';
import { FooterComponent } from './components/footer/footer';

@NgModule({
  declarations: [
    BadgeComponent,
    IconComponent,
    NavbarComponent,
    CardComponent,
    FooterComponent,
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
    FooterComponent,
  ]
})
export class SharedModule { }
