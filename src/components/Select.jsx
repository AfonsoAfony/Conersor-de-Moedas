import { useState } from "react";

function Select({onChange,name,id,label,Labelpara}){

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
  
  return (
    <div className="flex flex-col bg-gray-900 rounded my-1 px-2 py-1">
    <label htmlFor={Labelpara} className="sm:text-4xl text-md text-start  text-gray-300">{label}</label>
    <select onChange={onChange} name={name} id={id} className="w-200 sm:h-20 lg:h-15 sm:text-5xl lg:text-2xl text-start  bg-gray-900 text-white rounded w-70 h-7">
     {
    conjuntoRate.map((value,index)=>(
      <option key={index} value={value[0]}>
        {value[0]}
      </option>
    ))
  }

    </select>
    </div>
  );
}

export default Select