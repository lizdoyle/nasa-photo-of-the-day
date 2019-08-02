import React from "react";

import "./cardinfo.scss";




function CardInfo(props) {

    
        console.log(props.title);

    return (
        <div>
            <div className="cardHeader">
                <h3>{props.title} </h3>
                <h4>{props.date}</h4>
            </div>
            <img src={props.url} />
            <div className="cardBody">
                <p>{props.explanation}</p>
            </div>
            <div className="cardCopy">
                <p>Copyright: {props.copyright}</p>
            </div>
        </div>
        

    )
}

export default CardInfo