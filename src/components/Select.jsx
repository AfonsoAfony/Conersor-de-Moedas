import { useState } from "react";

function Select({onChange,name,id}){

   async function PreencherSelects (){
    const res= await fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
    const dados= await res.json()
    return dados;
  }

const [conjuntoRate,setConjuntoRate]=useState(["Banana,Arros,Maça"])

  PreencherSelects().then((res)=>{
    const rates=[res.rates];

    setConjuntoRate(Object.entries(rates[0]));

  })
  
    const [opcoes,setOpcoes]=useState(Array("USD", "AOA", "EUR", "EUR"));

  return (
    <select onChange={onChange} name={name} id={id} className="bg-white text-black rounded w-70 h-10 text-center my-4">
     {
    conjuntoRate.map((value,index)=>(
      <option key={index} value={value[0]}>
        {value[0]}
      </option>
    ))
  }

    </select>
  );
}

export default Select