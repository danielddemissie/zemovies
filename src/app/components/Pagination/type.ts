export interface PaginationProps {
  count: number;
  page: number;
  fontSize: string | number;
  onChange: (event: any, newPageNumber: any) => void;
}
