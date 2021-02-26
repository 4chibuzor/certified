import React, { Fragment } from "react";
import styled from "styled-components";
import Cta from "./Cta";
const Container = styled.div`
  width: 1920px;
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 164px;
  background-image: linear-gradient(
    45deg,
    #61b8ff 000000000000002%,
    #c982e8 100%
  );
  background-position: center center;
  background-size: cover;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
`;
const InnerContainer = styled.div`
  width: 1372px;
  height: 335px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.div`
  /* WHY SHOULD YOU TR... */
  font-family: Source Sans Pro;
  font-size: 32px;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none solid rgb(255, 255, 255);
  line-height: 50px;
  letter-spacing: 2px;
`;
const Content = styled.div`
  /* MrCertified is a ... */
  font-family: Source Sans Pro;
  font-size: 28px;
  color: #ffffff;
  text-decoration: none solid rgb(255, 255, 255);
  line-height: 50px;
  letter-spacing: 2px;
`;
const CtaContainer = styled.div`
  width: 960px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px auto 12px;
`;
export default function Conclusion() {
  return (
    <Fragment>
      <Container>
        <InnerContainer>
          <Title>WHY SHOULD YOU TRUST US?</Title>
          <Content>
            MrCertified is a training company with over 10 years of teaching
            experience. We had the opportunity to conduct training for
            universities and public and private schools, large and smaller
            companies, and many public institutions. Many of our existing
            customers are happy to come back to us for further dedicated
            training.
          </Content>
        </InnerContainer>
      </Container>
      <CtaContainer>
        <Cta href="#" title="FIND OUT MORE ABOUT US" />
      </CtaContainer>
    </Fragment>
  );
}
