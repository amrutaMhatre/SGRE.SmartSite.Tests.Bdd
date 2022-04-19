import React, { FC } from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import "./sidebar.scss";

export interface Menus {
  Handbook: string;
  About: string;
  Contact: string;
}
const MenuItems: Array<keyof Menus> = ["Handbook", "About", "Contact"];
var MenuLinks: Menus = {
  Handbook: "./",
  About: "./about",
  Contact: "./contact",
};
const Side: FC = (props) => {
  return (
    <>
      <Nav className="col-md-12 d-none d-md-block sidebar" activeKey="/home">
        {MenuItems.map((item, index) => (
          <Nav.Item>
            <NavLink
              key={item}
              to={MenuLinks[item]}
              activeClassName="active"
              className="nav-link "
              exact={true}
            >
              {item}
            </NavLink>
          </Nav.Item>
        ))}
      </Nav>
    </>
  );
};
const Sidebar = withRouter(Side);
export default Sidebar;
