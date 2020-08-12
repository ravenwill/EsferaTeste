import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', loadChildren: () => import('./pages/listar/listar.module').then(m => m.ListarModule) }, 
      { path: ':id', loadChildren: () => import('./pages/detalhes/detalhes.module').then(m => m.DetalhesModule) }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
