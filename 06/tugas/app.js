import { index, store, destroy } from './controller.js';

console.log("=== APLIKASI MANAJEMEN USER ===\n");

console.log(" MENAMPILKAN SEMUA USER:");
index();

console.log("MENAMBAHKAN 2 USER BARU:");
store({ nama: "Rina", umur: 23, alamat: "Jl. Kebon Jeruk No. 11", email: "rina@email.com" });
store({ nama: "Andi", umur: 31, alamat: "Jl. Kemang Raya No. 12", email: "andi@email.com" });

console.log("MENAMPILKAN USER SETELAH TAMBAH:");
index();

console.log("MENGHAPUS USER DENGAN NAMA 'Jane':");
destroy("Jane");

console.log("MENAMPILKAN USER SETELAH HAPUS:");
index();

console.log("MENCOBA MENGHAPUS USER YANG TIDAK ADA:");
destroy("Alex");

console.log("\n=== SELESAI ===");