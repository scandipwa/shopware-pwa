/* eslint-disable @scandipwa/scandipwa-guidelines/use-namespace */

import { PureComponent } from 'react';

export interface LinkDefaultProps {
    isPrimary: boolean;
}

export interface LinkProps extends Partial<LinkDefaultProps> {
    children: React.ReactNode
    to: string
}

export class Link extends PureComponent<LinkProps> {}

export default Link;
