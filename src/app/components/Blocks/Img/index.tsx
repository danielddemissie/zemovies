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
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.3) 60%,
      rgba(0, 0, 0, 0.3) 10%
    );
    border-radius: ${props => props.borderRadius};
  }
`;
