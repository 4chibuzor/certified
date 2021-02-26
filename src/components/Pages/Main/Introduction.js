import React from "react";
import styled from "styled-components";
const IntroductionSection = styled.section`
  width: 1920px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(45deg, #c982e8 0%, #61b8ff 100%);
  background-position: center center;
  background-size: cover;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
`;
const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Introtext = styled.div`
  width: 1322px;
  height: 206px;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 28px;
  color: #ffffff;
  text-decoration: none solid rgb(255, 255, 255);
  line-height: 50px;
  letter-spacing: 2px;
  text-align: right;
`;
const GetToKnowUs = styled.a`
  width: 320px;
  height: 53px;
  margin-top: 36px;
  background-color: #f0f0f0;
  background-size: cover;
  font-family: Lato;
  font-size: 22px;
  font-weight: bold;
  color: #000000;
  text-decoration: none solid rgb(0, 0, 0);
  letter-spacing: 3px;
  text-align: center;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
`;
export default function Introduction() {
  return (
    <IntroductionSection>
      <IntroContainer>
        <Introtext>
          We have been officially conducting trainings and courses since 2012,
          but we started gaining knowledge and necessary training skills much
          earlier. Thanks to our experienced trainers, we solve problems of
          companies, universities and many state institutions, especially in the
          field of e-learning, broadly understood technology, and business
          skills.
        </Introtext>
        <GetToKnowUs href="#">GET TO KNOW US CLOSER</GetToKnowUs>
      </IntroContainer>
    </IntroductionSection>
  );
}
