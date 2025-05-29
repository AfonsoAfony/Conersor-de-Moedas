import React, {useState,useEffect} from "react";
import Select from "./Select";



function Conversor(){

    let [quantia, setQuantia]= useState(1)
    let [daMoeda, setDaMoeda]=useState(`USD`)
    let [paraMoeda, setParaMoeda]=useState(`AOA`)
    let [ValorDaMoeda, setValorDaMoeda ]=useState(1)

    useEffect(()=>{
const fetchApiExchangeRate=async()=>{
    const res=await fetch(`https://api.exchangerate-api.com/v4/latest/${daMoeda}`)
    const data=await res.json()
   
    setValorDaMoeda(data.rates[paraMoeda])
    
}
fetchApiExchangeRate();
})


    return (
        
        <div className="flex flex-col items-center">
        
            <label htmlFor="de" className="text-xl">Converter de:</label>
            <Select damoeda={daMoeda} onChange={(e) => setDaMoeda(e.target.value)} name="de" id="de" />

            <label htmlFor="para" className="text-xl">Para:</label>
            <Select onChange={(e)=>setParaMoeda(e.target.value)} name="para" id="para"/>
            
            <input type="number" value={quantia} onChange={(e) => setQuantia(e.target.value)} className=" bg-white text-black rounded w-120 h-10 text-center my-5" placeholder="Digite o valor:" />
        <h3><span className="text-xl text-green-600 ">{quantia*ValorDaMoeda}</span> {paraMoeda}</h3>
        </div>
    )
}
export default Conversor