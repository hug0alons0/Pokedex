import React from "react";
import "./Card.css";

function Card (props){
  console.log(props);

    return (
      <div className="tarjeta">
        <img className="imgpoke"
          src={props.url} //Sólo nombre de props declaradas en List, dentro del Componente Card
          alt={props.name}
        />
        <p>{props.name}</p>
        <p>{props.type}</p>
      </div>
    );
  }



export default Card;
