import React from 'react';
import styled from "styled-components";

import {Colors} from "../../styles/colors";
import {Breakpoints} from "../../styles/breakpoints";
import {FontsStyles} from "../../styles/fonts";
import {Sizing} from "../../styles/sizing";

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${Colors.secondary};
`;

const ContentWrapper = styled.div`
  display: flex;
  height: 50px;
  padding: ${Sizing.normal}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${Breakpoints.mobile}) {
    flex-direction: row;
  }
`;

const Header = styled.h1`
  ${FontsStyles.big}
  color: ${Colors.white}
`;

export const PageHeader: React.FC<{ className?: string }> = (props) => {
  return <Container className={props.className}>
    <ContentWrapper>
      <Header>
        Titile
      </Header>
    </ContentWrapper>
  </Container>;
};