import React from "react";
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import TodayIcon from '@mui/icons-material/Today';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">Grupo <br/>Serv!ces</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                  <li>
                    <TodayIcon />
                    <span>DashBoard Dia</span>
                    </li>
                  <li>
                    <QueryBuilderIcon />
                    <span>DashBoard Hora</span>
                    </li>
                  
                </ul>
            </div>
           
        </div>
    )
};


export default Sidebar;