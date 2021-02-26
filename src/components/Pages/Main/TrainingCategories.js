import React from "react";
import styled from "styled-components";
import Cta from "./Cta";
import software from "../../../assets/pngs/software-development.png";
import knowledge from "../../../assets/pngs/knowledge.png";
import aboutus from "../../../assets/pngs/about-us.png";
import design from "../../../assets/pngs/web-design-brush.png";
import skill from "../../../assets/pngs/inspiration.png";
const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  width: 540px;
  height: 46px;
  margin-top: 100px;
  font-family: Lato;
  font-size: 38px;
  font-weight: bold;
  color: #000000;
  text-decoration: none solid rgb(0, 0, 0);
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: center;
`;
const TrainingContainer = styled.div`
  width: 1288px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0px;
`;
const Training = styled.div`
  width: 400px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  margin-top: 48px;
  margin-right: 44px;
  background-color: #f7f7f7;
  font-weight: bold;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  &:nth-child(3) {
    margin-right: 0px;
  }
`;
const ImageContainer = styled.div``;
const Figure = styled.figure`
  width: 140px;
  height: 140px;
  display: flex;
  justify-content: center;
  margin-top: 32px;
  align-items: center;
  background-color: #61b8ff;
  border-radius: 50%;
`;
const Image = styled.img`
  width: 85px;
  height: 71px;
`;
const Caption = styled.div`
  width: 382px;
  height: 44px;
  margin-top: 32px;
  font-family: Lato;
  font-size: 32px;
  color: #000000;
  text-decoration: none solid rgb(0, 0, 0);
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
`;
const trainingData = [
  {
    src: software,
    alt: "software-development",
    width: "85px",
    height: "71px",
    caption: "technology",
  },
  {
    src: knowledge,
    alt: "knowledge",
    width: "76px",
    height: "100px",
    caption: "education",
  },
  {
    src: aboutus,
    alt: "business",
    width: "100px",
    height: "52px",
    caption: "business",
  },
  {
    src: design,
    alt: "design",
    width: "88",
    height: "70",
    caption: "design",
  },
  {
    src: skill,
    alt: "skill",
    width: "85px",
    height: "97px",
    caption: "skill",
  },
];

export default function TrainingCategories() {
  const trainingList = trainingData.map((data) => (
    <Training key={data.caption}>
      <ImageContainer>
        <Figure>
          <Image
            src={data.src}
            alt={data.alt}
            width={data.width}
            height={data.height}
          />
        </Figure>
      </ImageContainer>
      <Caption>{data.caption}</Caption>
    </Training>
  ));
  return (
    <Container>
      <Title>training Categories</Title>
      <TrainingContainer>{trainingList}</TrainingContainer>
      <Cta href="#" title="all training and courses" />
    </Container>
  );
}
