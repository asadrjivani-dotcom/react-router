import { Routes, Route } from 'react-router-dom'
import Home from './home'
import User from './user'
import FourOhFour from './errorpage'
import UserDetail from './userdetail'

function RoutesPage() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/user' element={<User />} />
      <Route path='/user_detail/:id' element={<UserDetail />} />
      {/* 404 not found page */}
      <Route path='*' element={<FourOhFour />} />
      
    </Routes>
  )
}

export default RoutesPage