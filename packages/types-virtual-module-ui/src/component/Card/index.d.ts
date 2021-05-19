/* eslint-disable @scandipwa/scandipwa-guidelines/use-namespace */

import React, { PureComponent } from 'react';

export interface CardProps {
    children?: React.ReactNode;
    actions?: Array<React.ReactNode>;
    cover?: React.ReactNode;
    onClick?: (e: unknown) => unknown;
}

export class Card extends PureComponent<CardProps> {}

export default Card;
