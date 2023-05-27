export class Calificacion {
  constructor(
    public matricula: string,
    public nombre: string,
    public materia: string,
    public calificacion: number,
    public aprobado: boolean
  ) {}
}
