# WEEKLY REPORT, Week 8


# **React Context**
__React Context__ adalah pembaruan lebih lanjut dari react redux yang mana react context juga hadir untuk mengatasi permasalahan yang sama seperti react redux yaitu mengatasi props drilling (lempar-lemparan data dari parent ke child). React context digunakan untuk membuat data agar dapat diakses secara global.<br>
Untuk dapat menggunakan react context langkah yang harus dilakukan adaklah<br> 
- Menginstallnya terlebih dahulu dengan mengetikkan perintah "npm install react-context --save" pada terminal.
```javascript
    npm install react-context --save
```
- Kemudian menyediakan variabel untuk membuat contextnya dengan perintah "createContext()".
```javascript

import React, {createContext} from 'react'

export const userContext = createContext()
```
- Membuat provider di komponen parent.
```javascript
    import {useState} from 'react'

    function Provider({children}) {
        const [user, setUser] = useState({
            name : "Diego"
        })
        
        return (
            <UserContext.Provider value={{user, setUser}}>
                {children}
            </UserContext.Provider>
        )
    }
    export default Provider;
```
- Nah, dalam contoh kasus ini UserProvider adalah parent yang mempunyai child yaitu CountProvider & App.
```javascript
    ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider>
        <CountProvider>
            <App />
        </CountProvider>
    </Provider>
);
```

- Membuat _CountProvider_ nya

```javascript
    import React, { createContext, useState } from 'react'
    
    export const KeranjangCountContext = createContext()
    
    function CountProvider({children}) {
        const [KeranjangCount, setKeranjangCount] = useState(0)
        //Karena KeranjangCountProvider punya child yaitu App, maka diberi paramater berupa destructor children
        return (
            <CountContext.Provider value={{KeranjangCount, setKeranjangCount}}>
                {children}
            </CountContext.Provider>
        )
    }
    export default CountProvider;
```
- Kemudian kita buat App nya yang berisi komponen-komponen yang dibutuhkan. Di sini sebagai contoh saja saya panggil komponen Keranjang, ListProduct, & SummaryPembelian
```javascript
    import { useContext } from "react";
    import Keranjang from "./components/Keranjang";
    import ListProduct from "./components/ListProduct";
    import SummaryPembelian from "./components/SummaryPembelian";
    import { UserContext } from "./Provider";
    // Karena App mambutuhkan data yang ada di variabel UserContext dalam komponen UserProvider, kita perlu menggunakan "useContext" dan mengimportnya terlebih dahulu
    function App() {
    const { user } = useContext(UserContext); //Untuk dapat mengakses data di userContext
    return (
        <div className="App">
            <Keranjang />
            <br />
            <ListProduct />
            <SummaryPembelian />
            <h1>{user.name}</h1>
        </div>
    );
    }
    export default App;
```
<br>

# __React Context with useReducer__

__React context dengan useReducer__ digunakan jika menemukan _state yang ingin diubah dengan pengubahan yang kompleks_ seperti menambah, menghapus, dan mengedit data. Dalam materi kali ini membahas cara mengombinasikan antara react context dengan reducer yang sebelumnnya sudah dibahas di materi redux.<br>
Berikut untuk  implementasinya dengan case membuat sebuah counter increment & decrement : <br>

- Pertama seperti pada react context, kita buatkan dulu contextnya
```javascript
    export const CounterContext = createContext();
```
- Kemudian membuat Function reducernya, 

```javascript
    //membuat function reducer dengan parameter (state, action) action ==> aksi apa yang akan dilakukan
function reducer(state, action){
    switch (action.type) {
        case INCREMENT :
            return {
                count: state.count + 1
            } // membuat case action dengan nilai kembalian object
        case DECREMENT :
            return{
                count : state.count - 1
            } // state.count untuk menginisialisasi state saat ini 
        default:
            return state;
    }
} // digunakan untuk memanajement data / state
```

- Membuat komponen Counter

```javascript
import React, { useContext } from 'react'
import { CounterContext } from './CounterProvider'

function Counter() {
    const {state, increment, decrement} = useContext(CounterContext) //  menggunakan use Reducer 
    // mengimport state, action increment, decrement
    return (
        <div>
            <button onClick={increment}>+</button>
            <span>{state.count}</span>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter
```
- Membuat Function provider untuk Counter

```javascript
import React, {createContext, useReducer} from 'react'

export const CounterContext = createContext()

//membuat instan variabel untuk action dispatch, agar nanti ada auto complete saat di action
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

//step pertama membuat initial state sebagai state awal
const initialState = {
    count : 0
}

function CounterProvider({children}) {
    //state diambil dari initial state
    //dispatch digunakan untuk mengambil aksi / action reducer yang akan digunakan (action increment dan decrement)
    const [state, dispatch] = useReducer(reducer, initialState) // useReducer menerima 2 argument yaitu (function reducer, initialState)

    //membuat action yang nanti akan digunakan
    const increment = () =>{
        dispatch({type : INCREMENT})
    } // increment ini akan menjalankan dispatch, membuat inisialisasi dispatch dengan type ( type akan digunakan dalam case untuk mengembalikan action sesuai type)

    const decrement = () =>{
        dispatch({type : DECREMENT})
    }
    return (
        <CounterContext.Provider value={{state, increment, decrement}}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider
```
- Kode di App.jsx 

``` javascript
import './App.css'
import Counter from './components/Counter'

function App() {

  return (
    <div className="App">
      <Counter/>
    </div>
  )
}

export default App

```

# __React Testing (Jest & RTL)__
Testing adalah melakukan uji coba terhadap aplikasi yang telah dibuat apakah sudha sesuai dengan ekspektasi atau belum. Terdapat 2 macam tipe testing, diantaranya : <br>
<ol>
<li><B>Manual Testing</B></li>
Yaitu testing yang dilakukan dengan melakukan pengecekan terhadap masing-masing fitur yang telah dibuat. Misalnya telah membuat fitur counter, di cek apakah fitur tersebut sudah jalan sesuai ekpektasi atau tidak, apakah masih ada bug ketika user mengklik tombol increment/decrement, dll.

<li><B>Automation Testing</B></li>
 Yaitu testing yang dilakukan olah kode porgram yang telah kita buat, kode program tersebut nantinya akan mengecek tiap fitur yang telah dibuat. Automation testing sendiri ada 3 macam, diantaranya : <br>
- <B>unit testing</B> = testing yang dilakukan pada bagian paling terkecil, seperti function.<br>
- <B>integration</B> = testing yang dilakukan dengan mengintegrasikan / menyambungkan dengan aplikasi / sistem lain, seperti database.<br>
- <B>end to end</B> = testing yang dilakukan terhadap software mulai dari awal sampai akhir mencakup experience dari user. Testing ini merupakan testing yang membutuhkan banyak biaya karena bisa dibilang testing ini adalah testing yang kompleks / testing yang tidak bisa dilakukan oleh programmer sendiri, tidak seperti unit testing yang masih bisa dilakukan oleh programmer sendiri.
</ol>

Berikut untuk contoh implementasi menggunakan Jest : <br>

```javascript
    //Installasi jest
    npm install --save-dev jest
```

```javascript
    //app.js
    function sum(x,y) { //untuk melakukan penjumlahan
        return x + y
    }

    //sum.test.js
    const sum = require('./sum');

    test('sum 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
```
```javascript
    //Menambahkan dependensi di package.json
    {
    "scripts": {
        "test": "jest"
  }
}
```

```javascript
    //running test
    npm test

    //hasil
    PASS  ./sum.test.js
    ✓ sum 1 + 2 to equal 3 (5ms)
```

Berikut adalah contoh implementasi menggunakan RTL (React Testing Library)<br>
```javascript
    //Counter.js
    import React, { useState } from 'react'
    
    function Counter() { //Membuat komponen Counter
        const [count, setCount] = useState(0)
        return (
            <div>
                <button onClick={() => setCount(count-1)}>-</button>
                <span>{count}</span>
                <button onClick={() => setCount(count+1)}>+</button>
            </div>
        )
    }
    export default Counter;
    
    
    //Counter.test.js
    import { fireEvent, render, screen } from '@testing-library/react';
    import Counter from './Counter';
    
    
    test("render counter", () => {
        render(<Counter/>) //untuk merender komponen Counter
        const decrementBtn = screen.getByText("-") //untuk mendapatkan text "-"
        const count = screen.getByText("0") //untuk mendapatkan text "0"
        const incrementBtn = screen.getByText("+") //untuk mendapatkan text "+"
        expect(decrementBtn).toBeInTheDocument() //untuk mengecek apakah "-" itu ada
        expect(count).toBeInTheDocument() //untuk mengecek apakah "0" itu ada
        expect(incrementBtn).toBeInTheDocument() //untuk mengecek apakah "+" itu ada
        })

    test('click increment button', () => { //function untuk melakukan testing
        render(<Counter/>)
        const incrementBtn = screen.getByText("+")
        const count = screen.getByText("0")
        expect(count.textContent).toBe("0")
        //untuk mengecek apakah ketika diklik "+" yang awalnya 0 akan bertambah jadi 1
        fireEvent.click(incrementBtn)
        expect(count.textContent).toBe("1")
    });
```
Dalam melakukan testing juga terdapat yang namanya TDD (Test Driven Development). Pada umumnya testing dilakukan setelah fitur selesai dibuat, proses ini terjadi pada development biasa. Sedangkan pada proses TDD, testing dilakukan lebih dulu sebelum membuat fitur. Dalam TDD, terdapat sebuah lifecycle diantaranya yaitu :
- Red zone (Test Fails) = berisi sebuah ekspektasi (masih belum ada code program, hanya ekspektasi saja).
- Green zone (Test Passess)= realasasi dari ekspektasi tersebut (proses pembuatan code program).
- Blue zone (Refactor) = tahap efisiensi dari code program, seprti membuat codingan yang simple, mudah dimengerti, dan rapi. Intinya untuk membuat code yang telah dibuat sebelumnya agar lebih rapi & efisien.