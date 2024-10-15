import React, { useState } from "react";
import { Drawer, Button } from "@mui/material";
import { Nav, NavLink } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import LoanIcon from "@mui/icons-material/AttachMoney";
import ReservationIcon from "@mui/icons-material/Event";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // Ícone para expandir
import ExpandLessIcon from "@mui/icons-material/ExpandLess"; 

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

type SubmenuType = 'books' | 'borrows' | 'reserves';


const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const location = useLocation();
  const [submenus, setSubmenus] = useState({
    books: false,
    borrows: false,
    reserves: false,
  });
  
  const toggleSubmenu = (submenu: SubmenuType) => {
    setSubmenus((prev) => ({
      ...prev,
      [submenu]: !prev[submenu],
    }));
  };

  return (
    <Drawer anchor="left" open={isOpen} onClose={onToggle}>
      <div className="sidebar-content">
        <h2 className="sidebar-title">OnlyBooks</h2>
        <hr />
        <Nav className="flex-column nav-links">
          <NavLink
            as={Link}
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            <HomeIcon /> Início
          </NavLink>
          <div
            className="nav-link"
            onClick={() => toggleSubmenu("books")}
            style={{ cursor: "pointer" }}
          >
            <BookIcon /> Livros{" "}
            {submenus.books ? (
              <ExpandLessIcon style={{ marginLeft: "auto" }} />
            ) : (
              <ExpandMoreIcon style={{ marginLeft: "auto" }} />
            )}
          </div>
          {submenus.books && (
            <div style={{ paddingLeft: "20px" }}>
              <NavLink
                as={Link}
                to="/books"
                className={`nav-link ${
                  location.pathname === "/books" ? "active" : ""
                }`}
              >
                Catalogo de Livros
              </NavLink>
              <NavLink
                as={Link}
                to="/books/register"
                className={`nav-link ${
                  location.pathname === "/books/register" ? "active" : ""
                }`}
              >
                Cadastro de Livros
              </NavLink>
            </div>
          )}
          <div
            className="nav-link"
            onClick={() => toggleSubmenu("borrows")}
            style={{ cursor: "pointer" }}
          >
            <LoanIcon /> Empréstimos
            {submenus.borrows ? (
              <ExpandLessIcon style={{ marginLeft: "auto" }} />
            ) : (
              <ExpandMoreIcon style={{ marginLeft: "auto" }} />
            )}
            </div>
            {submenus.borrows && (
            <div style={{ paddingLeft: "20px" }}>
              <NavLink
                as={Link}
                to="/borrows"
                className={`nav-link ${
                  location.pathname === "/borrows" ? "active" : ""
                }`}
              >
                Visualização Emprestimos
              </NavLink>
              <NavLink
                as={Link}
                to="/borrows/register"
                className={`nav-link ${
                  location.pathname === "/borrows/register" ? "active" : ""
                }`}
              >
                Cadastro de Emprestimos
              </NavLink>
            </div>
          )}
          <div
            className="nav-link"
            onClick={() => toggleSubmenu("reserves")}
            style={{ cursor: "pointer" }}
          >
            <ReservationIcon /> Reservas
            {submenus.reserves ? (
              <ExpandLessIcon style={{ marginLeft: "auto" }} />
            ) : (
              <ExpandMoreIcon style={{ marginLeft: "auto" }} />
            )}
            </div>
            {submenus.reserves && (
            <div style={{ paddingLeft: "20px" }}>
              <NavLink
                as={Link}
                to="/reserves"
                className={`nav-link ${
                  location.pathname === "/reserves" ? "active" : ""
                }`}
              >
                Visualização de Reservas
              </NavLink>
              <NavLink
                as={Link}
                to="/reserves/register"
                className={`nav-link ${
                  location.pathname === "/reserves/register" ? "active" : ""
                }`}
              >
                Cadastro de Reservas
              </NavLink>
            </div>
          )}
        </Nav>
        <hr />
        <div className="sidebar-footer">
          <Button
            component={Link}
            to="/login"
            variant="contained"
            startIcon={<ExitToAppIcon />}
            style={{
              marginTop: "auto",
              textAlign: "center",
              background: "linear-gradient(to right, #b30000, #7a0000)",
              color: "white",
              width: "80%",
              justifyContent: "center",
            }}
          >
            Sair
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
