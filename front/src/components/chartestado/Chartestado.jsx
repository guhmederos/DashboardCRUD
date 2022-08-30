import axios from "axios";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import _ from 'lodash';


export const data = [
    ["Estado", "clientes"],
    ["Acre", 111],
    ["Alagoas", 200],
    ["Amapá", 222],
    ["Amazonas", 70],
    ["Bahia", 400],
    ["Ceara", 111],
    ["Distrito Federal", 200],
    ["Espirito Santo", 140],
    ["Goias", 70],
    ["Maranhao", 70],
    ["Minas Gerais", 23],
    ["Mato Grosso", 80],
    ["Mato Grosso do Sul", 7],
    ["Para", 7],
    ["Paraiba", 7],
    ["Pernambuco", 7],
    ["Piaui", 7],
    ["Parana", 350],
    ["Rio de Janeiro", 500],
    ["Rio Grande do Norte", 7],
    ["Rio Grande do Sul", 7],
    ["Rondonia", 7],
    ["Roraima", 7],
    ["Santa Catarina", 200],
    ["Sergipe", 7],
    ["Sao Paulo", 730],
    ["Tocantins", 79],
   
  ];
  
  export const options = {
    title: "Clientes por região do Brasil",
  };

const Chartestados = () => {

  const [sul, setsul] = useState();
  const [sudeste, setsudeste] = useState();
  const [centroOeste, setcentroOeste] = useState();
  const [nordeste, setnordeste] = useState();
  const [norte, setnorte] = useState();
  const [estados, seteestados] = useState();
  const [chartData, setChartData] = useState([]);

  const loadData = (estados) => {
    const valuessul = _.groupBy(sul, (value) => value);
    const valuescentroOeste = _.groupBy(centroOeste, (value) => value);
    const valuesnordeste = _.groupBy(nordeste, (value) => value);
    const valuessudeste = _.groupBy(sudeste, (value) => value);
    const valuesnorte = _.groupBy(norte, (value) => value); 

    const sulnmr = _.map(sul, "estadossul")
    const sudestenmr = _.map(sudeste, "estadossudeste")
    const centroOestenmr = _.map(centroOeste, "estadoscentrooeste")
    const nortenmr = _.map(norte, "estadosdonorte")
    const nordestenmr = _.map(nordeste, "estadosdonordeste")

 
    //_.values(estadossul)
   
    return [
        ["Estados", "clientes"], 
        ["Sul", sulnmr], //5289  
        ["Sudeste", sudestenmr], //8382
        ["Centro Oeste", centroOestenmr], //4646
        ["Nordeste", nordestenmr], // 10477
        ["Norte", nortenmr] //5141
        
]

};      
  useEffect(() => {
    const getTotal = async () => {
      try{
        const res1 = await axios.get("http://localhost:4567/estadosul");
        setsul(res1.data);
        const res2 = await axios.get("http://localhost:4567/estadosudeste");
        setsudeste(res2.data);
        const res3 = await axios.get("http://localhost:4567/estadosnorte");
        setnorte(res3.data);
        const res4 = await axios.get("http://localhost:4567/estadosnodeste");
        setnordeste(res4.data);
        const res5 = await axios.get("http://localhost:4567/estadoscentrooeste");
        setcentroOeste(res5.data);
        const res6 = await axios.get("http://localhost:4567/");
        seteestados(res6.data);
        setChartData(loadData(estados)); 
                      
      }catch(err){console.log(err)}
    }
    getTotal();
     
  }, [])

      return (
        <div className="chartestados">
           <Chart
      chartType="PieChart"
      data={chartData}
      options={options}
      width={"100%"}
      height={"400px"}
    />
        </div>
    )
};


export default Chartestados;