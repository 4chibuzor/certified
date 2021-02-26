import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 1923px;
  height: 378px;
  display: flex;
  background-color: #1d7fcf;
  background-size: cover;
`;

const TopMenuItem = styled.a`
  height: 33px;
  margin-top: 64px;
  font-family: Lato;
  font-weight: bold;
  font-size: 24px;
  color: #ffffff;
  text-decoration: none solid rgb(255, 255, 255);
  letter-spacing: 2px;
  text-transform: uppercase;
  &:first-of-type {
    width: 124px;
    margin-right: 362px;
    margin-left: 294px;
  }
  &:nth-of-type(2) {
    width: 300px;
    margin-right: 272px;
  }
  &:nth-of-type(3) {
    width: 205px;
    margin-right: 64px;
  }
`;
const topMenus = [
  { name: "SERVICES" },
  { name: "OUR BRANDS" },
  { name: "CONTACT" },
];

export default function Footer() {
  const topMenuList = topMenus.map((menu) => (
    <TopMenuItem key={menu.name}>{menu.name}</TopMenuItem>
  ));
  return <Container>{topMenuList}</Container>;
}
