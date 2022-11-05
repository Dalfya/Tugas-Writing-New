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
  address : PropTypes.any.isRequired, //isRequired data harus ada
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
    import { Routes, Route, Link } from "react-router-dom";
    
    <nav>
        <Routes>
            <Route>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>    
            </Route>
        </Routes>
    </nav>


    import { BrowserRouter } from "react-router-dom";
    //browser router digunakan untuk membungkus App.jsx agar router dapat berjalan, Browser router diletakkan pada file main.js

    <BrowserRouter>
        <App/>
    </BrowserRouter>
```

Dalam penggunaanya, react-router secara garis besar hampir mirip dengan HTML biasanya hanya saja sedikit ada perbedaan dalam penerapannya. Kalau dalam HTML ketika kita hendak menyisipkan link / file HTML untuk berpindah halaman kita menggunakan tag "anchor", sedangkan dalam react-router menggunakan tag "Link". Selain tag "Link" untuk dapat berindah halaman, terdapat salah satu Hook yang bernama useNavigate() yang sebenarnya juga sama seperti tag "Lin" untuk berpindah halaman, namun useNavigate lebih disarankan karena lebih kompatibel. <br>

Selain itu ada juga __outlet__ yang digunakan untuk memanggil anak-anak (halaman) dari induk(halaman). Misalnya kita punya sebuah halaman about yang di dalamnya ada halaman about teachers & about students.Halaman about teachers & students merupakan anak dan halaman about merupakan induknya. <br>
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
Dengan menambahlan attribute index di dalam tag "Route" di file, halaman ini akan menjadi halaman pertama ditampilkan.
```javascript
    <Routes>
        //Halaman yang akan ditampilkan pertamakali
        <Route path="/" element={<Home />} />
        
            //route params
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


