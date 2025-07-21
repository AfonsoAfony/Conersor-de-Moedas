import Conversor from "./Conversor";
import logao from '../assets/img/logao.png';
import mao from '../assets/img/mao.png';

function Header(){
    return(
        <div>
            
            <div id="cabecalho" className=" transicao">
                
                <div className="bg-black  opacity-70 h-20 transicao">
                     <div className="flex md:space-x-20 border-8 justify-between px-1 md:px-15 lg:px-35 transicao">
                            <div class=" w-0.1/3 transicao ">
                                <a href=""> <img src={logao} className=" w-24 md:w-28" alt="logo" /> </a>
                            </div>
                            <div class="  w-3/4 md:w-3/3 pt-4 transicao">
                                <ul class="list-none flex gap-2 md:gap-5 justify-end text-md md:text-lg lg:text-xl transicao text-blue-400 ">
                                    <li><a className="hover:text-gray-100 FontBitcount transicao" href="">Inicio</a></li> |
                                    <li><a className="hover:text-gray-100 FontBitcount transicao"  href="#conversor">Conversor</a></li> |
                                    <li><a className="hover:text-gray-100 FontBitcount transicao"  href="">Contactos</a></li> |
                                    <li><a className="hover:text-gray-100 FontBitcount transicao"  href="">Restrito</a></li> 
                                </ul>
                            </div>
                     </div>
                   
                </div>

                <div class="flex space-x-4 justify-between transicao">
                        <div class="w-3/3 transicao flex justify-center items-center " >
                            <h1 className="transicao text-4xl md:text-6xl lg:text-8xl">Conversor de Moedas</h1>
                        </div>
                        <div class="w-3/3 transicao *:flex justify-end">
                             <img src={mao} alt="mao" className="transicao pt-16 w-[100%]"/>
                               
                        </div>
                </div>

            </div>
        
        </div>
    )
}
export default Header;


/*
                 <div className="flex md:space-x-20 border-8 justify-between sm:px-2 md:px-10 transicao">
                            <div class="sm:w-00.1/3 md:px-25 transicao border-2">
                                <a href=""> <img src={logao} className="sm:w-21 md:w-24" alt="logo" /> </a>
                            </div>
                            <div class="sm:w-3/4 md:w-3/3 pt-4 transicao">
                                <ul class="list-none flex sm:gap-2 md:gap-5 justify-end sm:text-sm md:text-xl transicao text-blue-400 ">
                                    <li><a className="hover:text-gray-100 FontBitcount transicao" href="">Inicio</a></li> |
                                    <li><a className="hover:text-gray-100 FontBitcount transicao"  href="#conversor">Conversor</a></li> |
                                    <li><a className="hover:text-gray-100 FontBitcount transicao"  href="">Contactos</a></li> |
                                    <li><a className="hover:text-gray-100 FontBitcount transicao"  href="">Restrito</a></li> 
                                </ul>
                            </div>
                 </div>

*/ 