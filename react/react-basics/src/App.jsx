import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import { Footer,Content } from './Content.jsx'


let x = 'sunil kumar'
let y =()=>'nice'
let el = <div className='a'>
  hello world
  <h1>hi... <br></br> my name is {x} </h1>
  <input type="text" />
  <p>{y()}</p>
</div>




function App() {

  return (
    <>
    {el}
    <Header ></Header>
    <Content />
    <Footer />
    </>
  )
}

export default App

// //jsx => writing html inside js is known as jsx(javascript extension)
// //there must be a single parent element (complete jsx in a single tage)
// //every tag must be closed
// //use className insteed of class
// //{} in jsx =>to write js code inside jsx
// let x = 'sunil kumar'
// let y =()=>'nice'
// let el = <div className='a'>
//   hello world
//   <h1>hi... <br></br> my name is {x} </h1>
//   <input type="text" />
//   <p>{y()}</p>
// </div>
// //functional component => is a normal function , name starts with capital letter
// //must return jsx
// //to use , call them as a tag (inside jsx)
// function Header() {
//   return <div>
//     this is header part
//   </div>
// }
// function Footer() {
//   return <div>
//     this is footer part
//   </div>
// }
// function Content() {
//   return <div>
//     this is content part
//   </div>
// }

// function App() {

//   return (
//     <>
//     {el}
//     <Header ></Header>
//     <Content />
//     <Footer />
//     </>
//   )
// }

// export default App
