export class ProdukModel {
    constructor(){
        this.produkList = [];
    }

    //fungsi untuk menambahkan produk ke dalam list
    tambahProduk(namaProduk){
        this.produkList.push(namaProduk);
}
    //fungsi untuk menghapus produk dari list
    hapusProduk(namaProduk){
        this.produkList = this.produkList.filter(produk => produk !== namaProduk);
    }

    getProduk(){
        return this.produkList;
    }
}
