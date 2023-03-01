function tablaCsinal(){
    const tablacska =  document.getElementById("talba");
    const x = document.getElementById("de").value;
    const y = document.getElementById("nem").value;

    for (let sor_index = 0; sor_index < y; sor_index++) {
        const uj_tr = document.createElement("tr");
        for (let oszlop_index = 0; oszlop_index < x; oszlop_index++) {
            const uj_td = document.createElement("td");
            uj_tr.appendChild(uj_td);
        }
        tablacska.appendChild(uj_tr);
    }
}