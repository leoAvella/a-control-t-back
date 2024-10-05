export interface Param {
  name: string;
  required: boolean;
  type: any;
  description: string;
  useILike?: boolean;
}
export interface ResponsePagination {
  data: any[];
  totalRows: number;
  page: number;
  totalPages: number;
}
