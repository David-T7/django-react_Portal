import { useState } from "react"
import axios from "axios"
const Register = () => {
  const [sendingData, setSendingData] = useState(false)
  const  [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [errors , setErrors] = useState({})
  const [succsess , setSuccsess] = useState(false)

  const handleSubmit = async (e) => {
    setSendingData(true)
    e.preventDefault();
    // Handle form submission logic here
    // console.log(formData);
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', formData);
      console.log('User registered successfully:', response.data);
      setErrors({})
      setSuccsess(true)
    }
    catch (error) {
      setErrors(error.response.data);
      setSuccsess(false)
      console.error('There was an error!', error.response.data);
    }
    setSendingData(false)
  }
  return (
    <>
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-6 light-dark-bg p-5 rounded'>
            <h2 className='text-center text-light mb-4'>Sign up</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <input type='text' className='form-control' placeholder='Enter Username' value={formData.username} onChange={e => setFormData(prev => ({ ...prev, username: e.target.value }))}/>  
            <small>{errors.username && <div className="text-danger">{errors.username}</div>}</small>
            </div>
            <div className="mb-3">
            <input type='email' className='form-control' placeholder='Enter Email' value={formData.email } onChange={ e => setFormData(prev => ({...prev , email: e.target.value }))}/>
            <small>{errors.email && <div className="text-danger">{errors.email}</div>}</small>
            </div>
            <div className="mb-3">
            <input type='password' className='form-control' placeholder='Enter Password' value={formData.password} onChange={e => setFormData(prev => ({...prev , password: e.target.value}))}/>
            <small>{errors.password && <div className="text-danger">{errors.password}</div>}</small>
            </div>
            {succsess && <div className="alert alert-success">Registration successful! You can now log in.</div>}
            <button type='submit' disabled={sendingData} className='btn btn-info d-block mx-auto'>{sendingData ? 'Registering...' : 'Register'}</button>
            </form>
        </div>
        </div>
    </div>
    </>
  )
}

export default Register