import {
  SpaceProps,
  ColorProps,
  BorderProps,
  BorderRadiusProps,
  BoxShadowProps,
  BackgroundColorProps,
  BackgroundProps,
  PositionProps,
  FlexboxProps,
  LayoutProps,
  TextAlignProps,
  SizeProps,
  FontSizeProps,
  FontWeightProps,
  FontFamilyProps,
} from 'styled-system';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'success'
  | 'disabled'
  | 'tertiary'
  | 'quaternary';
export interface ButtonProp
  extends ColorProps,
    SpaceProps,
    BorderProps,
    BorderRadiusProps,
    BoxShadowProps,
    BackgroundColorProps,
    PositionProps,
    FlexboxProps,
    BackgroundProps,
    LayoutProps,
    SizeProps,
    FontSizeProps,
    FontWeightProps,
    FontFamilyProps,
    TextAlignProps {
  variant?: ButtonVariant;
}
