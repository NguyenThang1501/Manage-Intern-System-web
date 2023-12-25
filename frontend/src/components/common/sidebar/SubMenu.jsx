import React, { useState } from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const SubMenu = ({ item, isOpen, isOpenSubNav, onToggleSubNav }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <NavLink
        to={item.path}
        className="link"
        onClick={() => {
          item.subNav && onToggleSubNav();
          showSubnav();
        }}
      >
        <div className="icon-sidebar">{item.icon}</div>
        <div
          style={{ display: isOpen ? "block" : "none" }}
          className="link-text"
        >
          {item.name}
        </div>

        <div
          className="icon-sidebar-right"
          style={{ display: isOpen ? "block" : "none" }}
        >
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </NavLink>
      {subnav &&
        isOpenSubNav &&
        item.subNav.map((item, index) => {
          return (
            <NavLink
              to={item.path}
              key={index}
              className="link-submenu"
              activeClassName="active"
            >
              <div className="icon-sidebar" activeClassName="active">
                {item.icon}
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link-text"
              >
                {item.name}
              </div>
            </NavLink>
          );
        })}
    </>
  );
};

export default SubMenu;
