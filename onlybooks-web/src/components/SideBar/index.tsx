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

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const location = useLocation();
  const [submenuOpen, setSubmenuOpen] = useState(false); // Estado para controlar o submenu

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
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
            onClick={toggleSubmenu}
            style={{ cursor: "pointer" }}
          >
            <BookIcon /> Livros{" "}
            {submenuOpen ? (
              <ExpandLessIcon style={{ marginLeft: "auto" }} />
            ) : (
              <ExpandMoreIcon style={{ marginLeft: "auto" }} />
            )}
          </div>
          {submenuOpen && (
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
          <NavLink
            as={Link}
            to="/borrows"
            className={`nav-link ${
              location.pathname === "/borrows" ? "active" : ""
            }`}
          >
            <LoanIcon /> Empréstimos
          </NavLink>
          <NavLink
            as={Link}
            to="/reserve"
            className={`nav-link ${
              location.pathname === "/reserve" ? "active" : ""
            }`}
          >
            <ReservationIcon /> Reservas
          </NavLink>
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
