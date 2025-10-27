import Button from "./Button"
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <>
    <div className='container text-center light-dark-bg rounded p-5'>
    <h1 className='text-light'>This is a portal page</h1>
    <p className='text-light lead'>Welcome to the portal. This is the home page where you can find various resources and links to navigate through the site.</p>
    <Link className='btn btn-outline-info' to={'/dashboard'}>Start</Link>
    </div>
    </>
  )
}

export default Home