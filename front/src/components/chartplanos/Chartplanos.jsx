import axios from "axios";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import _ from 'lodash';



export const data = [
  ["Planos", "Numeros"],
  ["CONTROLE", 1000],
  ["POS_PURO", 700],
  ["WTTX", 500],
  ["FIXO", 400],
  ["OLD", 1000], // CSS-style declaration
];


export const options = {
  title: "PLANOS",
  pieHole: 0.4,
  is3D: false,
};

const Chartplanos = () => {
  const [planos, setplanos] = useState();
  const [chartData, setChartData] = useState([]);
  
  

  const loadData = (planos) => {
      const values = _.groupBy(planos, (value) => value.PRODUTO);
      
   return  [
    ["Planos", "Numeros"],
    ["CONTROLE", values.CONTROLE?.length],
    ["FIXO", values.FIXO?.length],
    ["OUTROS", values.OUTROS?.length],
    ["POS_PURO", values.POS_PURO?.length],
    ["WEB", values.WEB?.length],
    ["WTTX", values.WTTX?.length],
    ["old", values.old?.length]
  ];
   
  };

  useEffect(() => {
    const getTotal = async () => {
      try{
        const res = await axios.get("http://localhost:4567/")
        setplanos(res.data) 
        setChartData(loadData(planos)) 
       
                
      }catch(err){console.log(err)}
    }
    getTotal();
     
  }, [])
       
    return (
        <div>
            <Chart
      chartType="PieChart"
      data={chartData}
      options={options}
      width="100%"
      height="400px"
      
    />
        </div>
    )
    
};

export default Chartplanos;