import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('AEROPUERTO')
export class Aeropuerto {
  @PrimaryGeneratedColumn({ name: 'AE_ID' })
  aeId: number;

  @Column({ name: 'AE_NOMBRE' })
  aeNombre: string;

  @Column({ name: 'AE_CIUDAD' })
  aeCiudad: number;

  @Column({ name: 'AE_REGIONAL' })
  aeRegional?: number;

  @Column({ name: 'AE_ES_INTERNACIONAL' })
  aeEsInternacional?: string;
}
