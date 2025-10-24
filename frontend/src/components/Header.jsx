import Button from './Button'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <navbar className='navbar container pt-3 pb-3 align-items-center'>
    <Link to='/' className='navbar-brand text-light'>Portal</Link>
    <div>
       <Button className='btn btn-outline-info' text='Login' url='/login'/>
        &nbsp;
        <Button className='btn btn-info' text='Sign Up' url='/register'/>
    </div>
    </navbar>
    </>
  )
}

export default Header