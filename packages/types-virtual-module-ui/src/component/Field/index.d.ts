import React, { PureComponent } from 'react';

export type AllowedChildrenType = 'radio' | 'radio-group' | 'checkbox' | 'select' | 'text' | 'unknown';

export interface FieldDefaultProps {
    onChange: () => void
}

export interface FieldProps extends Partial<FieldDefaultProps> {
    isError?: boolean
    label?: string
    message?: string
    children: React.ReactNode
}

export class Field extends PureComponent<FieldProps> {}

export default Field;
