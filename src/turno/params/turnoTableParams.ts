import { Param } from 'src/common/interfaces/params';
import { tableParams } from 'src/common/params/tableParams';

export const turnoParams: Param[] = [
  { name: 'programacion', required: false, type: String, description: 'Filter by "programación"', useILike: false },
  { name: 'funcionario', required: false, type: String, description: 'Filter by "funcionario"', useILike: true },
  { name: 'fecha', required: false, type: Date, description: 'Filter by "fecha"', useILike: false },
];

export const turnoTableParams = [...tableParams, ...turnoParams];
