// mendeklarasikan array 1 dimensi
// let MyArray = ["Diego", 21 , "Informatika"]

// mengakses array 1 dimensi
// console.log(MyArray[0])
// console.log(MyArray[1])

//Mendeklarasikan array multidimension
let ArrMultidimen = [
    ["Diego", 19, "INF-20"],
    ["Nicky", 20, "INF-20"],
    ["Reza", 22, "INF-21"],
    ["Syaiful", 21, "INF-22"],
    ["Azriel", 22, "INF-21"]
];

//Looping dan menyimpan data array multidimensional menggunakan map()
let NewArrayMulti = ArrMultidimen.map(( array, index) => {
    if(index % 2 == 0){
        console.log(array)
    }

    return array;
});


//Properti Array ==> lenght/ panjang array
//console.log("Panjang Array adalah "+ ArrMultidimen.length)

// //Mengkases array multidimensional
// console.log(ArrMultidimen[0][0]);
//     // Mengakses array ke 0, dengan index ke 0
// console.log(ArrMultidimen[1][1]);
//     // Mengakses array ke 1, dengan index ke 1
// console.log(ArrMultidimen[2][2]);
//     // Mengakses array ke 2, dengan index ke 2


//Method yang dapat digunakan untuk array multidimensional
//method push() ==> menambahkan data ke index paling belakang array
// ArrMultidimen.push(["Ary", 21 , "INF-22"])
// console.log(ArrMultidimen)

//method pop()
// ArrMultidimen.pop()
// console.log(ArrMultidimen)

//Looping Array untuk menampilkan 1 1 data yang ada
//Menggunakan for
// for(let x = 0; x < ArrMultidimen.length; x++ ){
//     console.log(ArrMultidimen[x])
// }
//Looping menggunakan for-each
// ArrMultidimen.forEach( (array, index) => {
//     if (index % 2 == 1){
//         console.log(index, array)
//     }
// });