import React from "react";
import styled from "styled-components";
import zus from "../../../assets/pngs/logo-zus.png";
import lublin from "../../../assets/pngs/logo-up-lublin.png";
import politechnika from "../../../assets/pngs/logo-politechnika-koszalinska.png";
import sum from "../../../assets/pngs/logo-sum.png";
import uam from "../../../assets/jpegs/logo-uam.jpg";
const Container = styled.div`
  height: 519px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;
const Title = styled.div`
  width: 622px;
  height: 46px;
  margin-top: 60px;
  margin-bottom: 88px;
  font-family: Lato;
  font-size: 38px;
  font-weight: bold;
  color: #000000;
  text-decoration: none solid rgb(0, 0, 0);
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: center;
`;
const Features = styled.div`
  display: flex;
`;
const Image = styled.img``;
const logos = [
  { src: zus, alt: "logo-zus", width: "131px", height: "129px" },
  { src: lublin, alt: "logo-lublin", width: "316px", height: "115px" },
  {
    src: politechnika,
    alt: "logo-politechnika",
    width: "106px",
    height: "104px",
  },
  {
    src: sum,
    alt: "logo-sum",
    width: "315px",
    height: "118px",
  },
  {
    src: uam,
    alt: "logo-uam",
    width: "100px",
    height: "105px",
  },
];
const Cta = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 358px;
  height: 53px;
  margin-bottom: 74px;
  background-color: #2196f3;
  background-size: cover;
  font-family: Lato;
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none solid rgb(255, 255, 255);
  letter-spacing: 3px;
  text-align: center;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
`;
export default function OurCustomers() {
  const logoList = logos.map((logo) => (
    <Image
      key={logo.alt}
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
    />
  ));
  return (
    <Container>
      <Title>our customers</Title>
      <div
        style={{
          height: 325,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Features>{logoList}</Features>
        <Cta>
          <span>our portfolio</span>
        </Cta>
      </div>
    </Container>
  );
}
