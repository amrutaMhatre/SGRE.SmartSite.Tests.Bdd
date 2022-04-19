import React, { FC } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../../static/Images/logo.svg";
import smartLogo from "../../static/Images/smartLogo.svg";
import "../../styles/index.scss";

export interface Menus {
  // Handbook: string;
  // About: string;
  // "Help&Support": string;
}
const MenuItems: Array<keyof Menus> = [
  // "Handbook", "About", "Help&Support"
];
var MenuLinks: Menus = {
  // Handbook: "./",
  // About: "./about",
  // "Help&Support": "./contact",
};
const Header: FC = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="#home">
        <img src={smartLogo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="nav-pills">
          {MenuItems.map((item, index) => (
            <NavLink
              key={item}
              to={MenuLinks[item]}
              activeClassName="active"
              className="nav-link "
              exact={true}
            >
              {item}
            </NavLink>
          ))}
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand>
        <img src={Logo} alt="" />
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
