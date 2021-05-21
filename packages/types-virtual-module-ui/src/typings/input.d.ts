export interface Input {
    name: string
    // Require one of these two values
    value?: string | number
    defaultValue?: string | number
    // Hint for form autofill feature
    autoComplete?: string
    // Whether the form control is disabled
    isDisabled?: boolean
    // Whether the value is not editable
    isReadOnly?: boolean
}

export interface TextAreaInputProps extends Input {
    placeholder?: string
    cols?: number
}
