import {
  space,
  color,
  border,
  borderRadius,
  grid,
  gridArea,
  gridGap,
  gridColumn,
  gridRow,
  boxShadow,
  position,
  layout,
  background,
  flex,
  flexbox,
  compose,
} from 'styled-system';
import styled from 'styled-components';
import { GridProps } from './type';
import { Grid as GD } from '@mui/material';

export const Grid = styled(GD)<GridProps>`
  ${compose(
    space,
    color,
    border,
    borderRadius,
    grid,
    gridArea,
    gridGap,
    gridColumn,
    gridRow,
    boxShadow,
    position,
    layout,
    background,
    flex,
    flexbox,
  )}
`;
