import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Vital para que funcione routerLink en tu Navbar

// Verifica que estas rutas apunten exactamente a donde tienes tus archivos .ts
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card';
import { FooterComponent } from './components/footer/footer';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BadgeComponent } from './components/badge/badge.component';
import { IconComponent} from './components/icon/icon.component';

@NgModule({
  declarations: [
    IconComponent,
    HeaderComponent,
    CardComponent,
    FooterComponent,
    NavbarComponent,
    BadgeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    IconComponent,
    HeaderComponent,
    CardComponent,
    FooterComponent,
    NavbarComponent,
    BadgeComponent
  ]
})
export class SharedModule { }
