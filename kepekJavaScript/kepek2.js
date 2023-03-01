function kepCsere(nem){
    document.getElementById("iksz").src = nem.value;
}

function meretezes(){
    document.getElementById("iksz").width = document.getElementById("szelessegValt").value;
    document.getElementById("iksz").height = document.getElementById("magassagValt").value;
}


function effektek(de){
    if(de.parentElement.id == "ujFilterek"){
        document.getElementById("iksz").style.filter += de.value;
        document.getElementById("ujKivalasztott").appendChild(de);
    }
    else if(de.parentElement.id == "ujKivalasztott"){
        document.getElementById("iksz").style.filter = document.getElementById("iksz").style.filter.replace(de.value, '');
        document.getElementById("ujFilterek").appendChild(de);
    }
}
