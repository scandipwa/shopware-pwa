/* eslint-disable @scandipwa/scandipwa-guidelines/use-namespace */

import { ChangeEvent, PureComponent } from 'react';

import { Input } from '../../typings/input';

export interface InputSelectOption {
    value: string,
    label: string
}

export interface InputSelectProps extends Input {
    placeholder?: string,
    options: InputSelectOption[]
    onChange?: (e: ChangeEvent<{ name?: string; value: unknown }>) => unknown
}

export class InputSelect extends PureComponent<InputSelectProps> {}

export default InputSelect;
