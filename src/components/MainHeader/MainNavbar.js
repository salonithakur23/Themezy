import React from 'react'
import { Link } from 'react-router-dom'
import "./Main.css"
import { menuItem } from './utill'




const MainNavbar = () => {
  const getLinks = menuItem.map((items,index)=>{
    return(
      <li className="nav-item" key={index} >
                <Link className="nav-link " aria-current="page" to={items.link}>
                 <div className='itemsColor'> {items.page}</div>
                 
                </Link>
              </li>
    )
  })
  
  return (
   <>
<nav class="navbar navbar-expand-lg navbar-dark nav-color sticky-top">
  <div class="container-fluid">
   
      <h4 className='logo-text'>call:9045772340</h4>
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
      <div className='image'><img className='imgbox' src='17004.png' /></div>
      {getLinks}
      <div className='image2'><img className='imgbox2' src='lock.jpg' /></div>
      </ul>
     
    </div>
  </div>
</nav>


   
   </>
  )
}

export default MainNavbar