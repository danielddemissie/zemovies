import React from 'react';
import { Box } from '../Blocks';
import Skeleton from './Skeleton';

export default function Carousel() {
  return (
    <Box
      height={['100vh', '90vh']}
      style={{
        cursor: 'pointer',
      }}
    >
      <Skeleton
        animation="wave"
        height={'100%'}
        variant="rectangular"
        width={'100%'}
      />
    </Box>
  );
}
