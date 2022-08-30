import "./widget.scss";

import axios from 'axios';
import { useState, useEffect } from "react";





const Widget =  () => {

  const [divida, setdivida] = useState();

  useEffect(() => {
    const getTotal = async () => {
      try{
        const res = await axios.get("http://localhost:4567/total")
        setdivida(res.data)      
      }catch(err){console.log(err)}
    }
    getTotal()
  }, [])

 


    return (
        <div className="widget">
          {divida?.map((user, key)=>{
            return (
          <div key={key} className="left">
          <span className="title">Dividas</span>
          <span  className="counter">{user?.totalvalor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
          </div>
          )
          
          })}
        </div>
    )
};

export default  Widget;