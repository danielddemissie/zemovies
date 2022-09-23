import styled from 'styled-components';
import {
  space,
  color,
  layout,
  grid,
  background,
  border,
  borderRadius,
  position,
  shadow,
  compose,
} from 'styled-system';
import { BoxProps } from './types';
import { Box as MuiBox } from '@mui/material';

export const Box = styled(MuiBox)<BoxProps>`
  ${compose(
    space,
    color,
    layout,
    grid,
    background,
    shadow,
    position,
    borderRadius,
    border,
  )}
`;
