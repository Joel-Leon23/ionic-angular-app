import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CalificacionesService } from '../services/calificaciones.service';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.page.html',
  styleUrls: ['./calificaciones.page.scss'],
})
export class CalificacionesPage implements OnInit {

  form: FormGroup = new FormGroup({});
  calificaciones = this.calificacionesService.getCalificaciones();

  constructor(public calificacionesService: CalificacionesService) { }

  ngOnInit() {
    this.form = new FormGroup({
      matricula: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      nombre: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      materia: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      calificacion: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(0), Validators.max(100)]
      }),
      searchMatricula: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }

  onAddCalificacion() {
    if (!this.form.valid) {
      return;
    }
    this.calificacionesService.addCalificacion(
      this.form.value.matricula,
      this.form.value.nombre,
      this.form.value.materia,
      this.form.value.calificacion,
      this.form.value.calificacion >= 70
    );
    this.calificaciones = this.calificacionesService.getCalificaciones();
    this.form.reset();
  }

  onRemoveCalificacion(matricula: string) {
    this.calificacionesService.deleteCalificacion(matricula);
    this.calificaciones = this.calificacionesService.getCalificaciones();
  }

  onSearchCalificacion() {
    if (!this.form.value.searchMatricula) {
      return;
    }
    const calificacion = this.calificacionesService.getCalificacion(this.form.value.searchMatricula);
    if (calificacion) {
      this.form.patchValue({
        matricula: calificacion.matricula,
        nombre: calificacion.nombre,
        materia: calificacion.materia,
        calificacion: calificacion.calificacion
      });
    } else {
      this.form.reset();
    }
  }

  onUpdateCalificacion() {
    if (!this.form.valid) {
      return;
    }
    this.calificacionesService.updateCalificacion(
      this.form.value.matricula,
      this.form.value.calificacion,
      this.form.value.calificacion >= 70
    );
    this.calificaciones = this.calificacionesService.getCalificaciones();
    this.form.reset();
  }
  
}
