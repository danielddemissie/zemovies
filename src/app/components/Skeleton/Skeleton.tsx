import React from 'react';
import { Skeleton as MUISkeleton } from '@mui/material';
import { Box } from '../Blocks';

export default function Skeleton(props) {
  const { animation, width, height, variant } = props;
  return (
    <Box height={height} m={0} p={0} width={width}>
      <MUISkeleton
        animation={animation}
        height="100%"
        style={{
          marginBottom: 0,
        }}
        variant={variant}
        width="100%"
      />
    </Box>
  );
}
