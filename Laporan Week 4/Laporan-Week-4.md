# Laporan writing Week 4

## Javascript Fetch dan Async Await
## Async Await
    Async key memberi Anda cara yang lebih sederhana untuk bekerja dengan kode berbasis promise async. Menambahkan asyncdi awal fungsi menjadikannya fungsi async:

* Contoh
```javascript
<html> <p id="demo"> </html>


<script>
    async function myDisplay() {
        let myPromise = new Promise(function(resolve, reject) {
            resolve("I love You !!");
        });
        document.getElementById("demo").innerHTML = await myPromise;
    }

    myDisplay();
</script>

//hasilnya 
I love You !!
````

Di dalam fungsi async, dapat menggunakan await sebelum panggilan ke fungsi yang mengembalikan promise. Ini membuat kode menunggu pada saat itu hingga promise diselesaikan, di mana nilai yang dipenuhi dari promise diperlakukan sebagai nilai pengembalian, atau nilai yang ditolak dibuang. __Await__ hanya dapat berjalan ketika didalam fungsi __async__.

* Contoh ketika kondisi terdapat false / error 

```javascript
    async function myFunction(){
        try {
            let result = await myVar()
            console.log(result)
        }
        cath(error){
            console.log(error)
        }
    }
```
#### Error Handling Async/Await
Untuk menghandle error  Async/Await kita dapat menggunakan try catch di dalam function yang kita buat, sehingga jika terjadi error kita dapat menangkap errornya dalam block catch, berikut contoh penggunaannya.

## Fetch
    Fetch API menyediakan antarmuka JavaScript untuk mengakses dan memanipulasi bagian protokol , seperti permintaan dan tanggapan. Ini juga menyediakan metode global fetch()yang menyediakan cara mudah dan logis untuk mengambil sumber daya secara asinkron di seluruh jaringan.

* Contoh sederhana kode fetch() dengan promise then().
```javascript
fetch('http://example.com/movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));

```
Di sini mengambil file JSON di seluruh jaringan dan mencetaknya ke konsol. Penggunaan paling sederhana dari __fetch()__ mengambil satu argumen — jalur ke sumber daya yang ingin Anda ambil — dan tidak secara langsung mengembalikan isi respons JSON tetapi sebaliknya mengembalikan __promise__ yang diselesaikan dengan __Response__ objek.

Objek _Response_, pada gilirannya, tidak secara langsung berisi  respons JSON yang sebenarnya tetapi merupakan representasi dari seluruh respons HTTP. Jadi, untuk mengekstrak konten isi JSON dari Response objek menggunakan json()metode, yang mengembalikan __promise__ kedua yang diselesaikan dengan hasil parsing teks isi respons sebagai JSON.

* Contoh menggunakan async await() dan fetch() 
  
```javascript
<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Fetch API</h1>
<h2>The fetch() Method</h2>
<p id="demo">Fetch a file to change this text.</p>

<script>

getText("fetch_info.txt");

async function getText(file) {
  let x = await fetch(file);
  let y = await x.text();
  document.getElementById("demo").innerHTML = y;
}
</script>

</body>
</html>

//Hasilnya
JavaScript Fetch API
The fetch() Method
Fetch API
The Fetch API interface allows web browser to make HTTP requests to web servers.

If you use the XMLHttpRequest Object, Fetch can do the same in a simpler way.
```

## Github lanjutan
Berikut ini adalah langkah-langkah dalam melakukan kolaborasi pada public repository:

__Menyalin repositori.__

Jika ingin berkolaborasi pada public repository kita harus menjalankan git fork atau menyalin repositori. Pertama buka terlebih dahulu repositori yang akan disalin.

__Melakukan forking.__

Klik “Fork” untuk menyalin repository tersebut ke repository pribadi.

![](github2.png)

Setelah itu, akan ada repositori baru dari hasil forking dari sebuah repositori. Repositori tersebut sudah menjadi milik kita dan dapat melakukan perubahan apapun.

![](github2-1.png)

Tulisan sesudah kata forked from menandakan repositori asal.

__Melakukan perubahan pada repositori.__

Selanjutnya melakukan pull request melalui repositori yang sudah di forking, lalu pilih salah satu file yang ingin diubah contohnya disini saya memilih README.md. Lakukan perubahan dengan meng-klik ikon pensil terlebih dahulu.

![](github3.png)

Kemudian lakukan perubahan pada file yang sudah dipilih yang ada dalam repositori pada branch main. Jika sudah yakin dengan perubahan, klik tombol “Commit changes” yang berwarna hijau untuk menyimpan perubahan tersebut.

![](github3-2.png)

__Melakukan pull request ke repositori asal.__

Selanjutnya ialah meminta izin ke pemilik akun repositori tersebut dengan meng-klik tab ‘Pull Request’ lalu klik tombol ‘New pull request’ yang bewarna hijau untuk membuat permintaan.

![](github4.png)

Lanjutkan dengan klik tombol ‘Create pull request’.

![](github4-1.png)

Ketikkan judul pull request dan description (opsional). Jika sudah klik tombol ‘Create pull request’.

![](github4-2.png)

Setelah itu, dari pengelola repositori asal akan melakukan review terlebih dahulu sebelum melakukan penggabungan (merge) kode.