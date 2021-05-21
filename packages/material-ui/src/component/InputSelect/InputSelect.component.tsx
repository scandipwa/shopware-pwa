import MenuItem from '@material-ui/core/MenuItem';
import MaterialSelect, { SelectProps } from '@material-ui/core/Select';
import { InputSelectProps, InputSelectOption } from '@virtual-module/ui';
import { PureComponent } from 'react';

/** @namespace Materialui/Component/InputSelect/Component/InputSelectComponent */
export class InputSelectComponent extends PureComponent<Omit<InputSelectProps, 'name'> & { inputProps: SelectProps['inputProps'] }> {
    renderOption = (option: InputSelectOption): JSX.Element => {
        const { label, value } = option;

        return (
            <MenuItem value={ value } key={ value }>
                { label }
            </MenuItem>
        );
    };

    renderOptions(): JSX.Element[] {
        const { options } = this.props;
        return options.map(this.renderOption);
    }

    render(): JSX.Element {
        const {
            onChange,
            inputProps,
            value,
            defaultValue
        } = this.props;

        return (
            <MaterialSelect
              className="Select"
              displayEmpty
              inputProps={ inputProps }
              onChange={ onChange }
              value={ value }
              defaultValue={ defaultValue }
            >
                { this.renderOptions() }
            </MaterialSelect>
        );
    }
}

export default InputSelectComponent;
