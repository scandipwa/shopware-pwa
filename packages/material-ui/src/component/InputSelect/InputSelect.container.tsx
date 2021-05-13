import { SelectProps } from '@material-ui/core';
import { InputSelectProps, InputSelectOption } from '@virtual-module/ui';
import { PureComponent } from 'react';

import InputSelect from './InputSelect.component';

/** @namespace Materialui/Component/InputSelect/Container/InputSelectContainer */
export class InputSelectContainer extends PureComponent<InputSelectProps> {
    static defaultProps = {
        onChange: () => {}
    };

    containerFunctions = {};

    containerProps = (): Omit<InputSelectProps, 'name'> & { inputProps: SelectProps['inputProps'] } => {
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

    getDefaultValue(): string | number | undefined {
        const {
            placeholder,
            defaultValue,
            value,
            options
        } = this.props;

        if (value) {
            // if there is value => ignore
            return undefined;
        }

        if (defaultValue) {
            // if there is defaultValue => use it
            return defaultValue;
        }

        if (placeholder) {
            // if placeholder, use empty value
            return '';
        }

        // Otherwise, retrieve from first option given
        const { value: firstOptionValue = '' } = options[0] || {};

        return firstOptionValue;
    }

    getOptions(): InputSelectOption[] {
        const { placeholder, options } = this.props;

        if (!placeholder) {
            return options;
        }

        return [
            {
                value: '',
                label: placeholder
            },
            ...options
        ];
    }

    render(): JSX.Element {
        return (
            <InputSelect
              { ...this.containerProps() }
              { ...this.containerFunctions }
            />
        );
    }
}

export default InputSelectContainer;
