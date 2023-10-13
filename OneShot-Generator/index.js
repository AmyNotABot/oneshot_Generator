
function w6Ergebnis(){
    let zahlenbitte = Math.floor(Math.random() * 6)
    let span = document.getElementById("span");
    span.innerHTML = zahlenbitte;
}

function w20Ergebnis(){
    let zahlenbitte = Math.floor(Math.random() * 20)
    let span = document.getElementById("span2");
    span.innerHTML = zahlenbitte;
}

function w100Ergebnis(){
    let zahlenbitte = Math.floor(Math.random() * 100)
    let span = document.getElementById("span3");
    span.innerHTML = zahlenbitte;
}

function randomListeHerkunft(){
    let zahlenbitte = Math.floor(Math.random() * 3);
    let span = document.getElementById("span4");
    if (zahlenbitte === 1) {span.innerHTML = "FREI"} else if (zahlenbitte === 2){span.innerHTML = "ANGESTELLT"} else {"SKLAVE"};
}

function randomListeJobs(){
    const possibleJobs = ["Bauer","Schuster","Barmaid","Ritter","Prostituierte","Schmied","Händler","Karavanenwache","Soldat","Priester","Mönch/Nonne","Pestdoktor","Wahrsagerin","Jäger", "Aristokrat"];
    let zahlenbitte = Math.floor(Math.random() * possibleJobs.length)
    let span = document.getElementById("span5");
    span.innerHTML = possibleJobs[zahlenbitte];
}

function randomListeLaster(){
    const possibleLaster = ["Spinnen", "Wasser/Ertrinken", "Zahl 13", "geschlossenen Räumen", "Menschenmengen", "Tod", "Puppen", "Dunkelheit", "Höhe", "Blut"];
    let zahlenbitte = Math.floor(Math.random() * possibleLaster.length)
    let span = document.getElementById("span6");
    span.innerHTML = possibleLaster[zahlenbitte];
}

// function randomListeFahrt(){
//     const possibleGründe = ["Flucht vor dem Gesetz", "Flucht vor der Vergangenheit", "Wirtschaftliche Gründe", "Familiäre Gründe", "Einfach Urlaub"];
//     let zahlenbitte = Math.floor(Math.random() * possibleGründe.length)
//     let span = document.getElementById("span8");
//     span.innerHTML = possibleGründe[zahlenbitte];
//}
