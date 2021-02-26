import React from "react";
import styled from "styled-components";
const Link = styled.a`
  width: 500px;
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 68px;
  margin-bottom: 104px;
  text-transform: uppercase;
  background-color: #c285ea;
  background-size: cover;
  font-family: Lato;
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none solid rgb(255, 255, 255);
  letter-spacing: 3px;
  text-align: center;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
`;
export default function Cta({ href, title }) {
  return (
    <Link href={href} title={title}>
      <span>{title}</span>
    </Link>
  );
}
