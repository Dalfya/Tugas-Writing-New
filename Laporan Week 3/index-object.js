//Cara mendeklarasikan Object
// let mobil = {
//     warna : "Merah",
//     jenis : "Roda 4",
//     harga : 400000000
// }

// //Confert property object to array
// console.log(Object.values(mobil))
// //Confert objecct to array
// console.log(Object.entries(mobil))


//Nested Object

// let hewan = {
//     nama : "kucing",
//     jenis : "persia",
//         bulu : {
//             warna : "putih hitam abu abu",
//             tekstur : "halus",
//             jenis : "lurus"
//     }
// }
//  console.log("kio adalah" + hewan.nama , hewan.bulu.warna)

//Array of object
let mahasiswa = [
    {
        nama : "Ary",
        asal : "riau",
        jurusan : "INF",
        umur : 21
    },
    {
        nama : "Faadhil",
        asal : "Bengkulu",
        jurusan : "INF",
        umur : 20
    },
    {
        nama : "Azriel",
        asal : "Sukoharjo",
        jurusan : "INF",
        umur : 22
    },
]

//Untuk melooping array diatas dapat menggunakan for-each

mahasiswa.forEach((dataMhs)=>{
    console.log(dataMhs)
})