import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'calificaciones',
    loadChildren: () => import('./calificaciones/calificaciones.module').then( m => m.CalificacionesPageModule)
  },
  {
    path: '',
    redirectTo: 'calificaciones',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: 'calificaciones',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
