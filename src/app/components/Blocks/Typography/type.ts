import { CSSProp } from 'styled-components';
import {
  FontFamilyProps,
  FontSizeProps,
  FontWeightProps,
  ColorProps,
  TextAlignProps,
  PositionProps,
  LayoutProps,
  BorderProps,
  BoxShadowProps,
  SpaceProps,
  LineHeightProps,
} from 'styled-system';

type TextVariant = 'multiLineEllipsis' | 'ellipsis' | 'error';

export interface TextProps
  extends FontFamilyProps,
    FontWeightProps,
    FontSizeProps,
    ColorProps,
    TextAlignProps,
    PositionProps,
    LayoutProps,
    BorderProps,
    BoxShadowProps,
    SpaceProps,
    LineHeightProps {
  variant?: TextVariant;
  hover?: CSSProp;
}
