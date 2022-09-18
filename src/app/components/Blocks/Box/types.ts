import {
  BorderProps,
  BorderRadiusProps,
  ColorProps,
  LayoutProps,
  BackgroundProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
} from 'styled-system';

export interface BoxProps
  extends BorderProps,
    BorderRadiusProps,
    ColorProps,
    LayoutProps,
    BackgroundProps,
    PositionProps,
    ShadowProps,
    SpaceProps {}
