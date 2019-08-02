import React, {useState} from "react";

import Photo from "./components/Photo/Photo"
import CardInfo from "./components/CardInfo/CardInfo";

function NasaCard() {
    const [card, setCard] = useState('');



    return (
        <div className="ApodCard">
        <Photo />
        <CardInfo />
        </div>


    )
}





export default ApodCard;