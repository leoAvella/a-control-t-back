import { tableParams } from 'src/common/params/tableParams';

export const turnoParams = [
  { name: 'programacion', required: false, type: String, description: 'Filter by "programación"' },
  { name: 'funcionario', required: false, type: String, description: 'Filter by "funcionario"' },
];

export const turnoTableParams = [...tableParams, ...turnoParams];
