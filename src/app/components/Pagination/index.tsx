import React from 'react';
import { Pagination as MUIPagination } from '@mui/material';
import { theme } from 'styles/theme';
import { PaginationProps } from './type';

export default function Pagination(props: PaginationProps) {
  return (
    <div>
      <MUIPagination
        onChange={props.onChange}
        sx={{
          '& .MuiPaginationItem-root': {
            color: theme.colors.white[0],
            fontSize: props.fontSize || '18px',
            fontWeight: 600,
            minWidth: ['25px', '32px'],
            height: ['20px', '32px'],
            paddingTop: ['3px', 0],
          },
          '& .MuiPaginationItem-root.Mui-selected': {
            backgroundColor: theme.colors.primary[0],
            color: theme.colors.white[0],
            ':hover': {
              color: theme.colors.primary[1],
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
            },
          },
        }}
        count={props.count}
        page={props.page}
        shape="rounded"
      />
    </div>
  );
}
