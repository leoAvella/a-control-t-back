import { Param } from 'src/common/interfaces/params';
import { tableParams } from 'src/common/params/tableParams';

export const dependenciaParams: Param[] = [
  {
    name: 'Id',
    required: false,
    type: String,
    description: 'Filter by "depId"',
    useILike: false,
  },
  {
    name: 'Nombre',
    required: false,
    type: String,
    description: 'Filter by "depNombre"',
    useILike: true,
  },
  {
    name: 'Abreviatura',
    required: false,
    type: String,
    description: 'Filter by "depAbreviatura"',
    useILike: true,
  },
  {
    name: 'Aeropuerto',
    required: false,
    type: String,
    description: 'Filter by "depAeropuerto"',
    useILike: false,
  },
  {
    name: 'Categoria',
    required: false,
    type: String,
    description: 'Filter by "depCategoria"',
    useILike: false,
  },
  {
    name: 'AvisoVencimiento',
    required: false,
    type: String,
    description: 'Filter by "depAvisoVencimiento"',
    useILike: false,
  },
  {
    name: 'Procedencia',
    required: false,
    type: String,
    description: 'Filter by "depProcedencia"',
    useILike: true,
  },
  {
    name: 'PermiteCsv',
    required: false,
    type: String,
    description: 'Filter by "depPermiteCsv"',
    useILike: false,
  },
];

export const dependenciaTableParams = [...tableParams, ...dependenciaParams];
