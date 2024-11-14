window.onload = init;
//Sivun uudelleenlatauksella tyhjennys
function init(){
    document.getElementById("userId2").value = "";
    document.getElementById("salasana2").value = "";
    document.getElementById("nimi2").value = "";
    document.getElementById("osoite2").value = "";
    document.getElementById("postiNum2").value = "";
    document.getElementById("sahkoposti2").value = "";
    document.getElementById("lisatieto2").value = "";

    var temp = "(Valitse Maa)";
    var mySelect = document.getElementById('maat2');

    for(var i, j = 0; i = mySelect.options[j]; j++) {
        if(i.value == temp) {
            mySelect.selectedIndex = j;
            break;
        }
    }
    var ele = document.getElementById("mies2");
    var ele2 = document.getElementById("nainen2");
    ele.checked = false;
    ele2.checked = false;
    var ele3 = document.getElementById("suomi2");
    var ele4 = document.getElementById("muukieli2");
    ele3.checked = false;
    ele4.checked = false;
}
//"Lähetä" napin painettua alkaa funktiot täältä
function validoiLomake(event){    
    event.preventDefault();
    virheIlmoitusId2()
}
//KäyttäjäID osio
function virheIlmoitusId2(){    
    var syottoId = document.getElementById("userId2").value;

    if (syottoId == ""){
        document.getElementById("wrongId").innerHTML = "Kenttää ei saa jättää tyhjäksi";
        var color1 = document.getElementById("userId2");
        color1.style.borderColor="red";
        color1.placeholdercolor="red";
    }
    else if (syottoId.length < 6){
        document.getElementById("wrongId").innerHTML = "ID:n oltava vähintään 6 merkkiä pitkä";
        var color1 = document.getElementById("userId2");
        color1.style.borderColor="red";
        color1.placeholdercolor="red";
    }
    else {
        document.getElementById("wrongId").innerHTML = "";
        var color1 = document.getElementById("userId2");
        color1.style.borderColor="black";
        color1.placeholdercolor="black";
    }
    virheIlmoitusSs()
}
function virheIlmoitusSs(){
    var syottoSs = document.getElementById("salasana2").value;
    var re = /^(?=.*\d)(?=.*[!@£$€&%#]+)(?=.*[A-Z]).{6,}$/; //(?=.[a-z]) pois, AZ:n edessä

    if(syottoSs == ""){        
        document.getElementById("wrongPW").innerHTML = "Kenttää ei saa jättää tyhjäksi";
        var color1 = document.getElementById("salasana2");
        color1.style.borderColor="red";
        color1.placeholdercolor="red";
    }
    else if (re.test(syottoSs)){ /*OR number OR capital letter A-Z*/        
        document.getElementById("wrongPW").innerHTML = "";
        var color1 = document.getElementById("salasana2");
        color1.style.borderColor="black";
        color1.placeholdercolor="black";
    }
    else {        
        document.getElementById("wrongPW").innerHTML = 'Salasanan tulee olla vähintään 6 merkkiä pitkä ja sisältää vähintään yksi numero, yksi iso kirjain ja joku erikoismerkeistä "!@£$€&%#" ';
        var color1 = document.getElementById("salasana2");
        color1.style.borderColor="red";
        color1.placeholdercolor="red";
    }
    virheIlmoitusNimi()
}
function virheIlmoitusNimi(){ /*Kysy erikseen tarvitseeko tarkistaa nimessä erikoismerkit ja numerot myöhemmin*/
    var syottoNimi = document.getElementById("nimi2").value;
    
    if(syottoNimi == ""){        
        document.getElementById("wrongNimi").innerHTML = "Kenttää ei saa jättää tyhjäksi";
        
        var color1 = document.getElementById("nimi2");
        color1.style.borderColor="red";
        color1.placeholdercolor="red";
    }
    else {
        document.getElementById("wrongNimi").innerHTML = "";
        var color1 = document.getElementById("nimi2");
        color1.style.borderColor="black";
        color1.placeholdercolor="black";
    }
    virheIlmoitusOsoite() 
    /*else if (isNumeric.test(syottoNimi)){

        document.getElementById("wrongNimi").innerHTML = "Syötä vain kirjaimia";
        var color1 = document.getElementById("nimi2");
        color1.style.borderColor="red";
        color1.placeholdercolor="red";
    }*/
}
function virheIlmoitusOsoite(){ /*Kysy erikseen tarvitseeko tarkistaa osoitteessa erikoismerkit ja numerot myöhemmin*/    
    var syottoOsoite = document.getElementById("osoite2").value;
    
    if(syottoOsoite == ""){
        document.getElementById("wrongOsoite").innerHTML = "Kenttää ei saa jättää tyhjäksi";
        var color1 = document.getElementById("osoite2");
        color1.style.borderColor="red";
        color1.placeholdercolor="red";
    }
    else {
        document.getElementById("wrongOsoite").innerHTML = "";
        var color1 = document.getElementById("osoite2");
        color1.style.borderColor="black";
        color1.placeholdercolor="black";
    }
    virheIlmoitusMaa()
}
function virheIlmoitusMaa(){ /*Toimii? No, lisää sitten myöhemmin, hyvä juttu vaan*/

    var syottoMaa = document.getElementById("maat2");

    var syottoMaa2 = syottoMaa.options[syottoMaa.selectedIndex].value;

    if(syottoMaa2 == "(Valitse Maa)"){        
        document.getElementById("wrongMaa").innerHTML = "Valitse maa";
        var color1 = document.getElementById("maat2"); /*P ok, mutta tyhjää tilaa edessä*/
        color1.style.borderColor="red";
        color1.placeholdercolor="red";
    }
    else {
        document.getElementById("wrongMaa").innerHTML = "";
        var color1 = document.getElementById("maat2");
        color1.style.borderColor="black";
        color1.placeholdercolor="black";
    }    
    virhePostiNumero()
} 
function virhePostiNumero(){ /*käyttää regex:iä, koska vain numeroita! Pitää olla 5 numeroa*/
    
    var syottoNumero = document.getElementById("postiNum2").value;
    
    if(syottoNumero == ""){        
        document.getElementById("wrongPostNum").innerHTML = "Kenttää ei saa jättää tyhjäksi";
        var color1 = document.getElementById("postiNum2");
        color1.style.borderColor="red";
        color1.placeholdercolor="red";
    }

    else if(isNaN(syottoNumero)){
        document.getElementById("wrongPostNum").innerHTML = "Syötä vain numeroita";
        var color1 = document.getElementById("postiNum2");
        color1.style.borderColor="red";
        color1.placeholdercolor="red";
    }
    
    else if(syottoNumero.length > 5 || syottoNumero.length < 5){        
        document.getElementById("wrongPostNum").innerHTML = "Postinumerossa tulee olla 5 numeroa";
        var color1 = document.getElementById("postiNum2");
        color1.style.borderColor="red";
        color1.placeholdercolor="red";
    }
    else {
        document.getElementById("wrongPostNum").innerHTML = "";
        var color1 = document.getElementById("postiNum2");
        color1.style.borderColor="black";
        color1.placeholdercolor="black";
    }
    virheSahkoPosti()
}
function virheSahkoPosti(){ /* h-t-t-ps://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript */

    var syottoSposti = document.getElementById("sahkoposti2").value;
    var emailTestaaja = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(syottoSposti == ""){
        document.getElementById("wrongSposti").innerHTML = "Kenttää ei saa jättää tyhjäksi";
        var color1 = document.getElementById("sahkoposti2");
        color1.style.borderColor="red";
        color1.placeholdercolor="red";
    }
    else if (!emailTestaaja.test(syottoSposti)){
        document.getElementById("wrongSposti").innerHTML = "Virheellinen email osoite";
        var color1 = document.getElementById("sahkoposti2");
        color1.style.borderColor="red";
        color1.placeholdercolor="red";
    }
    else {
        document.getElementById("wrongSposti").innerHTML = "";
        var color1 = document.getElementById("sahkoposti2");
        color1.style.borderColor="black";
        color1.placeholdercolor="black";
    }
    virheSukupuoli()

}
function virheSukupuoli(){
    var syottoMies = document.getElementById("mies2");
    var syottoNainen = document.getElementById("nainen2");

    if (syottoMies.checked == false && syottoNainen.checked == false){
        document.getElementById("wrongSukupuoli").innerHTML = "Valitse sukupuoli";

        var color1 = document.getElementById("mies2");
        var color2 = document.getElementById("nainen2");

        color1.style.accentColor="red";
        color2.style.accentColor="red";
    }
    else {
        document.getElementById("wrongSukupuoli").innerHTML = "";
        var color1 = document.getElementById("mies2");
        var color2 = document.getElementById("nainen2");
        color1.style.accentColor="blue";
        color1.placeholdercolor="blue";
        color2.style.accentColor="blue";
        color2.placeholdercolor="blue";
    }
    virheIlmoitusKieli()
}
function virheIlmoitusKieli(){
    var syottoSuomi = document.getElementById("suomi2");
    var syottoMuuKieli = document.getElementById("muukieli2");

    if (syottoSuomi.checked == false && syottoMuuKieli.checked == false){
        document.getElementById("wrongKieli").innerHTML = "Valitse kieli"; /*vitun vitut senköö*/

        var color6 = document.getElementById("suomi2");
        var color7 = document.getElementById("muukieli2");

        color6.style.accentColor="red";
        color7.style.accentColor="red";
    }
    else {
        document.getElementById("wrongKieli").innerHTML = "";
        var color6 = document.getElementById("suomi2");
        var color7 = document.getElementById("muukieli2");

        color6.style.accentColor="blue";
        color6.placeholdercolor="blue";
        color7.style.accentColor="blue";
        color7.placeholdercolor="blue";

    }
}