import React, {useState, useEffect} from "react";

import axios from "axios";


function CardInfo() {

    const [title, setTitle] = useState("");
    const [copyright, setCopyright] = useState("");
    const [date, setDate] = useState("");
    const [explanation, setExplanation] = useState("");


    

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(result => {
                 result.data.url;
                  console.log(result, photo)} )
            .then(res => { 
                res.data.title
            })
           
            .catch(err => {

                
                console.log(err)
                })



        }, [])


    return (
        <>

        </>

    )
}

export default CardInfo