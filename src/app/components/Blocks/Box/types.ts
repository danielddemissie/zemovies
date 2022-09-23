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

// import { BoxProps as boxP } from '@mui/system';

export interface BoxProps
  extends BorderProps,
    BorderRadiusProps,
    ColorProps,
    LayoutProps,
    BackgroundProps,
    PositionProps,
    ShadowProps,
    SpaceProps {}
