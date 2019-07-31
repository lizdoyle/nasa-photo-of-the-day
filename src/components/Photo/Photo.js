import React, {useState, useEffect} from "react";

import axios from "axios";


function Photo() {

const {photo, setPhoto} = useState([]);

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
            <div className="photos">
                <img src={photo} />

            </div>


        )
}

export default Photo