import { PlayCircleOutline } from '@mui/icons-material';
import React from 'react';
import { Box } from '../Blocks';
import Skeleton from './Skeleton';

export const CardSkelton = () => {
  return (
    <Box
      sx={{
        width: {
          lg: '200px',
        },
      }}
      textAlign="center"
    >
      <Skeleton
        animation="wave"
        height={['150px', '120px']}
        variant="rectangular"
        width={'100%'}
      />
      <PlayCircleOutline />
      <Skeleton />
    </Box>
  );
};
