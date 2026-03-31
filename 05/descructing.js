//without descructing
const angka = [10,20,30];
const a = angka[0];
const b = angka[1];
const c = angka[2];
console.log(a,b,c);

//with descructing
const angka1 = [10,20,30];
const [x,y,z] = angka1;
console.log(x,y,z);

const user = {
    nama: "Budi",
    umur: 25,
    pekerjaan: "Programmer"
};
const {nama, umur, pekerjaan} = user;
console.log(nama, umur, pekerjaan);

//descructing loop
const siswa = [
    {nama: "Ali", nilai: 85},
    {nama: "Boedie", nilai: 90},
];

for(const{nama,nilai}of siswa) {
    console.log(`${nama} Mendapatkan nilai ${nilai}`);
}

//contoh 

// const produkList = [
//     {nama: "Laptop", harga: 1000000, stok: 10},
//     {nama: "Smartphone", harga: 500000, stok: 20},
//     {nama: "Tablet", harga: 800000, stok: 15},
// ];
//     function tampilkanDetailProduk({nama, harga, stok}) {
//         console.log(`Nama Produk: ${nama}`);
//         console.log(`Harga Produk: ${harga}`);
//         console.log(`Stok Produk: ${stok}`);
//         console.log("#########");
//     }

// const [produk1, produk2, produk3]= produkList
// console.log("Detail Produk 1:");
// tampilkanDetailProduk(produk1);
// console.log("Detail Produk 2:");
// tampilkanDetailProduk(produk2);
// console.log("Detail Produk 3:");
// tampilkanDetailProduk(produk3);

//latihan
const daftarSiswa = [
    { nama: "Budi", nilai: 85, kelas: "A" },
    { nama: "Ani", nilai: 90, kelas: "B" },
    { nama: "Citra", nilai: 78, kelas: "A" }
];
function tampilkanDaftarSiswa({nama, nilai, kelas}) {
    console.log(`Nama Siswa ${nama}`);
    console.log(`Nilai Siswa ${nilai}`);
    console.log(`Kelas Siswa ${kelas}`);
};
const [siswa1,siswa2,siswa3]=daftarSiswa

console.log("siswa 1=")
tampilkanDaftarSiswa(siswa1);
console.log("siswa 2=")
tampilkanDaftarSiswa(siswa2);
console.log("siswa 3=")
tampilkanDaftarSiswa(siswa3);

//latihan 2
const daftarMenu = [
    {nama: "Nasi Kuning", harga : 15000, kategori: "Makanan Berat"},
    {nama: "Es Teh", harga : 5000, kategori: "Minuman"},
    {nama: "Pisang Goreng", harga : 1000, kategori: "Makanan Ringan"},
];
function tampilkanMenu({nama, harga, kategori}) {
    console.log(`Nama Menu: ${nama}`);
    console.log(`Harga Menu: ${harga}`);
    console.log(`Kategori Menu: ${kategori}`);
};

const [menu1, menu2, menu3]= daftarMenu
const menu4 = {nama: "Pancong", harga : 8000, kategori: "Makanan Ringan"}

tampilkanMenu(menu1);
tampilkanMenu(menu2);
tampilkanMenu(menu3);
tampilkanMenu(menu4);