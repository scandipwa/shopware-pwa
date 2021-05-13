import { InputBaseComponentProps } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { InputCheckboxProps } from '@virtual-module/ui';
import { PureComponent } from 'react';

/** @namespace Materialui/Component/InputCheckbox/Component/InputCheckboxComponent */
export class InputCheckboxComponent extends PureComponent<Omit<InputCheckboxProps, 'name'> & { inputProps: InputBaseComponentProps }> {
    render(): JSX.Element {
        const {
            onChange,
            inputProps,
            label,
            checked,
            defaultChecked,
            value,
            defaultValue
        } = this.props;

        return (
            <FormControlLabel
              label={ label }
              control={ (
                <Checkbox
                  color="primary"
                  checked={ checked }
                  defaultChecked={ defaultChecked }
                  value={ value }
                  defaultValue={ defaultValue }
                  onChange={ onChange }
                  inputProps={ inputProps }
                />
              ) }
            />
        );
    }
}

export default InputCheckboxComponent;
