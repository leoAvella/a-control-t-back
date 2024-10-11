import { Param } from 'src/common/interfaces/params';
import { tableParams } from 'src/common/params/tableParams';

export const userParams: Param[] = [
  { name: 'nombre', required: false, type: String, description: 'Filter by "nombre"', useILike: true },
  { name: 'alias', required: false, type: String, description: 'Filter by "alias"', useILike: true },
];

export const userTableParams = [...tableParams, ...userParams];
