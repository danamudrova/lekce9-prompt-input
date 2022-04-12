function vypocitej() {
    let cisloJedna = parseFloat(document.querySelector('input[name="cislo1"]').value);
    let cisloDve = parseFloat(document.querySelector('input[name="cislo2"]').value);

    return (cisloJedna + cisloDve);
}


function vypis(vysledek) {
    document.querySelector('#vysledek > span').innerHTML = vysledek;
}

function vypocitejVypis() {
    let vysledek = vypocitej();
    vypis(vysledek);
}

document.querySelectorAll('input').forEach((element) => {
    element.addEventListener('change', vypocitejVypis);
});