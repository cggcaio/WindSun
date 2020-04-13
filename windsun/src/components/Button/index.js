import React from "react";
import { Texto, Botao } from "./styles";



const Button = ({title}) => (
    <Botao> 
        <Texto> {title} </Texto>
    </Botao>    
);

export default Button;
