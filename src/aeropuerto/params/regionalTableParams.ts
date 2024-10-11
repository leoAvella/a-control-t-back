import { Param } from 'src/common/interfaces/params';
import { tableParams } from 'src/common/params/tableParams';

export const aeropuertoParams: Param[] = [
  { name: 'aeId', required: false, type: String, description: 'Filter by "aeId"', useILike: false },
  { name: 'aeNombre', required: false, type: String, description: 'Filter by "aeNombre"', useILike: true },
  { name: 'aeCiudad', required: false, type: String, description: 'Filter by "aeCiudad"', useILike: false },
  { name: 'aeRegional', required: false, type: String, description: 'Filter by "aeRegional"', useILike: false },
  { name: 'aeEsInternacional', required: false, type: String, description: 'Filter by "aeEsInternacional"', useILike: true },
];

export const aeropuertoTableParams = [...tableParams, ...aeropuertoParams];
