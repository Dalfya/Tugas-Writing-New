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

## __State Managemen ~ Redux__
__Redux__ adalah sebuah aplikasi state management. State management adalah cara untuk memfasilitasi komunikasi dan berbagai data lintas komponen. Redux berfungsi untuk melakukan perubahan state yang dibutuhkan oleh setiap fungsional yang ada di suatu aplikasi. Tujuan redux untuk mengatasi props drilling (penggunaan dan pendeklarasian props yang berulang ulang). Untuk membuat perubahan tersebut, Redux memiliki tiga komponen utama yaitu __store__ , __reducer__, dan __action__. <br>

Langkah-langkah dalam menggunakan redux dalam react yaitu : 
<ol>
<li>Installasi react redux</li>

```javascript
    npm install redux react-redux
```

<li>Buat Store</li>

```javascript
// membuat store sebagai wadah/ gudang dari state

    import { createStore } from 'redux'
    
    const store = createStore(keranjangReducer)
    export default store;
```
<li>Buat Reducer</li>

```javascript
//direducer ini dia akan menerima initial state (state awal)

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
// fungsi diatas memiliki parameter state untuk initialstatenya dan action, kemudian terdapat swicth dan case untuk memilih action apa yang akan dilakukan,action disini akan mengubah data initialState.
  
  export default keranjangReducer;

//reducer ini yang nantinya akan dipanggil kembali ke store menjadi sebuah parameter
```
```javascript
// membuat store sebagai wadah/ gudang dari state

    import { createStore } from 'redux'
    import keranjangReducer from '../reducer/keranjangReducer'
    
    const store = createStore(keranjangReducer)
    export default store;
```

<li>Buat Provider (untuk membari tahu bahwa storenya sudah tersedia)</li>

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
                <span>{totalKeranjang}</span>
            </div>
        )
    }
    export default Keranjang;
```
<li>Membuat sebuah action</li>

```javascript
//membuat action( action == sebuah function yang memiliki return object yang memiliki properti type)

    export const INCREMENT_KERANJANG = "INCREMENT_KERANJANG"
    export const DECREMENT_KERANJANG = "DECREMENT_KERANJANG"

    export function incrementKeranjang() {
        return {
            type: INCREMENT_KERANJANG,
        }
    }

    export function decrementKeranjang() {
        return {
            type: DECREMENT_KERANJANG,
        }
    }
    
```
<li>Ubah Data di Store menggunakan dispatch(action)</li>

```javascript
//Mengimport useDispatch() untuk mengirim data kedalam reducer
    import React, { useState } from "react";
    import { useDispatch } from "react-redux";

// mengimport action yang telah dibuat ke component counter
    import {
        incrementKeranjang,
        decrementKeranjang,
    } from "../redux/action/keranjangAction";

    function Counter() {
        const dispatch = useDispatch();
        const [count, setCount] = useState(0);

        const increment = () => {
            dispatch(incrementKeranjang())
            setCount(count + 1);
        };

        const decrement = () => {
            dispatch({
            type: "DECREMENT_KERANJANG"
            })
            setCount(count - 1);
        };

        return (
            <>
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </>
        );
}

export default Counter;
```
```javascript
//kode di App.jsx untuk menampilkan halaman keranjang
    import { useState } from 'react'
    import Keranjang from './components/Keranjang'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Keranjang />
    </div>
  )
}

export default App

```
Dalam mengirimkan action menggunakan dispatch, kita juga bisa menampung data / memberikan info tambahan dalam action menggunakan __payload__. Kemudian saat function action dengan parameter payload tersebut dipanggil function lain menggunakan dispatch,parameter function action itu dapat diganti dengan data / pesan sesuai keinginan kita. <br>
Berikut untuk contoh penerapannya : <br>
```javascript
    export const INCREMENT_KERANJANG = "INCREMENT_KERANJANG"
    export const DECREMENT_KERANJANG = "DECREMENT_KERANJANG"
    
    export function incrementKeranjang(payload) {
        return {
            type: INCREMENT_KERANJANG,
            payload
        }
    } //payload dijadikan sebagai parameter dalam function action yang mengembalikan tipe dari masing-masing action
    
    export function decrementKeranjang(payload) {
        return {
            type: DECREMENT_KERANJANG,
            payload
        }
};
    function Counter() {
    const dispatch = useDispatch();
    // function action dengan parameter payload tersebut dipanggil function lain yang menggunakan dispatch.
    const [count, setCount] = useState(0);
    //Membuat function increment 
    const increment = () => {
        dispatch(incrementKeranjang('increment'))
        setCount(count + 1);
    };
    //Membuat function decrement 
    const increment = () => {
        dispatch(decrementKeranjang('decrement')) // pesan payload
        setCount(count - 1);
    };
    return (
        <>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
        </>
    );
};
```

# __State Management ~ Async Action with Redux Thunk and Middleware__
__Redux Thunk?__ adalah sebuah  middleware yang memungkinkan kita untuk membuat Action yang _mengembalikan function_, _bukan action_. Selain itu, Thunk juga dapat membuat fungsi yang di dalamnya terdapat asynchronusnya agar kita dapat menunda proses pengambilan data di API.<br>
 __Penggunaan Redux Thunk__

 ```javascript
 //installasi react-redux 
    npm install redux react-redux

//kemudian installasi redux thunk
    npm install redux-thunk@2.3.0
 ```


Berikut untuk contoh penerapannya : <br>
```javascript
    import { createStore, combineReducers, applyMiddleware } from 'redux';
    import thunk from 'redux-thunk';
    //Mengimport thunk dari react-redux
    import todoReducer from '../todoReducer';
    
    //Combine reducer berfungsi untuk menampung lebih dari 1 reducer karena 1 store hanya dapat menyimpan 1 reducer, cara menyimpan beberapa reducer kedalam sebuah function
    const allReducer = combineReducers({
            todo: todoReducer,})
    
    const store = createStore(allReducer, applyMiddleware(thunk))
    
    export default store;
```

Untuk implementasi penggunaan Redux Thunk salah satunya dalah berkomunikasi secara asynchronus dengan API eksternal untuk mengambil atau menyimpan data.<br>


```javascript
    import axios from "axios";
    //Membuat variabel untuk menampung action
    
    export const GET_TODO = "GET_TODO";
    export const FETCH_START = "FETCH_START";
    export const SUCCESS_GET_TODO = "SUCCESS_GET_TODO";
    
    //Membuat function untuk tipe dari setiap action
    function fetchStart() {
        return {
            type: FETCH_START,
        };
    }
    
    function successGetTodo(data) {
        return {
            type: SUCCESS_GET_TODO,
            payload: data,
        };
    }

export const getTodo = () => {
  return async (dispatch) => {
    // untuk action FETCH_START
    dispatch(fetchStart());
    // untuk mendapatkan data todo dari API
    const result = await axios.get(
      "https://63478a450484786c6e82998f.mockapi.io/todo"
    );
    // untuk action SUCCESS_GET_TODO
    dispatch(successGetTodo(result.data));
  };
};