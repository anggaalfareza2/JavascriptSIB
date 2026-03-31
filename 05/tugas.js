// **Data Produk**
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Tablet", harga: 7000000 },
  { id: 4, nama: "Headset", harga: 1000000 },
  { id: 5, nama: "Keyboard", harga: 750000 }
];

// nama fungsi bebas
const eventHandler = {
  tambah: document.getElementById("btnTambah"),
  tampil: document.getElementById("btnTampil")
};

// **Menambahkan Produk dengan Spread Operator**
function tambahProduk(id, nama, harga) {
  const produkBaru = { id, nama, harga };

  // spread operator (immutable)
  produkList = [...produkList, produkBaru];

  console.log("Produk berhasil ditambahkan");
}

// **Menghapus Produk dengan Rest Parameter**
function hapusProduk(id) {
  // filter digunakan untuk menghapus
  produkList = produkList.filter(produk => produk.id !== id);

  console.log("Produk berhasil dihapus");
}

// **Menampilkan Produk dengan Destructuring**
function tampilkanProduk() {
  console.log("=== DAFTAR PRODUK ===");

  produkList.forEach(({ id, nama, harga }) => {
    console.log(`ID: ${id} | Nama: ${nama} | Harga: ${harga}`);
  });
}

// EVENT LISTENER
eventHandler.tambah.addEventListener("click", function () {
  tambahProduk(6, "Mouse", 300000);
  tampilkanProduk();
});

eventHandler.tampil.addEventListener("click", function () {
  tampilkanProduk();
});

// pemanggilan awal
tampilkanProduk();

// contoh penambahan data
tambahProduk(7, "Monitor", 2000000);
tampilkanProduk();

// contoh hapus
hapusProduk(2);
tampilkanProduk();