import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CalificacionesPage } from './calificaciones.page';
import { CalificacionesPageRoutingModule } from './calificaciones-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CalificacionesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CalificacionesPage]
})
export class CalificacionesPageModule { }
