import styled, {css} from "styled-components";
import {Colors} from "../../styles/colors";
import {Sizing} from "../../styles/sizing";
import {Fonts} from "../../styles/fonts";
import {ArrowDownIcon} from "../../../../assets/svg/Icons";

export const SelectWrapper = styled.div`
    margin-top: ${Sizing.normal}px;
    margin-bottom: ${Sizing.normal}px;
    position: relative;
    display: flex;
    justify-content: stretch;
`;

export const SelectLabel  = styled.label`
  display: block;
  background-color: white;
  position: absolute;
  font-size: ${Fonts.mini.size};
  line-height: ${Fonts.mini.height};
  top: -7px;
  left: 5px;
  padding-left: ${Sizing.mini}px;
  padding-right: ${Sizing.mini}px;
  &.is-invalid {
    color: ${Colors.error};
  }
`;

export const SelectedOption = styled.div`
  border: 1px solid ${Colors.primary};
  padding: ${Sizing.normal}px;
  width: 100%;
  min-height: 20px;
  padding: ${Sizing.normal}px;
  &.is-invalid {
    border: 1px solid ${Colors.error};
  }
`;

export const Option = styled.div`
  border: 1px ${Colors.primary};
  border-style: none solid solid solid;
  padding: ${Sizing.normal}px;
  background-color: white;
  &.is-invalid {
    border: 1px solid ${Colors.error};
  }
  &:hover {
    background-color: ${Colors.primary};
  }
`;

export const OptionsListWrapper = styled.div<{
  visible: boolean
}>`
  display: ${({visible}) => visible ? 'flex': 'none'};
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
  position: absolute;
  z-index: 2;
  width: 100%;
  bottom: calc(-100% + 1px);
`;

export const SelectIcon = styled(ArrowDownIcon)<{
  expanded: boolean
}>`
  position: absolute;
  right: 10px;
  top: 10px;
  transition: transform 0.3s ease-in-out;
  transform: ${({expanded}) => expanded ? 'rotate(180deg)' : 'rotate(0)'}
`;