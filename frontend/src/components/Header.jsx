import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <>
    <navbar className='navbar container pt-3 pb-3 align-items-center'>
    <a href='' className='navbar-brand text-light'>Portal</a>
    <div>
       <Button className='btn btn-outline-info' text='Login'/>
        &nbsp;
        <Button className='btn btn-info' text='Sign Up'/>

    </div>
    </navbar>
    </>
  )
}

export default Header