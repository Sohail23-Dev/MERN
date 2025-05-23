import {React} from 'react'
import Nav from './components/Nav'
import Coun from "./components/coun.jsx"
import Card from './components/card'
import Home from './components/home'

const App = () => {
  // let login = false;
  return (
    <>
    {/* {login?<Nav />:<Coun/>} */}
    
    {/* <Card imgsrc={"../src/assets/apple.jpg"} age={10} name={"Appleeshwar"}/>
    <Card imgsrc={"../src/assets/tomato.jpeg"} age={11} name={"Tamatareshwar"}/>
    <Card imgsrc={"../src/assets/potato.jpeg"} age={12} name={"Alooeshwar"}/>
    <Card imgsrc={"../src/assets/mango.jpg"} age={13} name={"Raja Ji"}/> */}
    <Nav/>
    <Coun/>
    {/* <Home/> */}

    </>
  )
}

export default App