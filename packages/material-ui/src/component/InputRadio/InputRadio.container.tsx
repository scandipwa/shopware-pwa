import { InputBaseComponentProps } from '@material-ui/core';
import { InputRadioProps } from '@virtual-module/ui';
import { PureComponent } from 'react';

import InputRadio from './InputRadio.component';

/** @namespace Materialui/Component/InputRadio/Container/InputRadioContainer */
export class InputRadioContainer extends PureComponent<InputRadioProps> {
    static defaultProps = {
        onChange: () => {}
    };

    containerFunctions = {};

    containerProps = (): Omit<InputRadioProps, 'name'> & { inputProps: InputBaseComponentProps } => {
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
            <InputRadio
              { ...this.containerProps() }
              { ...this.containerFunctions }
            />
        );
    }
}

export default InputRadioContainer;
