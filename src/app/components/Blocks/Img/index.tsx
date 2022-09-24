import {
  compose,
  space,
  background,
  border,
  borderRadius,
  grid,
  opacity,
  position,
  shadow,
} from 'styled-system';
import ImageProps from './type';
import styled from 'styled-components';
import { Box } from '../Box';

export const Img = styled.img<ImageProps>`
  ${compose(
    space,
    background,
    border,
    borderRadius,
    grid,
    opacity,
    position,
    shadow,
  )}
`;

interface GradProps {
  borderRadius?: string | string[];
  to?: string;
}

export const Grad = styled(Box)<GradProps>`
  position: relative;
  z-index: 0;
  &:after {
    content: '';
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    background: linear-gradient(
      to ${props => props.to},
      rgba(0, 0, 0, 0.4) 10%,
      rgba(0, 0, 0, 0.3) 3%,
      rgba(0, 0, 0, 0.2) 3%,
      rgba(0, 0, 0, 0.1) 3%,
      rgba(0, 0, 0, 0.05) 1%
    );
    border-radius: ${props => props.borderRadius};
  }
`;
