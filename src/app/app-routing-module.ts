import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tema-2',
    loadChildren: () => import('./modules/tema-2/tema-2-module').then(m => m.Tema2Module)
  },
  {
    path: '**',
    redirectTo: 'tema-2'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
