import React from "react";
import Card from "../Card";
import "./Lista.css";

function Lista(props) {
    console.log(props);
    return ( 
        <div className="card">
            {props.data.map((item, index) => {
                return (<>
                <div className="cuadrado">
                    <h2>{item.name}</h2>

                    <Card name={item.name} url={item.sprites.front_default} type={item.types[0].type.name}/>
                </div>
                </>
                )
            })}
        </div>
    )
}

export default Lista;