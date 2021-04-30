import React from 'react';
import {CSSTransition} from 'react-transition-group';
import './expand.css';

export const ExpandTransition: React.FC<{
  in: boolean
}> = (props) => {
  return <CSSTransition
    timeout={300}
    in={props.in}
    classNames="expand"
    {...props}
  >
    {props.children}
  </CSSTransition>;
};