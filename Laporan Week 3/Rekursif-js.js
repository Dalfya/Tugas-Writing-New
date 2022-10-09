
//Algoritma Rekursif
        //Base Case
            //Titik paling awal
        
        //Rekursion case
            //Titik dimana dia memanggil dirinya sendiri


function calculateFactorial(num) {
    if (num === 1) {
        return 1;
    } else {
        return num * calculateFactorial(num - 1);
                }
}
              
console.log( "Hasil Faktorial " +calculateFactorial(4));