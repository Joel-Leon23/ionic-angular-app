import { Injectable } from '@angular/core';
import { Calificacion } from '../calificacion';

@Injectable({
  providedIn: 'root'
})
export class CalificacionesService {

  private calificaciones: Calificacion[] = [
    new Calificacion('123456', 'Juan Perez', 'Matemáticas', 85, true),
    new Calificacion('234567', 'Maria Lopez', 'Historia', 78, true),
  ];

  constructor() { }

  getCalificaciones() {
    return [...this.calificaciones];
  }

  addCalificacion(matricula: string, nombre: string, materia: string, calificacion: number, aprobado: boolean) {
    const cal = new Calificacion(matricula, nombre, materia, calificacion, aprobado)
    this.calificaciones.push(cal);
  }

  deleteCalificacion(matricula: string) {
    this.calificaciones = this.calificaciones.filter(c => c.matricula !== matricula);
  }

  updateCalificacion(matricula: string, calificacion: number, aprobado: boolean) {
    const index = this.calificaciones.findIndex(c => c.matricula === matricula);
    this.calificaciones[index].calificacion = calificacion;
    this.calificaciones[index].aprobado = aprobado;
  }
  getCalificacion(matricula: string) {
    return {...this.calificaciones.find(c => c.matricula === matricula)};
  }  
  
}