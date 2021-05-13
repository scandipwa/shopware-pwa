/* eslint-disable max-len */
import { CheckboxProps } from '@material-ui/core/Checkbox';
import { InputBaseComponentProps, InputBaseProps } from '@material-ui/core/InputBase';

type PropsToMap = 'name' | 'autoComplete' | 'isDisabled' | 'isReadOnly' | 'onChange';

export type InputProps = {
    InputProps: InputBaseComponentProps,
    onChange?: InputBaseProps['onChange'] | CheckboxProps['onChange'] // (value: string | boolean) => unknown
}

/** @namespace Materialui/Util/Input/Index/processInputProps */
export const processInputProps = <T extends Record<string, any>> (props: T): Pick<T, Exclude<keyof T, PropsToMap>> & InputProps => {
    const {
        name,
        autoComplete,
        isDisabled,
        isReadOnly,
        onChange,
        ...restProps
    } = props;

    const processedProps: Pick<T, Exclude<keyof T, PropsToMap>> & InputProps = {
        InputProps: {
            name,
            autoComplete,
            disabled: isDisabled,
            readOnly: isReadOnly
        },
        ...restProps
    };

    if (onChange) {
        processedProps.onChange = (event, checked) => onChange(
            typeof event.target.value === 'string'
                ? event.target.value
                : checked
        );
    }

    return processedProps;
};
