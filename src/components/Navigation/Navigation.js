import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/pngs/logo.png";
const NavBar = styled.nav`
  display: flex;
  height: 288px;
  width: 1920px;
`;
const Logo = styled.img`
  width: 314px;
  height: 72px;
  margin-left: 100px;
  margin-top: 68px;
`;
const Menu = styled.ul`
  position: relative;
  display: flex;
  margin-left: 770px;
  list-style-type: none;
`;
const MenuItem = styled.li`
  &:last-of-type: {
    margin-right: 0px;
  }
  margin-right: 24px;
  margin-top: 138px;
`;
const linkstyle = {
  padding: 4,
  backgroundColor: "#f7f7f7",
  backgroundSize: "cover",
  fontFamily: `"Lato", sans-serif`,
  fontSize: 28,
  fontWeight: "bold",
  color: "#000000",
  textDecoration: "none solid rgb(0, 0, 0)",
  letterSpacing: 3,
  textAlign: "center",
  boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
};
export default function Navigation({ menus }) {
  const menuList = menus.map((menu, i) => (
    <MenuItem key={`${menu.title}-${i}`}>
      <Link to={menu.url} style={linkstyle}>
        {menu.title.toUpperCase()}
      </Link>
    </MenuItem>
  ));
  return (
    <NavBar>
      <Link to="/">
        <Logo src={logo} alt="certified logo" />
      </Link>
      <Menu>{menuList}</Menu>
    </NavBar>
  );
}
