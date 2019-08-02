import React, {useState, useEffect} from "react";

import "./nasacard.scss";

import axios from "axios";



import CardInfo from '../CardInfo/CardInfo';

function NasaCard() {
    // console.log(NasaCard);
    const [info, setInfo] =useState('');

    console.log(info);
    // const title = setTile(result.data.title);

    
    

    useEffect(() => {
        // setInfo = ([]);

        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(result => {setInfo(result.data) })

            .catch(err => { console.log(err) })

        }, [])
        console.log(info.title);


    return (
        
        <div className="NasaCard" >
            {info ?
                <CardInfo 
                title={info.title} 
                date={info.date} 
                hdurl={info.hdurl} 
                explanation={info.explanation} 
                copyright={info.copyright}
                /> : <div> Loading </div>}
        </div>


    )
}





export default NasaCard;