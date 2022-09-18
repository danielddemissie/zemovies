import styled from 'styled-components';
import { compose, flex, flexbox, layout } from 'styled-system';
import { Box } from '../Box';
import { FlexProp } from './types';

export const Flex = styled(Box)<FlexProp>`
  display: flex;
  gap: ${props => props.gap};
  ${compose(flex, flexbox, layout)}
`;
