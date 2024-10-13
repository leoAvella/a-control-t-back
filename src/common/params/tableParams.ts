// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const tableParams = [
  { name: 'page', required: false, type: Number, description: 'page', example: 1 },
  { name: 'size', required: false, type: Number, description: 'num rows', example: 10 },
  { name: 'sort', required: false, enum: ['ASC', 'DESC'], description: 'order' },
  { name: 'sortby', required: false, type: String, description: 'order by' },
];
