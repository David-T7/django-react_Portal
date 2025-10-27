import { useState , useContext } from "react"
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../AuthProvider"
const Login = () => {
  const [sendingData, setSendingData] = useState(false)
  const  [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [errors , setErrors] = useState({})
  const [error , setError] = useState(false)
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    setSendingData(true)
    e.preventDefault();
    // Handle form submission logic here
    // console.log(formData);
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', formData);
      console.log('User Logged in successfully:', response.data);
      localStorage.setItem('accessToken', response.data.access);
      localStorage.setItem('refreshToken', response.data.refresh);
      setIsLoggedIn(true);
      setErrors({})
      setError(false)
      navigate('/dashboard');
    }
    catch (error) {
      setErrors(error.response.data);
      setError(true)
      console.error('There was an error!', error.response.data);
    }
    finally{
    setSendingData(false)
    }
  }
  return (
    <>
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-6 light-dark-bg p-5 rounded'>
            <h2 className='text-center text-light mb-4'>Login to Portal</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <input type='text' className='form-control' placeholder='Enter Username' required value={formData.username} onChange={e => setFormData(prev => ({ ...prev, username: e.target.value }))}/>  
            </div>
            <div className="mb-3">
            <input type='password' className='form-control' placeholder='Enter Password' required value={formData.password} onChange={e => setFormData(prev => ({...prev , password: e.target.value}))}/>
            </div>
            {error && <div className="alert alert-danger">{errors.detail}</div>}

            <button type='submit' disabled={sendingData} className='btn btn-info d-block mx-auto'>{sendingData && <FontAwesomeIcon icon={faSpinner} spin={sendingData} />}{sendingData ? 'Logingin...' : 'Login'}</button>
            </form>
        </div>
        </div>
    </div>
    </>
  )
}

export default Login