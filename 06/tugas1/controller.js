import users from "./data.js";

let daftarUser = [...users];

const index = () => {
    return daftarUser.map((user, index) => ({
        id: index + 1,
        nama: user.nama,
        umur: user.umur,
        alamat: user.alamat
    }));
};

const store = (user) => {
    const userBaru = {
        nama: user.nama,
        umur: user.umur,
        alamat: user.alamat
    };
    daftarUser.push(userBaru);
    return userBaru;
};

const destroy = (nama) => {
    const indexUser = daftarUser.findIndex(user => user.nama === nama);
    
    if (indexUser !== -1) {
        const hapus = daftarUser.splice(indexUser, 1);
        return hapus[0];
    }
    return null;
};

export { index, store, destroy };