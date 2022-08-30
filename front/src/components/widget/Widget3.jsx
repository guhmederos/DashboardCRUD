import axios from "axios";
import { useEffect, useState } from "react";
import "./widget.scss";

const Widget3 = () => {

  const [promessas, setpromessas] = useState();

  useEffect(() => {
    const getTotal = async () => {
      try{
        const res = await axios.get("http://localhost:4567/totalpp")
        setpromessas(res.data)      
      }catch(err){console.log(err)}
    }
    getTotal()
  }, [])

    return (
        <div className="widget">
          
          {promessas?.map((user, key)=>{
            return (
              <div key={key} className="left">
              <span className="title">CPCA</span>
              <span className="counter">{user?.totalpp}</span>
              </div>
            )
          })} 
        </div>
    )
};

export default Widget3;