import { Param } from 'src/common/interfaces/params';
import { tableParams } from 'src/common/params/tableParams';

export const regionalParams: Param[] = [
  { name: 'regId', required: false, type: String, description: 'Filter by "regId"', useILike: false },
  { name: 'regNombre', required: false, type: String, description: 'Filter by "regNombre"', useILike: true },
];

export const regionalTableParams = [...tableParams, ...regionalParams];
