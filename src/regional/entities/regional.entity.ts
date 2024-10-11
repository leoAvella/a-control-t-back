import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'REGIONAL' })
export class Regional {
  @PrimaryGeneratedColumn({ name: 'REG_ID' })
  regId: number;

  @Column({ name: 'REG_NOMBRE' })
  regNombre: string;
}
