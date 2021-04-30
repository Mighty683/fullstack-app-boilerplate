import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './fade.css';

export const FadeGroupTransition: React.FC = (props) => {
  return <TransitionGroup>
    {props.children}
  </TransitionGroup>;
};

export const FadeTransition: React.FC = (props) => {
  return <CSSTransition
    timeout={500}
    classNames="fade"
    {...props}
  >
    {props.children}
  </CSSTransition>;
};