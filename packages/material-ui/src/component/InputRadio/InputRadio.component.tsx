import FormControlLabel from '@material-ui/core/FormControlLabel';
import { SwitchBaseProps } from '@material-ui/core/internal/SwitchBase';
import Radio from '@material-ui/core/Radio';
import { InputRadioProps } from '@virtual-module/ui';
import { PureComponent } from 'react';

/** @namespace Materialui/Component/InputRadio/Component/InputRadioComponent */
export class InputRadioComponent extends PureComponent<Omit<InputRadioProps, 'name'> & { inputProps: SwitchBaseProps['inputProps'] }> {
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
              value={ value || defaultValue }
              control={ (
                <Radio
                  color="primary"
                  checked={ checked }
                  defaultChecked={ defaultChecked }
                  onChange={ onChange }
                  inputProps={ inputProps }
                />
              ) }
            />
        );
    }
}

export default InputRadioComponent;
