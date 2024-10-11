import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './users/users.module';
import { TurnoModule } from './turno/turno.module';
import { Turno } from './turno/entities/turno.entity';
import { RegionalModule } from './regional/regional.module';
import { DependenciaModule } from './dependencia/dependencia.module';
import { AeropuertoModule } from './aeropuerto/aeropuerto.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    TurnoModule,
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 1521,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: false, // Desactivar en producción
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      logging: true,
    }),
    RegionalModule,
    DependenciaModule,
    AeropuertoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
