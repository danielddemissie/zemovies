import { CSSProp } from 'styled-components';
import {
  SpaceProps,
  BorderProps,
  BorderRadiusProps,
  LayoutProps,
  FontSizeProps,
  FontFamilyProps,
  FontWeightProps,
  PositionProps,
  BackgroundColorProps,
  BoxShadowProps,
} from 'styled-system';

export interface InputProps
  extends React.HTMLAttributes<HTMLInputElement>,
    SpaceProps,
    BorderProps,
    BorderRadiusProps,
    LayoutProps,
    FontSizeProps,
    FontFamilyProps,
    FontWeightProps,
    PositionProps,
    BackgroundColorProps,
    BoxShadowProps {
  name?: string;
  InputIcon?: React.ReactElement<any, any>;
  onIconClick?: () => void;
  iconSx?: CSSProp;
}
