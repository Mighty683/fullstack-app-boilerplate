import React, {useState} from 'react';
import {
  SelectWrapper,
  SelectedOption,
  SelectLabel,
  OptionsListWrapper,
  Option,
  SelectIcon} from './AppSelect.styled';
import {ExpandTransition} from "../transistions/ExpandTransition";
import classNames from "classnames";

export type SelectItem = {
  id: string | number
  name: string
}

export type AppSelectProps = {
  items: SelectItem[],
  selectedItem?: SelectItem
  emptyLabel: string
  onChange: (item: SelectItem) => void
  label: string,
  isInvalid?: boolean
}

export const AppSelect: React.FC<AppSelectProps> = (props) => {
  const [listVisible, setListVisible] = useState(false);
  return <SelectWrapper
    onClick={() => {
      setListVisible(!listVisible);
    }}
  >
    <SelectLabel>{props.label}</SelectLabel>
    <SelectedOption
      className={classNames({
        'is-invalid': props.isInvalid
      })}
    >
      {props?.selectedItem?.name || props.emptyLabel}
    </SelectedOption>
    <SelectIcon expanded={listVisible}/>
    <ExpandTransition
      in={listVisible}
    >
      <OptionsListWrapper
        visible={listVisible}
      >
        {props.items.map(
          item => <Option
            key={item.id}
            onClick={() => {
              props.onChange(item);
            }}
          >
            {item.name}
          </Option>
        )}
      </OptionsListWrapper>
    </ExpandTransition>
  </SelectWrapper>;
};