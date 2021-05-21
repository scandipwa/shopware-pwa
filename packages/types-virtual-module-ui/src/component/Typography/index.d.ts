/* eslint-disable @scandipwa/scandipwa-guidelines/use-namespace */
import { PureComponent, ReactNode } from 'react';

export type TypographyType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle'
  | 'body'
  | 'caption'
  | 'button'
  | 'overline';

export interface TypographyDefaultProps {
    type: TypographyType
}

export interface TypographyProps extends Partial<TypographyDefaultProps> {
    component?: ReactNode
    children: ReactNode
}

export class Typography extends PureComponent<TypographyProps> {}

export default Typography;
