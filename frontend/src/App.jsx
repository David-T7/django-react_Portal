import Header from "./components/header"
import Home from "./components/home"
import Footer from "./components/footer"
import {BrowserRouter , Routes , Route  } from 'react-router-dom'
import Register from "./components/Register"
import Login from "./components/Login"
import AuthProvider from "./AuthProvider"
function App() {
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path='/' element={<Home />} />  
    <Route path='/register' element={<Register />} />
    <Route path='/login' element={<Login />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
