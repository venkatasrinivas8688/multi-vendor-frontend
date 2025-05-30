import React from 'react'

const Welcome = () => {
    const firmName = localStorage.getItem("firmName")
  //console.log('/assets/chef.jpg');
  return (
    <div className='welcomeSection'>
        <h2>Welcome <span>{firmName}</span></h2>
    </div>
  )
}

export default Welcome