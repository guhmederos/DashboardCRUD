import React from "react";
import "./navbar.scss";
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
    return (
          <div className="navbar">
            <div className="iconmenu">
               <MenuIcon />
            </div>
            <div className="logout">
            <LogoutIcon />
            <span>Sair</span>
            </div>
          </div>
    )
};

export default Navbar;