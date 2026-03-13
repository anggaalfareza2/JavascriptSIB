let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

//menampilkan produk
function tampilkanProduk() {
    console.log("\n=== DAFTAR PRODUK ===\n");
    
    if (produkToko.length === 0) {
        console.log("Tidak ada produk.");
        return;
    }

    let totalSemua = 0;
    
    for (let i = 0; i < produkToko.length; i++) {
        let p = produkToko[i];
        let totalNilai = p.harga * p.stok;
        totalSemua += totalNilai;
        
        console.log(`ID: ${p.id}`);
        console.log(`Nama: ${p.nama}`);
        console.log(`Harga: Rp ${p.harga}`);
        console.log(`Stok: ${p.stok}`);
        console.log(`Total Nilai: Rp ${totalNilai}`);
        console.log("-------------------");
    }
    
    console.log(`TOTAL SEMUA: Rp ${totalSemua}`);
}

//menambah produk
function tambahProduk(nama, harga, stok) {
    if (!nama || harga <= 0 || stok < 0) {
        console.log("Data tidak valid!");
        return;
    }

    let idBaru = 1;
    if (produkToko.length > 0) {
        idBaru = produkToko[produkToko.length - 1].id + 1;
    }

    let produkBaru = {
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    };

    produkToko.push(produkBaru);
    console.log(`Produk "${nama}" berhasil ditambahkan dengan ID ${idBaru}`);
    tampilkanProduk();
}

//menghapus produk
function hapusProduk(id) {
    let indexHapus = -1;
    for (let i = 0; i < produkToko.length; i++) {
        if (produkToko[i].id === id) {
            indexHapus = i;
            break;
        }
    }

    if (indexHapus !== -1) {
        let namaProduk = produkToko[indexHapus].nama;
        produkToko.splice(indexHapus, 1);
        console.log(`Produk "${namaProduk}" berhasil dihapus`);
        tampilkanProduk();
    } else {
        console.log(`Produk dengan ID ${id} tidak ditemukan`);
    }
}

tampilkanProduk();

tambahProduk("Smartphone", 5000000, 3);
hapusProduk(2);