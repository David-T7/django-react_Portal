import Button from './Button'
import { Link , useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../AuthProvider'
const Header = () => {
  const { isLoggedIn , setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log('Logging out...');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsLoggedIn(false);
    navigate('/login');
  }
  return (
    <>
    <nav className='navbar container pt-3 pb-3 align-items-center'>
    <Link to='/' className='navbar-brand text-light'>Portal</Link>
    <div>
      {isLoggedIn ? (
        <>
        <Button className='btn btn-outline-info' text='Dashboard' url='/dashboard'/>
        &nbsp;
        <button className='btn btn-danger' onClick={handleLogout}>  Logout</button>
       </>
      ) : (
        <>
       <Button className='btn btn-outline-info' text='Login' url='/login'/>
        &nbsp;
        <Button className='btn btn-info' text='Sign Up' url='/register'/>
        </>
      )}
    </div>
    </nav>
    </>
  )
}

export default Header