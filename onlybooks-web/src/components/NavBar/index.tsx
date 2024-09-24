import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Sidebar from "../SideBar";
import "./style.css";

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        style={{
          width: "100%",
          background: "linear-gradient(to right, #b30000, #7a0000)",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleSidebar}
            style={{ width: "50px" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            OnlyBooks
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton color="inherit" style={{ width: "40px" }}>
              <AccountCircle />
            </IconButton>
            <Typography variant="body1" style={{ color: "white" }}>
              Nome do Usuário
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
    </>
  );
};

export default Navbar;
