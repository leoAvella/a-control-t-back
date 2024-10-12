import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'DEPENDENCIA' })
export class Dependencia {
  @PrimaryGeneratedColumn({ name: 'DEP_ID', type: 'number' })
  Id: number;

  @Column({ name: 'DEP_NOMBRE', type: 'varchar', length: 200 })
  Nombre: string;

  @Column({ name: 'DEP_ABREVIATURA', type: 'varchar', length: 5 })
  Abreviatura: string;

  @Column({ name: 'DEP_AEROPUERTO', type: 'number', nullable: true })
  Aeropuerto?: number;

  @Column({ name: 'DEP_CATEGORIA', type: 'number', nullable: true })
  Categoria?: number;

  @Column({ name: 'DEP_AVISO_VENCIMIENTO', type: 'number', default: 0 })
  AvisoVencimiento: number;

  @Column({
    name: 'DEP_PROCEDENCIA',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  Procedencia?: string;

  @Column({
    name: 'DEP_PERMITE_CSV',
    type: 'number',
    default: 0,
    nullable: true,
  })
  PermiteCsv?: number;
}
