import React from 'react'

const Navbar=()=>{
  return(
    <div>
    <nav className='ui raised very padded segment'>
    <a className='ui teal inverted segment'>AI Search Engine</a>
    <div className='ui right floated header'>
      <button className='ui inverted red button'><a href="/home">Home</a></button>
      <button className='ui inverted blue button'><a href="/about">About</a></button>
      <button className='ui inverted green button'><a href="/contact">Contact</a></button>
    </div>
    </nav>
    </div>

  )
}

export default Navbar;
