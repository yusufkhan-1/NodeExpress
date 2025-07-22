// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useContext } from "react"
import Welcome from "./components/Welcome"
import Header from "./components/Header"
import AuthPage from "./components/AuthPage"
import Footer from "./components/Footer"
import Test from "./components/Test"
import Hello from "./components/Hello"
import Controlled from "./components/Controlled"
import EventHandler from "./components/EventHandler"
import { Routes, Route, Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import MyNewHook from "./components/MyNewHook"
import Assignment from "./components/CarInfo"
import CarInfo from "./components/CarInfo"
import Curd from "./components/Curd"
import Comp3 from "./components/Comp3"
// import { ThemeProvider, useTheme } from "./UseContext/ThemeContext"
import { CounterContext, CounterProvider } from "./UseContext/CounterContext"
// import { CounterProvider } from "./UseContext/CounterContext"

import { CartProvider } from "./UseContext/CartContext";
import { useCart } from "./UseContext/CartContext";



// const ThemeToggle=()=>{
//   const{theme,toggleTheme}=useTheme()




//   return(
//     <>
//     <p>The current Theme is:{theme} </p>
//     <button onClick={toggleTheme}>toggleTheme</button>
//     </>
//   )
// }
// const Helloo=()=>{
//   const{theme,toggleTheme}=useTheme();
//   return(
//     <>
//      <p>The current Theme is:{theme} </p>
//     <button onClick={toggleTheme}>toggleTheme</button></>

//   )

// }

// export const CounterApp = () => {
//   const { count, IncrementCount, DecrementCount, ResetCount } = useContext(CounterContext)
//   return (
//     <div>
//       <h1>COUNTER APP</h1>
//       <h2>COUNT:{count}</h2>
//       <button onClick={IncrementCount}>INCREMENT</button>
//       <button onClick={DecrementCount}>DECREMENT</button>
//       <button onClick={ResetCount}>RESET</button>



//     </div>
//   )
// }

// const App = () => {
//   return (
//     // // <ThemeProvider>
//     // //   <Helloo/>
//     // //   <ThemeToggle/>
//     // // </ThemeProvider>
//     // <Assignment />
//     <CounterProvider>
//     <CounterApp />
//     </CounterProvider>





const itemsAvailable = [
  'Apple', 'Banana', 'Carrot', 'Donut', 'Egg',
  'Fish', 'Grapes', 'Honey', 'Ice Cream', 'Jam', 'Kiwi', 'Lemon'
];

export const CartApp = () => {
  const { cartItems, toggleItem, MAX_ITEMS } = useCart();

  return (
    <div className="cart-container">
      <h1>🛒 My Cart</h1>
      <h2>Items in Cart: {cartItems.length} / {MAX_ITEMS}</h2>

      {cartItems.length >= MAX_ITEMS && (
        <div className="cart-full-msg">Cart is full. Remove items to add more.</div>
      )}

      <div className="items-list">
        {itemsAvailable.map((item) => (
          <div key={item} className="item-card">
            <span>{item}</span>
            <button
              onClick={() => toggleItem(item)}
              disabled={!cartItems.includes(item) && cartItems.length >= MAX_ITEMS}
            >
              {cartItems.includes(item) ? 'Remove' : 'Add'}
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>🧺 Cart Contents</h3>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>No items in cart.</p>
        )}
      </div>
    </div>
  );
};

const App = () => (
  <CartProvider>
    <CartApp />
  </CartProvider>
);

export default App;

  


