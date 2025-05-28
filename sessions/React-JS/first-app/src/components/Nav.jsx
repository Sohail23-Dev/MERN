import  { React } from 'react'

const Nav = () => {
  return (
    <>
    <div className="container sticky top-0 z-1 rounded-2xl">
        <h1 className="heading text-4xl">Ecomm</h1>
        <div className="nav-items">
            <a href="#" className="links hover:bg-blue-300">Contact us</a> 
            <a href="#" className="links hover:bg-blue-300">About us</a>
            <a href="#" className="links hover:bg-blue-300">Reviews</a>
            <a href="#" className="links hover:bg-blue-300">FAQ</a>
        </div>
    </div>
    </>
  )
}

export default Nav