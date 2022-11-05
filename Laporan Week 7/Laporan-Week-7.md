# **Weekly report,** week 7

## **React ~ Prop Types** <br>
__Prop Types__ merupakan sebuah library yang dapat membantu untuk memeriksa tipe data props yang kita kirim agar sesuai dengan ekspektasi kita. Untuk dapat menggunakan PropTypes ini, terlebih dahulu kita harus menginstallnya dengan mengetikkan perintah
```javascript
    //Installasi PropTypes lewat terminal git bash/ terminal vs code
    
--> npm install proptypes

    //Import library dengan menuliskannya didalam component yang akan menggunakan props-type

--> import PropTypes from 'prop-types'
```

Berikut untuk contoh penerapannya : <br>

``` javascript
//membuat sebuah component, lalu mengimport PropTypes agar dapat digunakan

import PropTypes from "prop-types";

const Student = ({ name, address, age }) => {
  return (
    <>
      <h2>nama : {name}</h2>
      <h2>address : {addres}</h2>
      <h2>age : {age + 1}</h2>
    </>  
  );
};

Student.propTypes = {
  // type data string (ketika data yang dimasukkan tidak sesuai maka akan error)
    name: PropTypes.string,
  // type data number
    age: PropTypes.number,
  // type data bebas
    address : PropTypes.any.isRequired, //isRequired data harus ada/ harus diisi

  // ----------------------- <atau> ---------------------------\
  // array dengan memberikan opsi terhadap berbagai tipe data
    age: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  // memberikan pilihan tipe data / salah satu
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Student;

// Tampilan code di App.jsx

import React from "react";
import StudentInfo from "./components/Student";

const App = () => {
  return (
    <>
      <h1>Prop Types</h1>
      <Student name={"diego"} address ={"Jalan.in aja dulu"} age={19}} />
    </>
  );
};

export default App;
```

<br><br>

## __React Router 6__

Jika kita ingin berganti dari satu halaman ke halaman yang lainnya dalam website diperlukan suatu proses routing. Perpindahan halaman tersebut diantaranya seperti dari halaman Home, ke halaman About/ Porto dan halaman-lainnya. Routing sendiri adalah proses pemetaan antara sebuah URL ke dalam sebuah halaman yang terdapat konten / UI (User Interface) sesuai dengan URL yang dituju. Untuk dapat membuat routing kita membutuhkan library  Library tersebut yaitu __"react-router-dom"__. Untuk dapat menggunakan reacr-router, terlebih dahulu kita harus mengimport BorwserRouter & Route yang nantinya tag tersebut akan dipakai sebagai pembungkus terluar.
```javascript
    import { BrowserRouter } from "react-router-dom";
    //browser router digunakan untuk membungkus App.jsx agar router dapat berjalan, Browser router diletakkan pada file main.js

    <BrowserRouter>
        <App/>
    </BrowserRouter>


    //tampilan code di App,jsx

    import { Routes, Route, Link } from "react-router-dom";
    
    <nav>
        <Routes>
            <Route>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>    
            </Route>
        </Routes>
    </nav>


```

Dalam penggunaanya, react-router secara garis besar hampir mirip dengan HTML biasanya hanya saja sedikit ada perbedaan dalam penerapannya.HTML ketika kita hendak menyisipkan link / file HTML untuk berpindah halaman kita menggunakan tag "anchor", sedangkan dalam react-router menggunakan tag "Link". Selain tag "Link" untuk dapat berindah halaman, terdapat salah satu Hook yang bernama __useNavigate()__ yang sebenarnya juga sama seperti tag "Link" untuk berpindah halaman, namun _useNavigate_ lebih disarankan karena lebih kompatibel.

```javascript
    //megimport useNavigate dari react-router-dom
    import {usenavigate} from 'react-router-dom'

    const Home = () => {
        const navigate = useNavigate(); //Mendeklarasikan useNavigate () menjadi sebuah variabel yang lebih mudah digunakan
        return (
            <>
                <h1 style={{color:"green"}}>My page</h1>
                <button onClick={()=>navigate("/about")}>About me</button> 
            </> // didalam navigate dapat diisi denfan path / path + id halaman yang akan dirujuk
         )
    };
  
export default Home;

```

Selain itu ada juga __outlet__ yang digunakan untuk memanggil anak-anak (halaman) dari induk(halaman). Misalnya kita punya sebuah halaman about yang di dalamnya ada halaman about teachers & about students.Halaman about teachers & students merupakan anak dan halaman about merupakan induknya.

```javascript
    import { Outlet, Link } from "react-router-dom";
    const About = () => {
    return (
        <>
        <Outlet />
        <Link to={"student"}>About Student |</Link>
        <Link to={"teacher"}>About Teacher</Link>
        </>
    );
    };
    
    export default About;
```
Dengan menambahlan attribute index di dalam tag "Route" di file, halaman ini akan menjadi halaman pertama ditampilkan. __Nested__ route Ini adalah salah satu fitur paling kuat dari React Router sehingga Anda tidak perlu dipusingkan dengan kode tata letak yang rumit. Sebagian besar tata letak Anda digabungkan ke segmen URL dan React Router mencakup ini sepenuhnya. Route dapat bersarang di dalam satu sama lain, dan jalurnya juga akan bersarang (anak mewarisi induknya)
```javascript
    <Routes>
        //Halaman yang akan ditampilkan pertamakali
        <Route path="/" element={<Home />} />
        
            //route params (dapat digunakan untuk mengirim parameter dan membawa data untuk dirouting)
            <Route path="/detail/:id" element={<Detail />} />
            
            //penggunaan nested route
                <Route path="/about" element={<About />}> 
                <Route path="student" element={<AboutStudent />} />
                <Route path="teacher" element={<AboutTeacher />} />
                <Route index element={<AboutSchool/>} />
            </Route>
        
        // tambahkan path="*" untuk menampilkan halaman yg tidak ditemukan.ketika user mengakses path tertentu yang tidak terdaftar di routingan yang kita miliki*/}
        <Route path="*" element={<NotFound/>} />
    </Routes>
```

## __State Managemen ~ Redux__ <br>
__Redux__ adalah sebuah aplikasi state management. State management adalah cara untuk memfasilitasi komunikasi dan berbagai data lintas komponen. Redux berfungsi untuk melakukan perubahan state yang dibutuhkan oleh setiap fungsional yang ada di suatu aplikasi. Tujuan redux untuk mengatasi props drilling (penggunaan dan pendeklarasian props yang berulang ulang). Untuk membuat perubahan tersebut, Redux memiliki tiga komponen utama yaitu __store__ , __reducer__, dan __action__. Langkah-langkah dalam menggunakan redux dalam react yaitu : <br>
<ol>
<li>Buat Store</li>

```javascript
    import { createStore } from 'redux'
    import keranjangReducer from '../reducer/keranjangReducer'
    const store = createStore(keranjangReducer)
    export default store;
```
<li>Buat Reducer</li>

```javascript
    const initialState = {
    totalKeranjang: 0,
    };
  
  function keranjangReducer(state = initialState, action) {
    console.log(action);
  
    switch (action.type) { 
      default:
        return state;
    }
  };
  
  export default keranjangReducer;
```
<li>Buat Provider (untuk membari tahu bahwa storenya sudah tersedia</li>

```javascript
    import { Provider } from 'react-redux';
    ReactDOM.createRoot(document.getElementById('root')).render(
        <Provider store={store}>
            <App />
        </Provider>
    );
```
<li>Ambil Data dari Store menggunakan useSelector()</li>

```javascript
    import { useSelector } from 'react-redux'
    function Keranjang() {
    const {totalKeranjang} = useSelector(state => state)
    return (
        <div>
        <span>Keranjang</span>
        <span> {totalKeranjang}</span>
        </div>
    )
    }
    export default Keranjang;
```
<li>Ubah Data di Store menggunakan dispatch(action)</li>

```javascript
    import { useDispatch } from "react-redux";
    export function incrementKeranjang(payload) {
    return {
        type: INCREMENT_KERANJANG,
        payload
    }
    }
    export function decrementKeranjang(payload) {
    return {
        type: DECREMENT_KERANJANG,
        payload
    }
    }
    function Counter() {
    const dispatch = useDispatch(); //untuk meng-trigger action agar mengubah data di store
    const [count, setCount] = useState(0);
    const increment = () => {
        dispatch(incrementKeranjang('oke'))
        setCount(count + 1);
    };
    const decrement = () => {
        dispatch({
        type: "DECREMENT_KERANJANG"
        })
        setCount(count - 1);
    };
```

