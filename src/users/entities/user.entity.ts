import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FUNCIONARIO')
export class User {
  @PrimaryGeneratedColumn({ name: 'FUN_ID', type: 'numeric' })
  id: number;

  @Column({ name: 'FUN_NOMBRE', type: 'varchar', length: 200, nullable: false })
  nombre: string;

  @Column({ name: 'FU_NIVEL', type: 'numeric', nullable: true })
  nivel: number;

  @Column({ name: 'FUN_GRADO', type: 'numeric', nullable: true })
  grado: number;

  @Column({ name: 'FUN_NUM_LICENCIA', type: 'varchar', length: 50, nullable: true })
  numLicencia: string;

  @Column({ name: 'FUN_FV_CERTMEDICO', type: 'date', nullable: true })
  fvCertMedico: Date;

  @Column({ name: 'FUN_DIRECCION', type: 'varchar', length: 200, nullable: true })
  direccion: string;

  @Column({ name: 'FUN_TELEFONO', type: 'varchar', length: 20, nullable: true })
  telefono: string;

  @Column({ name: 'FUN_CELULAR', type: 'varchar', length: 15, nullable: true })
  celular: string;

  @Column({ name: 'FUN_F_INGRESO', type: 'date', nullable: true })
  fechaIngreso: Date;

  @Column({ name: 'FUN_FU_TRASLADO', type: 'date', nullable: true })
  fechaTraslado: Date;

  @Column({ name: 'FUN_FV_CURSO', type: 'date', nullable: true })
  fvCurso: Date;

  @Column({ name: 'FUN_FV_EVALUACION', type: 'date', nullable: true })
  fvEvaluacion: Date;

  @Column({ name: 'FUN_SUELDO', type: 'numeric', nullable: true })
  sueldo: number;

  @Column({ name: 'FUN_USUARIO', type: 'varchar', length: 50, nullable: true })
  usuario: string;

  @Column({ name: 'FUN_CLAVE', type: 'varchar', length: 20, nullable: true })
  clave: string;

  @Column({ name: 'FUN_ALIAS', type: 'varchar', length: 20, nullable: true })
  alias: string;

  @Column({ name: 'FUN_ESTADO', type: 'varchar', length: 20, nullable: true })
  estado: string;

  @Column({ name: 'FUN_DEPENDENCIA', type: 'number', nullable: false })
  dependencia: number;

  @Column({ name: 'FUN_HORAS_EXTRAS', type: 'varchar', length: 1, nullable: true })
  horasExtras: string;

  @Column({ name: 'FUN_PUNTAJE', type: 'numeric', nullable: true })
  puntaje: number;

  @Column({ name: 'FUN_CANT_MAX_HE', type: 'numeric', nullable: true })
  cantMaxHorasExtras: number;

  @Column({ name: 'FUN_CAT_DOM', type: 'numeric', nullable: true })
  categoriaDominical: number;

  @Column({ name: 'FUN_CANT_ROP', type: 'numeric', nullable: true })
  cantidadRop: number;

  @Column({ name: 'FUN_CERTMEDICO', type: 'varchar', length: 50, nullable: true })
  certMedico: string;

  @Column({ name: 'FUN_DESCANSO_SEMANA', type: 'varchar', length: 1, nullable: true })
  descansoSemana: string;

  @Column({ name: 'FUN_HORA_EXTRA_EXC', type: 'numeric', nullable: true })
  horaExtraExc: number;

  @Column({ name: 'FUN_INTENTOS_FALLIDOS', type: 'numeric', nullable: true })
  intentosFallidos: number;

  @Column({ name: 'FUN_CARGO', type: 'varchar', length: 255, nullable: true })
  cargo: string;

  @Column({ name: 'FUN_CORREO_ELECTRONICO', type: 'varchar', length: 100, nullable: true })
  correoElectronico: string;

  @Column({ name: 'FUN_SUPERVISOR', type: 'numeric', nullable: false })
  supervisor: number;

  @Column({ name: 'FUN_FV_EVAL_COMP_LINGUISTICA', type: 'date', nullable: true })
  fvEvalCompLinguistica: Date;

  @Column({ name: 'FUN_NIVEL_LINGUISTICA', type: 'numeric', nullable: true })
  nivelLinguistica: number;
}
