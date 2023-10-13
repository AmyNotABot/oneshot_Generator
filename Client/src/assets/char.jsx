import React, { useState } from "react";
import Dices from "./würfel";



function Char(){
    const [charData, setCharData] = useState([]);
    const [charName, setCharName] = useState("Nemo");
    const [charStatus, setCharStatus] = useState("");
    const [charProfession, setCharProfession] = useState("");
    const [charFear, setCharFear] = useState("Wasser");

    function randomize() {
        console.log("Erdbeerkäse");
                fetch("http://localhost:8080/randomize", {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        method: "POST",
                        body: JSON.stringify()
                    }).then((response) => {
                        return response.json();
                }).then((charData) => {
                    console.log(charData)
                    setCharStatus(charData.status); 
                    setCharProfession(charData.job); 
                    setCharFear(charData.fears)
                });
            };




    return(

<div className="charContainer">
    <div>
<ul>
    <li>
    <>Name: </><input id="charName" type="text" onChange={(e) => setCharName(e.target.value)}></input>
    </li>
    <li>
        <p>FREIHEITSSTATUS:{charStatus}</p>
    </li>
    <li>
        <p>BERUF: {charProfession}</p>
    </li>
    <li><p>HAT ANGST VOR: {charFear}</p></li>
</ul>
<button type="button" id="submitButton" onClick={randomize}>Randomize!</button>
</div>
</div>)}

export default Char;