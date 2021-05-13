import { InputBaseProps } from '@material-ui/core';
import { InputTextProps } from '@virtual-module/ui';
import { PureComponent } from 'react';

import InputText from './InputText.component';

/** @namespace Materialui/Component/InputText/Container/InputTextContainer */
export class InputTextContainer extends PureComponent<InputTextProps> {
    static defaultProps = {
        onChange: () => {}
    };

    containerFunctions = {};

    containerProps = (): Omit<InputTextProps, 'name'> & { inputProps: InputBaseProps['inputProps'] } => {
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
            <InputText
              { ...this.containerProps() }
              { ...this.containerFunctions }
            />
        );
    }
}

export default InputTextContainer;
