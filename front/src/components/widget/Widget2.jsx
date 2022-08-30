import axios from 'axios'
import { useEffect, useState } from "react";
import "./widget.scss";

const Widget2 = () => {

  const [contato, setcontato] = useState();

  useEffect(() => {
    const getTotal = async () => {
      try{
        const res = await axios.get("http://localhost:4567/totalcpca")
        setcontato(res.data)      
      }catch(err){console.log(err)}
    }
    getTotal()
  }, [])

    return (
        <div className="widget">

          {contato?.map((user, key)=>{
            return (
              <div key={key} className="left">
              <span className="title">CPCA</span>
              <span className="counter">{user?.totalcpca}</span>
              </div>
            )
          })}
          
        </div>
    )
};

export default Widget2;