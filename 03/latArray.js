Array.prototype.tampil = function(){
    console.log(this.join("~"));
}
let warna = ['merah','biru','hijau'];
warna.tampil(1);

let buah = ['mangga','apel','jeruk'];
buah.push('Jambu');
buah.pop();
buah.unshift('melon');
console.log(buah);

//menggabungkan arary
let angka = [1,2,3];
let angka1 = [4,5,6];
let gabung = angka.concat(angka1);
console.log(gabung);

//mengubah number menjadi string
let teks= angka.join();
console.log(teks);

//memotong
let potong = buah.slice(1,2);
console.log(potong);

//splice = menambah,menghapus,mengganti
// array.splice(mulai, jumlahHapus, item1, item2, ...)
angka1.splice(1,2); //menghapus 2 elemen mulai dari index 1
console.log(angka1);
angka1.splice(1,0,7,8); //menambahkan 7 dan 8 mulai dari index 1 tanpa menghapus elemen
console.log(buah);
buah.splice(1,1,'semangka'); //mengganti elemen index 1 dengan 'semangka'
console.log(angka1);
buah.splice(-1,1,'pepaya'); //mengganti elemen terakhir dengan 'pepaya'
console.log(buah);


//index of (mencari dari depan)
let barang = ['buku','pensil','penghapus','penggaris'];
console.log(barang.indexOf('pensil')); //mencari index dari 'pensil' (hasil: 1)
console.log(barang.lastIndexOf('penghapus')); //mencari index terakhir dari 'penghapus' (hasil: 2)
console.log(barang.includes('penggaris')); //memeriksa apakah 'penggaris' ada dalam array (hasil: true

