import { InputBaseComponentProps } from '@material-ui/core';
import { InputCheckboxProps } from '@virtual-module/ui';
import { PureComponent } from 'react';

import InputCheckbox from './InputCheckbox.component';

/** @namespace Materialui/Component/InputCheckbox/Container/InputCheckboxContainer */
export class InputCheckboxContainer extends PureComponent<InputCheckboxProps> {
    static defaultProps = {
        onChange: () => {}
    };

    containerFunctions = {};

    containerProps = (): Omit<InputCheckboxProps, 'name'> & { inputProps: InputBaseComponentProps } => {
        const {
            name,
            autoComplete,
            isDisabled,
            isReadOnly,
            ...rest
        } = this.props;

        return {
            inputProps: {
                name,
                autoComplete,
                disabled: isDisabled,
                readOnly: isReadOnly
            },
            ...rest
        };
    };

    render(): JSX.Element {
        return (
            <InputCheckbox
              { ...this.containerProps() }
              { ...this.containerFunctions }
            />
        );
    }
}

export default InputCheckboxContainer;
