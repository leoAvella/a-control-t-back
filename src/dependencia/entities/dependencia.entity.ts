import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'DEPENDENCIA' })
export class Dependencia {
  @PrimaryGeneratedColumn({ name: 'DEP_ID', type: 'number' })
  id: number;

  @Column({ name: 'DEP_NOMBRE', type: 'varchar', length: 200 })
  nombre: string;

  @Column({ name: 'DEP_ABREVIATURA', type: 'varchar', length: 5 })
  abreviatura: string;

  @Column({ name: 'DEP_AEROPUERTO', type: 'number', nullable: true })
  aeropuerto?: number;

  @Column({ name: 'DEP_CATEGORIA', type: 'number', nullable: true })
  categoria?: number;

  @Column({ name: 'DEP_AVISO_VENCIMIENTO', type: 'number', default: 0 })
  avisoVencimiento: number;

  @Column({
    name: 'DEP_PROCEDENCIA',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  procedencia?: string;

  @Column({
    name: 'DEP_PERMITE_CSV',
    type: 'number',
    default: 0,
    nullable: true,
  })
  permiteCsv?: number;
}
