import { InputBaseProps } from '@material-ui/core';
import MaterialInput from '@material-ui/core/Input';
import { InputTextProps } from '@virtual-module/ui';
import { PureComponent } from 'react';

/** @namespace Materialui/Component/InputText/Component/InputTextComponent */
export class InputTextComponent extends PureComponent<Omit<InputTextProps, 'name'> & { inputProps: InputBaseProps['inputProps'] }> {
    render(): JSX.Element {
        const {
            type,
            onChange,
            inputProps,
            placeholder
        } = this.props;

        return (
            <MaterialInput
              type={ type }
              onChange={ onChange }
              placeholder={ placeholder }
              inputProps={ inputProps }
            />
        );
    }
}

export default InputTextComponent;
