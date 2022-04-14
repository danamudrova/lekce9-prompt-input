function secti() {
    let cisloJedna = parseFloat(document.querySelector('input[name="cislo1"]').value);
    let cisloDve = parseFloat(document.querySelector('input[name="cislo2"]').value);

    return (cisloJedna + cisloDve);
}

function odecti() {
    let cisloJedna = parseFloat(document.querySelector('input[name="cislo1"]').value);
    let cisloDve = parseFloat(document.querySelector('input[name="cislo2"]').value);

    return (cisloJedna - cisloDve);
}

function vydel() {
    let cisloJedna = parseFloat(document.querySelector('input[name="cislo1"]').value);
    let cisloDve = parseFloat(document.querySelector('input[name="cislo2"]').value);

    return (cisloJedna/cisloDve);
}

function vynasob() {
    let cisloJedna = parseFloat(document.querySelector('input[name="cislo1"]').value);
    let cisloDve = parseFloat(document.querySelector('input[name="cislo2"]').value);

    return (cisloJedna*cisloDve);
}

function vypis(vysledek) {
    document.querySelector('#vysledek').innerHTML = vysledek;
}

function vypocitejVypis() {
    let soucet = document.querySelector('input[name="scitani"]')
    let odecet = document.querySelector('input[name="odcitani"]')
    let deleni = document.querySelector('input[name="deleni"]')
    let nasobeni = document.querySelector('input[name="nasobeni"]')

    if (soucet.checked){
        vypis(secti())
    } 
    if (odecet.checked){
        vypis(odecti())
    }
    if (deleni.checked){
        vypis(vydel())
    }
    if (nasobeni.checked){
        vypis(vynasob())
    }

}

document.querySelectorAll('input[type=radio]').forEach((element) => {
    element.addEventListener('change', vypocitejVypis);
});
