

import './style/App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Routes,Route } from 'react-router-dom'
import Main from './pages/Main'
import Cart from './pages/Cart'
import Add from './pages/Add'
import NotFound from './pages/NotFound'
import Shop from './pages/Shop'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  

  return (
    <div className='app'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main></Main>} />
        <Route path='/shop' element={<Shop></Shop>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/cart' element={<Cart></Cart>} />
        <Route path='/add' element={<Add></Add>} />
        <Route path='*' element={<NotFound></NotFound>} />

      </Routes>

      <Footer></Footer>
    </div>
  )
}

export default App
