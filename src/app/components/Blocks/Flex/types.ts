import {
  FlexProps,
  FlexboxProps,
  FlexBasisProps,
  ResponsiveValue,
} from 'styled-system';

export interface FlexProp extends FlexProps, FlexBasisProps, FlexboxProps {
  gap?: ResponsiveValue<number | string>;
}
