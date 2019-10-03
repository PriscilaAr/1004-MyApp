import React from "react";
import './Placar.scss'

    
const Placar = ({time}) => {
    return (
    <div className="Placar">
        <h1>{time}</h1>
    </div>
    )
}

export default Placar;