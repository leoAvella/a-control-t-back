import { tableParams } from 'src/common/params/tableParams';

const turnoParams = [
  { name: 'programacion', required: false, type: String, description: 'Filtrar por programación' },
  { name: 'funcionario', required: false, type: String, description: 'Filtrar por funcionario' },
];

export const turnoTableParams = [...tableParams, ...turnoParams];
