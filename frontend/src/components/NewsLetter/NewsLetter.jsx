import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusice Offers On your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='your email adress' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
