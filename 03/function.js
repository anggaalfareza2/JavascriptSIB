


//fungsi untuk menampilkan daftar nama siswa

function tampilkanDaftar(daftarNama) {
    console.log("=== DAFTAR SISWA ===");
    for (let i = 0; i < daftarNama.length; i++) {
        console.log((i + 1) + ". " + daftarNama[i]);
    }
}

let namaSiswa = ["Budi", "Ani", "Siti", "Joko", "Rina"];
tampilkanDaftar(namaSiswa);

//hitung kelulusan
function hitungLulus(nilai, batas) {
    let jumlah = 0;

    for (let i = 0; i < nilai.length; i++) {
        if (nilai[i] >= batas){
            jumlah++;
        }
    }
    return jumlah;
}

let nilaiMahasiswa= [80, 70, 75, 65, 89, 90, 95, 78];
let batas = 80;
let JumlahLulus = hitungLulus(nilaiMahasiswa, batas);
console.log("Jumlah Mahasiswa Yang Lulus: " + JumlahLulus + "orang");
