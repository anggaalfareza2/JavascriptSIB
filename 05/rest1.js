function jumlahkan(...angka) {
    return angka.reduce((total, num) => total + num, 0);
}
console.log(jumlahkan(1, 2, 3)); // Output: 6

const angka = [1, 2, 3, 4, 5];

const [a, b, ...sisa] = angka;
console.log(a);
console.log(b);
console.log(sisa);

//contoh 2

const user = {
    nama: "Budi",
    umur: 25, 
    alamat : "Jl. Merdeka No. 123",  
    pekerjaan: "Programmer"
    
};
const {nama, ...info} = user;

console.log(nama);
console.log(info);

//spread operator
const angkaA = [1, 2, 3];
const angkaB = [4, 5, 6];
//without spread operator
console.log(angkaA[0], angkaA[1], angkaA[2]);

// with spread operator
console.log(...angkaB);

const gabungan = [...angkaA, ...angkaB];
console.log(gabungan);

const tambahAngka = [0, ...angkaA,...angkaB, 7];
console.log(tambahAngka);

//another example
const karyawan = {
    nama: "Budi",
    umur: 25,
    pekerjaan: "Programmer"
}
const karyawanBaru = {
    ...karyawan,
    alamat: "Jl. Merdeka No. 123",
}
console.log(karyawanBaru);