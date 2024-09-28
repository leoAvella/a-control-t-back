import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'TURNO' }) // Nombre de la tabla en mayúsculas
export class Turno {
  @PrimaryGeneratedColumn({ name: 'TUR_ID' })
  id: number;

  @Column({ name: 'TUR_PROGRAMACION' })
  programacion: string;

  @Column({ name: 'TUR_FUNCIONARIO' })
  funcionario: string;

  @Column({ name: 'TUR_POSICION_JORNADA' })
  posicionJornada: string;

  @Column({ name: 'TUR_TIPO' })
  tipo: string;

  @Column({ name: 'TUR_H_INICIO' })
  horaInicio: string;

  @Column({ name: 'TUR_H_FIN' })
  horaFin: string;

  @Column({ name: 'TUR_ESTADO' })
  estado: string;

  @Column({ name: 'TUR_TURNO_ORIGINAL' })
  turnoOriginal: string;

  @Column({ name: 'TUR_FECHA' })
  fecha: Date;

  @Column({ name: 'TUR_M_INICIO' })
  minutoInicio: string;

  @Column({ name: 'TUR_M_FIN' })
  minutoFin: string;
}
