import styled from 'styled-components';
import { Colors } from '../../styles/colors';
import { Sizing } from '../../styles/sizing';
import {Fonts} from "../../styles/fonts";

export const InputDiv = styled.div`
    margin-top: ${Sizing.normal}px;
    margin-bottom: ${Sizing.normal}px;
    position: relative;
    display: flex;
    justify-content: stretch;
`;

export const InputLabel  = styled.label`
  display: block;
  background-color: white;
  position: absolute;
  font-size: ${Fonts.mini.size};
  line-height: ${Fonts.mini.height};
  top: -7px;
  left: 5px;
  padding-left: ${Sizing.mini}px;
  padding-right: ${Sizing.mini}px;
`;

export const InputElement = styled.input`
    border: 1px solid ${Colors.primary};
    padding: ${Sizing.normal}px;
    width: 100%;
    &.is-invalid {
        border: 1px solid ${Colors.error};
    }
`;