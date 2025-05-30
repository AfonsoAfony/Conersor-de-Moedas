import React, {useState,useEffect} from "react";
import Select from "./Select";
import { ArrowUpDown } from "lucide-react";



function Conversor(){

    let [quantia, setQuantia]= useState(1)
    let [daMoeda, setDaMoeda]=useState(`USD`)
    let [paraMoeda, setParaMoeda]=useState(`USD`)
    let [ValorDaMoeda, setValorDaMoeda ]=useState(1)

    useEffect(()=>{
const fetchApiExchangeRate=async()=>{
    const res=await fetch(`https://api.exchangerate-api.com/v4/latest/${daMoeda}`)
    const data=await res.json()
   
    setValorDaMoeda(data.rates[paraMoeda])
    
}
fetchApiExchangeRate();
})

function alternarDadosDosSelcts(){
    const de=document.querySelector("#de").value
    const para=document.querySelector("#para").value
   
    document.querySelector("#de").value=para;
    document.querySelector("#para").value=de
    
    setDaMoeda(para)
    setParaMoeda(de)
}
    return (
        
        <div className="flex flex-col items-center">
        <div className=" bg-gray-700 rounded px-2 py-2 flex flex-col ">

            <Select Labelpara="de" label="Converter de:" damoeda={daMoeda} onChange={(e) => setDaMoeda(e.target.value)} name="de" id="de" />
            <div className=" z-0 flex h-1 justify-center">
                 <div className="bg-black-100 -my-8 py-9 px-3 rounded-4xl  bg-gray-700">
                   <ArrowUpDown onClick={alternarDadosDosSelcts} className="-my-5 justify-center py-1 text-cyan-500 cursor-pointer bg-gray-900 w-13 h-10 rounded-4xl"/>
                </div>
            </div>
            
            <Select Labelpara="para" label="Para:" onChange={(e)=>setParaMoeda(e.target.value)} name="para" id="para"/>
                  
        </div>
           
            <input type="number" value={quantia} onChange={(e) => setQuantia(e.target.value)} className="sm:w-110 sm:h-15 sm:text-4xl bg-gray-500 text-white text-lg rounded-2xl w-100 h-10 text-center my-5" placeholder="Digite o valor:" />
        <h3  className="sm:text-4xl"><span className="text-xl sm:text-4xl text-cyan-500 font-bold">{quantia*ValorDaMoeda}</span> {paraMoeda}</h3>
        </div>
    )
}
export default Conversor