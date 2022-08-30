import axios from "axios";
import React from "react";
import Chartestados from "../../components/chartestado/Chartestado";
import Chartplanos from "../../components/chartplanos/Chartplanos";
import Charts from "../../components/charts/Charts";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Widget2 from "../../components/widget/Widget2";
import Widget3 from "../../components/widget/Widget3";
import "./home.scss";




const Home = () => {
    return (
         <div className="home">
  
          <Sidebar />
          <div className="homeContainer">
            <Navbar />
            <div className="fundo">
            <div className="widgets">
            <Widget />
            <Widget2 />
            <Widget3 />
            
            </div>
            <div className="charts">
               <Charts />
               <Chartestados />
               <Chartplanos />
            </div>
            </div>
          </div>
         </div>
    )
};


export default Home;