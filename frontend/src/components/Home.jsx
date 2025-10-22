import Button from "./Button"
const Home = () => {
  return (
    <>
    <div className='container text-center light-dark-bg rounded p-5'>
    <h1 className='text-light'>This is a portal page</h1>
    <p className='text-light lead'>Welcome to the portal. This is the home page where you can find various resources and links to navigate through the site.</p>
    <Button className='btn btn-outline-info' text='Login'/>
    </div>
    </>
  )
}

export default Home