function miertNe(){
    const oszlopSzam = document.getElementById("oszlop").value;
    const tr_uj = document.createElement("tr");
    document.getElementById("tablaEgy").appendChild(tr_uj);
    for(i = 0; i < oszlopSzam; i++){
        const td_uj = document.createElement("td");
        tr_uj.appendChild(td_uj);
    }
}

function miertDe(){
    const tabla = document.getElementById("tablaKetto");
    const szam = document.getElementById("sor").value;

    for(i=0; i<szam; i++){
        const tr_uj = document.createElement("tr");
        for(j=0; j<szam; j++){
            const td_ke = document.createElement("td");
            tr_uj.appendChild(td_ke);
        }
        tabla.appendChild(tr_uj);
    }
}

function oszlopAd(){
   const szam = document.getElementById("oszlopAd").value;
   const tabla = document.querySelectorAll("tr");

   for(i = 0; i < szam; i++){
    const uj_td = document.createElement("td");
    tabla[i].appendChild(uj_td);
   }
}

function Szinez(){
    const SzinezTabla = document.getElementById("tablaKetto");
    //const szelektor_sora = `td:nth-child(${2}n+${1})`;
    //const Szinez_cella = document.querySelectorAll(szelektor_sora);
    const Szinez_cella = document.querySelectorAll("td");
    for(i=0; i< Szinez_cella.length; i++){
        if(i%2==0){
            Szinez_cella[i].style.backgroundColor = "blue";
        }
    }
}

function kepBerak(){
    const cellak = document.querySelectorAll("td");

    for(i=0;i<cellak.length;i++){
        if(i%2==1){
            const kep = document.createElement("img");
            kep.src = "nem.jpg";
            cellak[i].appendChild(kep);
        }

    }
}

function atHelyez(de){
    const tbalacska = document.getElementById("tablaKetto");
    const oszlopka = document.createElement("tr");
    oszlopka.appendChild(de);
    tbalacska.appendChild(oszlopka);
}

