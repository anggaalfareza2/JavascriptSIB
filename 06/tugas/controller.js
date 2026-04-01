import users from "./data.js";

const index = () => {
    console.log("\n=== DAFTAR USER ===");
    users.map((user, index) => {
        console.log(`${index + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
    });
    console.log(`Total User: ${users.length}`);
};

const store = (user) => {
    users.push(user);
    console.log(`Data berhasil ditambahkan:`);
    console.log(`   - ${user.nama} (Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email})`);
};

const destroy = (nama) => {
    const indexUser = users.findIndex(user => user.nama === nama);
    
    if (indexUser !== -1) {
        const hapus = users.splice(indexUser, 1);
        console.log(`Data berhasil dihapus:`);
        console.log(`   - ${hapus[0].nama} (Umur: ${hapus[0].umur}, Alamat: ${hapus[0].alamat})`);
    } else {
        console.log(`User dengan nama "${nama}" tidak ditemukan.`);
    }
};

export { index, store, destroy };