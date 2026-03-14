//loop while
let angka = [10,20,30,40];
let i = 0;
    while (i < angka.length) {
        console.log(angka[i]);
        i++;
    }
//loop foreach
let nama = ['budi','ani','siti','joko'];
nama.forEach(function(item, index){
    console.log(`index ${index}: ${item}`);
});

// for of
for(let item of angka){
    console.log(item);
}