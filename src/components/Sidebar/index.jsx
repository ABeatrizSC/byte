import React, { useContext, useState } from "react";
import "./style.css";
import { NavLink, useNavigate } from "react-router-dom";
import byteLogo from "../../assets/images/logoByte.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBagShopping,
  faChartColumn,
  faFolder,
  faRightFromBracket,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import TokenContext from "../../contexts/TokenContext";
import { removeAuthCookie } from "../../utils/cookie";

export function Sidebar({ children }) {
  /* TODO: REMOVER */
  const { token } = useContext(TokenContext);
  const [isSidebarOpened, setIsSidebarOpened] = useState(true);
  const openToggle = () => setIsSidebarOpened(!isSidebarOpened);
  const navigate = useNavigate();
  const menuItems = [
    {
      path: "products",
      name: "Produtos",
      icon: <FontAwesomeIcon icon={faStore} />,
    },
    {
      path: "order",
      name: "Pedidos",
      icon: <FontAwesomeIcon icon={faBagShopping} />,
    },
    {
      path: "categories",
      name: "Categorias",
      icon: <FontAwesomeIcon icon={faFolder} />,
    },
    {
      path: "analytics",
      name: "Análise",
      icon: <FontAwesomeIcon icon={faChartColumn} />,
    },
  ];

  const handleLogout = () => {
    removeAuthCookie();
    navigate("/");
  };

  return (
    <div className="sidebar-container">
      <aside className={["sidebar", isSidebarOpened ? "" : "closed"].join(" ")}>
        <div className="sidebar__top-section">
          {isSidebarOpened && (
            <img
              className="top-section__logo"
              src={byteLogo}
              alt="Logo da lanchonete Byte"
            />
          )}
          <div onClick={openToggle}>
            <FontAwesomeIcon icon={faBars} className="icon" />
          </div>
        </div>
        <nav className="sidebar__nav">
          <ul className="nav__ul">
            {menuItems.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li>
                  <div className="icon">{item.icon}</div>
                  {isSidebarOpened ? item.name : null}
                </li>
              </NavLink>
            ))}
          </ul>
        </nav>
        <button className="sidebar__logout-button" onClick={handleLogout}>
          <FontAwesomeIcon className="icon" icon={faRightFromBracket} />
          {isSidebarOpened ? "Sair" : ""}
        </button>
      </aside>
      <main>{children}</main>
    </div>
  );
}
