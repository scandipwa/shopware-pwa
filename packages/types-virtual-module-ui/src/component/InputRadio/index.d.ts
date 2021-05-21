/* eslint-disable @scandipwa/scandipwa-guidelines/use-namespace */

import { ChangeEvent, PureComponent } from 'react';

import { Input } from '../../typings/input';

export interface InputRadioProps extends Input {
    label?: string,
    checked?: boolean,
    defaultChecked?: boolean
    onChange?: (e: ChangeEvent<HTMLInputElement>) => unknown
}

export class InputRadio extends PureComponent<InputRadioProps> {}

export default InputRadio;
