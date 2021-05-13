import { PureComponent, ChangeEvent } from 'react';
import { Input } from '../../typings/input';

export interface InputCheckboxProps extends Omit<Input, 'defaultValue'> {
    label?: string,
    checked?: boolean,
    defaultChecked?: boolean
    onChange?: (e: ChangeEvent<HTMLInputElement>) => unknown
}

export class InputCheckbox extends PureComponent<InputCheckboxProps> {}

export default InputCheckbox;
