// let daftarProduk = ["Laptop", "Smartphone", "Headphone"];
// function tambahProduk(...produkBaru) {
//     daftarProduk = [...daftarProduk, ...produkBaru];
//     console.log("Produk berhasil ditambahkan!", produkBaru);
// }
// function tampilkanProduk() {
//     console.log("Daftar Produk:", daftarProduk);
// }
// function salinProduk() {
//     return [...daftarProduk];
// }

// tambahProduk("Tablet", "Headphone");
// tampilkanProduk();

// const produkCadangan = salinProduk();
// console.log("Produk Cadangan:", produkCadangan);

//latihan
// let daftarBarang = ["Beras", "Minyak", "Gula"];

// function tambahBarang(...barangBaru) {
//     daftarBarang = [...daftarBarang, ...barangBaru];
//     console.log("Barang berhasil ditambahkan: ", barangBaru);
// }

// function hapusBarang (...barangHapus) {
//     daftarBarang = daftarBarang.filter(barang => !barangHapus.includes(barang))
//     console.log("Barang berhasil dihapus: ", barangHapus);
// }
// function tampilkanBarang() {
//     console.log("Daftar Barang: ", daftarBarang);
// }
// function salinBarang() {
//   return[...daftarBarang];
// }

// const barangHapus = ["Minyak", "Gula"];
// hapusBarang(...barangHapus);

// tambahBarang("Tepung", "Sagu");
// tampilkanBarang();

// const produkCadangan = salinBarang();
// console.log("Produk Cadangan :", produkCadangan);

let daftarBuah = ["apel", "semangka", "jeruk", "stroberi"];
function tambahBuah(...buahBaru) {
  daftarBuah = [...daftarBuah, ...buahBaru];
  console.log("Buah berhasil ditambahkan: ", buahBaru);
}
function tampilkanBuah() {
  console.log("Daftar Semua Buah", daftarBuah);
}
function hapusBuah(...buahHapus) {
  daftarBuah = daftarBuah.filter((buah) => !buahHapus.includes(buah));
  console.log("Buah berhasil dihapus: ", buahHapus);
}

tambahBuah("Durian", "Alpukat");
tampilkanBuah();
hapusBuah("Semangka", "Jeruk");
tampilkanBuah();

//another example

let dataOrang = [{ nama: "Andi", asal: "Depok", umur: 20 }];

function tambahOrang(...orangBaru) {
  dataOrang = [...dataOrang, ...orangBaru];
  console.log("Orang berhasil ditambahkan: ", orangBaru);
}

function tampilkanOrang() {
  console.log("Daftar Semua Orang:", dataOrang);
}

tambahOrang(
  { nama: "Budi", asal: "Bandung", umur: 25 },
  { nama: "Citra", asal: "Surabaya", umur: 22 },
);

tampilkanOrang();
