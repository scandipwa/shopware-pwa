import { PureComponent } from 'react';

export interface ButtonDefaultProps {
    onClick: () => void
    isPrimary: boolean
    isDisabled: boolean
    type: "text" | "outlined" | "contained" | "icon"
    to: string
}

export interface ButtonProps extends Partial<ButtonDefaultProps> {}

export class Button extends PureComponent<ButtonProps> {}

export default Button;