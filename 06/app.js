import { ProdukController } from "./modules/controller.js";
import { produkView } from "./modules/view.js";

document.addEventListener("DOMContentLoaded", () => {
    const view = new produkView();
    const controller = new ProdukController(view);
    view.bindTambahProduk(controller);

});   