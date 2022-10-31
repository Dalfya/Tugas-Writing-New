# WEEKLY REPORT , TUGAS WRITING WEEK 6

# __React Js Dasar__

## __Pengertian React JS__
    React JS adalah library JavaScript yang biasa digunakan saat membangun UI suatu website atau aplikasi web.
    Jadi, React JS bisa dianggap seperti perpustakaan yang berisi berbagai kode JavaScript yang sudah tertulis (pre-written). 
    Anda tinggal mengambil kode yang ingin Anda gunakan. Sehingga, ini membuat proses coding menjadi lebih efisien dengan framework JavaScript tersebut.

    Keuntungan menggunakan React JS adalah proses membuat aplikasi front-end leboh cepat walaupun menghandle berbagai data. 
    Konsep modular dalam Javascript juga diterapkan dalam react js. React JS membagi 1 tampilan pada website menjadi komponen komponen kecil


## __Instalasi React JS__
* Install Node Js (Recomended Version)
* Menggunakan library react
    ```javascript
        //ketikkan kode berikut pada git bash
        
        npm create-react-app My-app

        //npm disini otomatis terinstall ketika kita menginstall node js

        //ketika berhasil menginstall akan ada teks Happy Hacking 
    ``` 
* Kemudian running program dengan
    ```javascript
    npm start
    ```

* Dan ketikkan  
    ```javascript
    code . 
    // untuk membuka code editor (visual studio)
    ```
* React siap digunakan


## __Struktur Project React JS__
Karena React JS membagi 1 tampilan pada website menjadi komponen komponen kecil, berikut tampilan project react js yang berhasil diinstal.

![](file-react.png)


Dan dibawah ini contoh struktur kode dari _App.js_

![](app-js.png)

![](use-effect.png)

    Dengan membuat file berekstensi .jsx kita dapat menyisipkan tag html didalam return function, 
    semua tag html berlaku dan dapat digunakan secara normal tanpa menggunakan HTML DOM, tanpa menggunakan GetElementById/GetElementByClassName. 
    Rendering file JSX pada browser akan dicompile terlebih dahulu menjadi file JS.

Ada beberapa aturan dalam penulisan file JSX
* Setiap file JSX hanya boleh memiliki 1 root element / parent, file JSX tidak memperbolehkan adanya 2 root element dalam function.
    ``` javascript
        import './App.css';
        import MyComponent from './component/prop-type';


        function App() {
            return (
                <> 
                    <MyComponent/>
                </>
                );
            } // berikut struktur function yang diperbolehkan dalam file JSX

        export default App;
    ```

    ``` javascript
        import './App.css';
        import MyComponent from './component/prop-type';


        function App() {
            return (
                <div> // ----> parent 1
                    <MyComponent/> 
                <div/>
                <div> // ----> parent 2
                    <h1>Hello World<h1/> 
                <div/>
                );
            } // berikut adalah contoh function yang dapat menyebabkan error karena terdapat 2 parent / 2 root element

        export default App;
    ```
## __Virtual DOM__
    React JS memiliki fitur Virtual DOM, Virtual DOM secara singkat nya adalah sebuah javascript object (virtual) yang 
    merepresentasikan DOM yang sebenarnya (real DOM). karena virtual dom ini adalah representasi dari real dom maka 
    virtual dom adalah sebuah replikasi (copy) dari real dom tersebut. Berbeda konsep dengan DOM, 
    virtual dom ini memiliki konsep yaitu setiap saat perubahan terjadi di state pada aplikasi kita maka akan membuat virtual dom yang baru (cloning).

Berikut gambaran dari Virtual DOM

![](virtual-dom.png)


## __Component__
Ada 2 cara untuk membuat sebuah component 
* Menggunakan Function
* Menggunakan Class
Pada umumnya dan pada dokumentasi dalam react JS merekomendasikan menggunakan function sebagai component.
Contoh penggunaan function dalam penyusunan component pada React JS 
```javascript
    import './App.css';
    // import MyEffect from './component/UseEffect';
    import MyComponent from './component/prop-type';



    function App() {
        return (
            <>
                {/* <MyEffect/> */}
                <MyComponent/>
            </>
        );
    }

    export default App;
```

## __Class & ClassName__

    Class adalah kata kunci dalam JavaScript dan JSX adalah ekstensi dari javascript. Itulah alasan utama mengapa React menggunakan className dari pada class.

Berikut contoh ClassName

``` javascript
    import PropTypes from "prop-types";

    const MyComponent = () => {
    return (
        <>
            <h1 className ='title'>Hello</h1>
            <p></p>
        </>
        );
    };
    
    MyComponent.propTypes = {
        name: PropTypes.string,
        status: PropTypes.oneOf(["created", "verified", "finised"]),
        };
    
    export default MyComponent;

```

## __Variable__
Akses variable dalam JSX menggunakan curly braces / {}

``` javascript
    import PropTypes from "prop-types";

    const MyComponent = ({ name, status }) => {
    return (
        <>
            <h1>Hello {"budi"}</h1>
            <p>Status :{"online"}</p>
        </>
        );
    };
    
    MyComponent.propTypes = {
        name: PropTypes.string,
        status: PropTypes.oneOf(["created", "verified", "finised"]),
        };
    
    export default MyComponent;

```

## __Event__ 
Event di JSX tidak jauh beda dengan event yang ada didalam javascript, pendeklarasian event menggunakan curly braces / bracket {}

``` javascript
    import React, {useEffect, useState} from "react";

    const MyEffect = () => {
        const [counter, setCounter] = useState(0);
        useEffect(() => {
            console.log("Helo useeffect")
            }, [counter]);

    return(
        <>
            <h1>Heloo, {counter}</h1>
            <button onClick={() => setCounter(counter+1)}>
                increment
            </button>
        </>
    )
}

export default MyEffect
```

# Functional Component
Untuk dapat mendefinisikan komponen, langkah pertama yang harus kita lakukan adalah mengimpor Komponen Inti Teks React dan React Native, kemudian memulai komponen dengan sebuah fungsi yang diawali dengan huruf kapiital / capitalize.
```javascript
    import React from 'react';
    import { Text } from 'react-native';

    const FunctHello = () => {}; //arrow function
```
Di dalam komponen FunctHello dikembalikan sebagai elemen react yang di dalamnya bisa kita isi dengan teks / tag-tag lain yang ingin ditampilkan di layar. Kemudian kita juga harus mengekspor komponen fungsi yang telah kita buat agar bisa diakses di komponen lain.
```javascript
const FunctHello = () => { //arrow function
    return <h1>Hello Wrold</h1>;
};

export default FunctHello;
```

# __Props and State__
__Props__ adalah singkatan dari Property. Pengertian mudahnya, props adalah data yang diaksihkan (pemberian data). Props umumnya digunakan untuk komunikasi data component dari parent komponent ke child component. Prop ini mirip seperti attribute jika dalam HTML, namun dalam pembuatannya jika dalam functional component maka prop ini adalah parameternya. 
Berikut untuk contoh penerapannya : 
```javascript
    
    // Membuat functional component
    function Latar(props) {
        // Membaca component props
        let color = props.warnaLatar
    };
    // Render component dengan props
    <Latar warnaLatar ="blue" />
``` 
__State__ adalah data private sebuah component atau bisa disebut bahwa state adalah data yang tinggal di component tersebut. Data ini hanya tersedia untuk component tersebut dan tidak bisa di akses dari component lain. Kesimpulannya State adalah sebuah object untuk menyimpan data pada React dan akan di render atau muat ulang ketika data mengalami perubahan. 


# __Styling di React JS__

masih proses

# __Handling Events & Conditional Rendering__

## Handling Events
Untuk dapat memberikan event dalam react, kita bisa memakai onClick, onChange, dan attribute-attribute lain seperti halnya yang kita gunakan di HTML JS biasanya. Ketika kita ingin menerapkan sebuah event handler kita tidak bisa memakai varaibel biasa sebagai penampung, seperti set nilai awal = 0 ketika melakukan counter.Kita dapat menerapkan sebuah event handler dengan data yang akan ditampilkan / dapat berubah kita harus menggunakan state. 
Berikut untuk contoh penerapannya dengan membuat tombol counter increment dan decrement : 
```javascript
    import { useState } from "react";
    
    
    function Counter () {
        const [count, setCount] = useState(0) // untuk menampung counternya
        const increment = () => {
            setCount(count + 1)   // fungsi untuk melakukan increment (ditambah 1)
        }
        const decrement = () => {
            setCount(count - 1) // fungsi untuk melakukan decrement (dikurang 1)
        }
    
        return (
            <>
                {/* diberi event click */}
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </>
        )
    }
export default Counter;
```

## Conditional Rendering 
Adalah sebuah kondisi ketika terjadi sebuah event seperti di klik atau event yang lain. Untuk penerapannya, kita bisa menggunakan if else & operator ternary seperti halnya kita di Javascript biasanya, tinngal bermain logicnya saja mau di beri pengondisian seperti apa. 
Berikut untuk contoh penerapannya dengan study case user harus login terlebih dahulu sebelum dapat melakukan counting pada case di atas : 
```javascript
    import Counter from "./components/Counter";
    
    function App() {
        // untuk conditional renderingnya
        const [isLogin, setIsLogin] = useState(false);
        
        return (
            <div>
                <!--memunculkan button ketika belum login  -->
                {!isLogin && <button onClick={() => setIsLogin(true)}>Login</button>}
                <br />
                
               <!--jika sudah login, akan munculkan counternya -->
                {isLogin ? <Counter /> : <span>Silakan login dulu bang ...</span>}
            </div>
        );
    }
export default App;
```


# __Lifecycle Method & Hooks__

## Lifecycle Method
__Lifecycle (Siklus Hidup)__ adalah  aktifitas method yang dilakukan oleh React Native ketika aplikasi di jalankan. Tujuan lifecycle penting untuk dipelajari karena lifecycle mengatur semua aktifitas yang terjadi pada aplikasi yang kita buat. 
Jenis-jenis lifecycle pada react diantaranya : 
<ol>
<li>Mount</li> Sebuah siklus ketika aplikasi baru saja di buka atau pengertian muudahnya mount itu untuk memunculkan.
<li>Update</li>  Sebuah siklus ketika kita mengubah data yang telah di Mounting.
<li>Unmount</li> Proses menghilangkan atau mendestroy komponen yang sebelumnya di definisikan.
</ol>

Dalam lifecycle terdapat yang namanya useEffect(),berfungsi untuk memberi efek samping ketika proses lifecycle berlangsung. Ketika akan menggunakan useEffect, kita pasti akan membutuhkan useState sebagai penampung 
Berikut contoh penerapannya untuk menampilkan list digimon : 

```javascript
    function ListDigimon() {
    const [isLoading, setIsLoading] = useState(true);
    const [digimons, setDigimons] = useState([]);
    useEffect(() => { 
        axios("https://digimon-api.vercel.app/api/digimon") // Untuk melakukan fetching data digimon
        .then((res) => {
        setDigimons(res.data);
        setIsLoading(false);
        console.log(res.data);
        });
    }, []);
```

## __Hooks__

__Hooks__ adalah fitur baru yang baru dikenalkan di React JS pada tahun 2018.Hooks digunakan untuk memumadhkan penggunaan functional components agar bisa menggunakan state dan lifecycle lainya.

Sebelumnya, state(setState) dan lifecycle(componenDidMount, componenDidUpdate) hanya bisa digunakan di class component, namun dengan hooks, kita bisa menggunakannya di functional component.

    Hooks yang sering digunakan adalah useState dan useEffect

functional component akan melakukan 'hooks' terhadap hal-hal yang hanya ada di class agar bisa digunakan di functional components dengan mudah.

## Perbedaan Functional Component dengan Class Component
1. Functional Component(Menggunakan state)
   
     ```Javascript
    import { useState } from "react";
    function App() {
        const [nama, setNama] = useState("Diego");
        return <h1>{ nama }, Sedang belajar React JS</h1>
    }
    // output : Diego sedang belajar React JS
2. Class component(Menggunakan state hooks)
    ```Javascript
    class component extends React.Component {
        constructor(props) {
            Super(props);
            this.state = { nama : "Diego"};
        }
        render() {
             return <h1>{this.state.nama}, Sedang belajar React JS</h1>;
            }
    }
    // output : Diego sedang belajar React JS
    ```
    Dengan menggunakan functional component dan menggunakan hooks maka code akan terlihat lebih clean,pendek dan mudah dimengerti.
    Tim yang sudah mendevelop React merekomendasikan untuk mulai menggunakan hooks karena lebih mudah dimengerti.

## useState
Penggunaan useState sedikit berbeda dengan setState/state di class component, namun pengertian useState sendiri sama seperti dengan state biasa.
## Cara penggunaan usestate hooks
```Javascript
   import { useState } from "react" //Import usestate dari react
   
   function APp(){
    const [nama, setNama] = useState("Diego"); //Menuliskan useState hooks
    
    return(
        <div className = "App">
            <h1>{ nama }, sedang belajar React JS</h1> 
            <button onClick = {setNama("DyAlfya")}> Update nama</button>
        </div>
        );
   };
    // output : Diego sedang belajar React JS
    // apabila button di klik maka akan berubah menjadi ' DyAlfya sedang belajar React JS'
   ```
## Update State
State bisa diubah menggunakan variabel kedua dari state hooks.
contoh:
```Javascript
    const [nama, setNama] = useState("Diego");

    //Untuk mengubahnya kita tinggal menggunakan setNama
 ```

# Form 
Penggunaan form di react sebenarnya sama saja dengan penggunaannya di HTML biasa. Namun ketika menghadapi banyak kasus, akan lebih mudah jika memiliki sebuah fungsi JavaScript yang menangani sebuah submisi dari sebuah form dan memiliki akses terhadap data yang dimasukkan pengguna ke dalam form. Seperti halnya elemen form seperti tag input, textarea & select, mereka punya state masing-masing & meng-update sesuai inputan user. Di react, state yang dapat berubah ini akan disimpan dalam property yaitu menggunakan setState().
Berikut untuk penerapannya :
```javascript
    import { useState } from "react";
    import axios from "axios";

    const Form = () => { // Membuat fungsi bernama Form
    const [name, setName] = useState(""); // untuk menampung nama & untuk mengubahnya nanti
    const [address, setAddress] = useState(""); //  untuk menampung address & untuk mengubahnya nanti
    const [data, setData] = useState({}); // untuk menampung data & untuk menampilkannya nanti
    const handleSubmit = (e) => { // Membuat fungsi untuk menghandle submit
    e.preventDefault();
    
    axios // Untuk mengirimkan data yang isinya : name, address, program dari database
      .post("http://localhost:3000/student", { // local host disini merupakan api dummy yang dibuat untuk contoh dalam proses ini
        name,
        address,
      })
      .then(() => {
        setData({ name, address, program }); // Untuk menampilkan nama, address, program
        setName(""); // untuk mengosongkan form name ketika button submit  di klik
        setAddress(""); // untuk mengosongkan form address ketika button di klik
      })
      .catch((err) => {
        console.log(err);
      });
  };
    
    return ( 
    <>
        <form action="" onSubmit={handleSubmit}>  {/* Memanggil fungsi handleSubmit ketika button submit di klik */}
        <label htmlFor="name">Name</label> 
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />  {/* Mengambil value inputan name user */}
        <label htmlFor="address">Address</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} /> {/* Mengambil value inputan address user */}
        <button type="submit">Submit</button>
        </form>
        <br />
        <h2>Name: {data.name}</h2> {/* Menampilkan name hasil dari inputan */}
        <h2>Address: {data.address}</h2> {/* Menampilkan address hasil dari inputan */}
    </>
  );
};
```