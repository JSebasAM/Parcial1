import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArquitecturaComponent } from './pages/arquitectura/arquitectura';

const routes: Routes = [
  {
    path: '',
    component: ArquitecturaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tema1RoutingModule {}
