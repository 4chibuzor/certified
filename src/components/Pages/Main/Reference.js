import React from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  width: 622px;
  height: 46px;
  margin-top: 116px;
  margin-bottom: 48px;
  font-family: Lato;
  font-size: 38px;
  font-weight: bold;
  color: #000000;
  text-decoration: none solid rgb(0, 0, 0);
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: center;
`;
const OuterContainer = styled.div`
  width: 1424px;
`;
const InnerContainer = styled.div`
  display: flex;
  margin-bottom: 69px;
  &:last-of-type {
    margin-bottom: 0px;
  }
`;
const MessageContainer = styled.div`
  width: 720px;
  display: flex;
  align-items: center;
  background-color: #61b8ff;
  background-size: cover;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
`;
const Message = styled.div`
  width: 680px;
  margin: 49px 20px 51px;
  font-family: Source Sans Pro;
  font-size: 35px;
  color: #ffffff;
  text-decoration: none solid rgb(255, 255, 255);
  line-height: 40px;
  letter-spacing: 1px;
  text-align: justify;

  font-family: Source Sans Pro;
  font-size: 26px;
  color: #ffffff;
  text-decoration: none solid rgb(255, 255, 255);
  line-height: 40px;
  letter-spacing: 1px;
  text-align: justify;
`;
const InfoContainer = styled(MessageContainer)`
  width: 704px;
  font-weight: bold;
  box-shadow: none;
  background-color: transparent;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 24px;
  width: 680px;
  height: 152px;
`;
const InfoTitle = styled.div`
  /* SWPS University W... */
  font-family: Lato;
  font-size: 28px;
  color: #4d4d4d;
  text-decoration: none solid rgb(77, 77, 77);
  letter-spacing: 3px;
  text-transform: uppercase;
`;
const InfoContent = styled.div`
  /* WARSZTATY: DIGITA... */
  font-family: Lato;
  font-size: 22px;
  color: #2196f3;
  text-decoration: none solid rgb(33, 150, 243);
  letter-spacing: 2px;
  text-transform: uppercase;
`;
const entities = [
  {
    title: "Medical University of Lublin",
    event: "TRAINING: INTERCULTURAL EDUCATION",
    message:
      "Thank you for organizing the webinar, Mr. Mark Bain conducted it in a very interesting way with the use of interactive tools, which allowed for the active participation of the participants. We especially liked the brainstorming tool.",
  },
  {
    title: "Uniwersytet SWPS WE WrocławIU",
    event: "WARSZTATY: DIGITAL SKILLS, USER EXPERIENCE, USER INTERFACE",
    message:
      "The training was conducted at a very high substantive and organizational level, which resulted in a very good opinion of the students who praised the way the classes were conducted.",
  },
  {
    title: "UNIVERSITY OF ADAM MICKIEWICZ IN POZNAŃ",
    event: "TRAINING: DATA VISUALIZATION IN TEACHING",
    message:
      "The content, mode and pace of the classes met the expectations of the participants, who easily absorbed the transferred knowledge, as well as were able to immediately modify their academic subjects, incorporating the newly learned method (s) and using the suggested IT tools. Excellent cooperation allows us to present MrCertified. as a partner worth recommending (...) with a professional team of trainers (...) ",
  },
];

export default function Reference() {
  const entityList = entities.map((entity, i) => (
    <InnerContainer key={entity.title.slice(0, 4)}>
      <MessageContainer>
        <Message>
          <q>{entity.message}</q>
        </Message>
      </MessageContainer>
      <InfoContainer>
        <Info>
          <InfoTitle>{entity.title}</InfoTitle>
          <InfoContent>{entity.event}</InfoContent>
        </Info>
      </InfoContainer>
    </InnerContainer>
  ));
  return (
    <Container>
      <Title>reference</Title>
      <OuterContainer>{entityList}</OuterContainer>
    </Container>
  );
}
