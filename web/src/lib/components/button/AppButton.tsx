import React from "react";
import { AppButtonElement } from './AppButton.styled';

export type AppButtonProps = {
  onClick: (event?: React.MouseEvent) => void
  className?: string
}
export const AppButton: React.FC<AppButtonProps> = (props) => {
  return <AppButtonElement className={props.className} type="button" onClick={props.onClick}>{props.children}</AppButtonElement>;
};