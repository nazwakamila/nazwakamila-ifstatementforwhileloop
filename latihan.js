// Program untuk memeriksa apakah suatu angka adalah bilangan prima menggunakan loop FOR
function cekBilanganPrimaFor(angka) {
    if (angka <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(angka); i++) {
        if (angka % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("Menggunakan loop FOR:");
for (var angka = 1; angka <= 20; angka++) {
    if (cekBilanganPrimaFor(angka)) {
        console.log(angka + " adalah bilangan prima.");
    } else {
        console.log(angka + " bukan bilangan prima.");
    }
}

// Program untuk memeriksa apakah suatu angka adalah bilangan prima menggunakan loop WHILE
function cekBilanganPrimaWhile(angka) {
    if (angka <= 1) {
        return false;
    }
    var pembagi = 2;
    while (pembagi <= Math.sqrt(angka)) {
        if (angka % pembagi === 0) {
            return false;
        }
        pembagi++;
    }
    return true;
}

console.log("Menggunakan loop WHILE:");
var angkaWhile = 1;
while (angkaWhile <= 20) {
    if (cekBilanganPrimaWhile(angkaWhile)) {
        console.log(angkaWhile + " adalah bilangan prima.");
    } else {
        console.log(angkaWhile + " bukan bilangan prima.");
    }
    angkaWhile++;
}
