import styled from "styled-components";
import {Colors} from "../../styles/colors";
import {Sizing} from "../../styles/sizing";
import {Fonts} from "../../styles/fonts";

export const AppButtonElement = styled.button`
  cursor: pointer;
  background-color: ${Colors.primary};
  border: none;
  min-width: 100px;
  padding: ${Sizing.mini}px;
  color: ${Colors.white};
  font-size: ${Fonts.default.size};
  line-height: ${Fonts.default.height};
  :focus {
     outline: 0;
  }
  :active {
    outline:0;
    opacity: 0.5;
  }
`;
