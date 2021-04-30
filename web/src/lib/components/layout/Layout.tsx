import React from 'react';
import styled from "styled-components";
import {PageHeader} from "./Header";
import {Sizing} from "../../styles/sizing";


const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
`;

const ContentContainer = styled.div`
  padding: ${Sizing.normal}px;
`;

export const PageLayout: React.FC = (props) => {
  return <Container>
    <PageHeader />
    <ContentWrapper>
      <ContentContainer>
        {props.children}
      </ContentContainer>
    </ContentWrapper>
  </Container>;
};