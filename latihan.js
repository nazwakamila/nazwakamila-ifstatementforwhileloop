console.log("Menggunakan loop FOR:");
for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " adalah angka genap.");
    } else {
        console.log(i + " adalah angka ganjil.");
    }
}


console.log("Menggunakan loop WHILE:");
var j = 1;
while (j <= 10) {
    if (j % 2 === 0) {
        console.log(j + " adalah angka genap.");
    } else {
        console.log(j + " adalah angka ganjil.");
    }
    j++;
}
