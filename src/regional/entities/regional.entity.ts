import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('REGIONAL')
export class Registro {
  @PrimaryGeneratedColumn({ name: 'REG_ID', type: 'bigint' })
  regId: number;

  @Column({ name: 'REG_NOMBRE', type: 'varchar', length: 200 })
  regNombre: string;
}
