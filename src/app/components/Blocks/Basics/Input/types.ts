import {
  SpaceProps,
  ColorProps,
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
  extends SpaceProps,
    ColorProps,
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
}
