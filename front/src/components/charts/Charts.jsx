import {useEffect, useState } from "react";

import axios from "axios";
import "./charts.scss";
import { Chart } from "react-google-charts";
import _ from 'lodash';

export const data = [
    ["Dia", "Ligacoes"],
    ["01/04/2019 até 09/04/2019", 1205],
    ["10/04/2019 até 19/04/2019", 2370],
    ["20/04/2019 até 30/04/2019", 4560],
    
  ];
  
  export const options = {
    chart: {
      title: "ALO",
      subtitle: "Ligações realizadas no mes de abril",
    },
  };

const Charts = () => {

  const [ligacaoA, setligacaoA] = useState();
  const [ligacaoB, setligacaoB] = useState();
  const [ligacaoC, setligacaoC] = useState();
  const [chartData, setChartData] = useState([]);
  
  

  const loadData = () => {
      const valueA = ligacaoA;
      const valueB = ligacaoB;
      const valueC = ligacaoC;


      const ligacaoUm = _.map(valueA, "ligacaoum")
      const ligacaoDois = _.map(valueB, "ligacaodois")
      const ligacaoTres = _.map(valueC, "ligacaotres")
      
      
   return  [
    ["Dia", "Ligacoes"],
    ["01/04/2019 até 04/04/2019", ligacaoUm],
    ["05/04/2019 até 10/04/2019", ligacaoDois],
    ["11/04/2019 até 15/04/2019", ligacaoTres],
   ]
  };
 
  useEffect(() => {
    const getTotal = async () => {
      try{
        const res = await axios.get("http://localhost:4567/ligacaoum")
        const ress = await axios.get("http://localhost:4567/ligacaodois")
        const resss = await axios.get("http://localhost:4567/ligacaotres")
        setligacaoA(res.data) 
        setligacaoB(ress.data) 
        setligacaoC(resss.data) 
        setChartData(loadData()) 

                
      }catch(err){console.log(err)}
    }
    getTotal();
     
  }, [])
    return (
              <div className="chart">
      <Chart
      chartType="Bar"
      width="100%"
      height="200px"
      data={data}
      options={options}
    />
              </div>


    )
};


export default Charts;