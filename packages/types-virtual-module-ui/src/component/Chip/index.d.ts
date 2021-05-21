/* eslint-disable @scandipwa/scandipwa-guidelines/use-namespace */

import { MouseEventHandler, PureComponent } from 'react';

export interface ChipProps {
    onClick: (e: unknown) => unknown;
    label: string;
}

export class Chip extends PureComponent<ChipProps> {}

export default Chip;
