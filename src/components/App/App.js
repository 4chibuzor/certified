import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Offer from "../Pages/Offer/Offer";
import styled from "styled-components";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Portfolio from "../Pages/Portfolio/Portfolio";
import About from "../Pages/About/About";

const Container = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const Header = styled.header``;
const menus = [
  { title: "offer", url: "offer" },
  { title: "portfolio", url: "portfolio" },
  { title: "about us", url: "about" },
];
export default function App() {
  return (
    <Container>
      <BrowserRouter>
        <Header>
          <Navigation menus={menus} />
        </Header>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/offer">
            <Offer />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </Container>
  );
}
