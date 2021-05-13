
import { ChangeEvent, PureComponent } from 'react';
import { Input } from '../../typings/input';

export interface InputTextProps extends Input {
    type: 'text' | 'email' | 'password' | 'tel' | 'number'
    placeholder?: string
    min?: number
    max?: number
    onChange?: (e: ChangeEvent<HTMLInputElement>) => unknown
}

export class InputText extends PureComponent<InputTextProps> {}

export default InputText;
