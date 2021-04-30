import classNames from 'classnames';
import React, { ChangeEvent } from 'react';
import {InputDiv, InputElement, InputLabel} from './AppInput.styled';

export type InputProps = {
    type?: 'text' | 'number' | 'password'
    value?: string | number
    name: string
    onChange: (value: ChangeEvent) => void,
    required?: boolean,
    isInvalid?: boolean,
    label?: string,
}

export const AppInput: React.FC<InputProps> = (props) => {
  return <InputDiv>
    {
      props.label
            && <InputLabel className={classNames({
              'required': props.required,
            })}>{props.label}</InputLabel>
    }
    <InputElement
      name={props.name}
      type={props.type || 'text'}
      className={classNames({
        'required': props.required,
        'is-invalid': props.isInvalid
      })}
      onChange={props.onChange}
      value={props.value}
    />
  </InputDiv>;
};