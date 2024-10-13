import { Param } from 'src/common/interfaces/params';
import { tableParams } from 'src/common/params/tableParams';

export const dependenciaParams: Param[] = [
  {
    name: 'id',
    required: false,
    type: String,
    description: 'Filter by "depId"',
    useILike: false,
  },
  {
    name: 'nombre',
    required: false,
    type: String,
    description: 'Filter by "depNombre"',
    useILike: true,
  },
  {
    name: 'abreviatura',
    required: false,
    type: String,
    description: 'Filter by "depAbreviatura"',
    useILike: true,
  },
  {
    name: 'aeropuerto',
    required: false,
    type: Number,
    description: 'Filter by "depAeropuerto"',
    useILike: false,
  },
  {
    name: 'categoria',
    required: false,
    type: String,
    description: 'Filter by "depCategoria"',
    useILike: false,
  },
  {
    name: 'avisoVencimiento',
    required: false,
    type: String,
    description: 'Filter by "depAvisoVencimiento"',
    useILike: false,
  },
  {
    name: 'procedencia',
    required: false,
    type: String,
    description: 'Filter by "depProcedencia"',
    useILike: true,
  },
  {
    name: 'permiteCsv',
    required: false,
    type: String,
    description: 'Filter by "depPermiteCsv"',
    useILike: false,
  },
];

export const dependenciaTableParams = [...tableParams, ...dependenciaParams];
