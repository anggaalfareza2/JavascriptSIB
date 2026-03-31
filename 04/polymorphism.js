//overloading

class calculator {
    tambah (a, b=0, c=0) {
        return a + b + c;
    }
}

const calc = new calculator();
console.log(calc.tambah(5)); // Output: 5
console.log(calc.tambah(5, 10));
console.log(calc.tambah(5, 10, 15));

//contoh lain dari overloading 
class mesangger {
    kirimPesan(pesan, tujuan) {
        if (tujuan) {
            return `Mengirim pesan: "${pesan}" ke ${tujuan}`;
        } else if (pesan) {
            return `Mengirim pesan: "${pesan}" ke semua kontak`;
        } else {
                return "Pesan tidak valid";
            }
    }
}
const messenger = new mesangger();
console.log(messenger.kirimPesan("Halo!"));
console.log(messenger.kirimPesan("Halo!", "John"));



//overriding digunakan jika class child memiliki parameter yang sama dengan class parent, namun memiliki implementasi yang berbeda
class hewan {
    constructor(nama, jenis) {
        this.nama = nama;
        this.jenis = jenis;
    }
    getInfo(){
        return `Nama : ${this.nama}, Jenis : ${this.jenis}`
    }
}

class breed extends hewan {
   getInfo(){
    return `${super.getInfo()}`;
   }
}

let Myhewan = new hewan ("Kucing", "Mamalia");
let MyBreed = new breed ("Burung","Unggas","Bertelur");

console.log(Myhewan.getInfo());
console.log(MyBreed.getInfo());
