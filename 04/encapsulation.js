class produk {
    #harga;
    constructor(nama, harga) {
        this.nama = nama;
        this.#harga = harga;
    }
    getHarga() {
        return this.#harga ;
    }
    setHarga(hargaBaru) {   
        if (hargaBaru > 0) {
            this.#harga = hargaBaru;
        }
        else {
            console.log("Harga tidak boleh negatif");
        }

    }
}

const tv = new produk("Televisi", 5000000);   
console.log(tv.getHarga()); 
tv.setHarga(4500000);
console.log(tv.getHarga());  
