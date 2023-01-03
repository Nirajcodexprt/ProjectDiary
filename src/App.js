import './App.css'

import Login from './Components/Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './Components/SignUp/SignUp'
import UserAuth from './Components/SignUp/UserAuth'
import UserInfo from './Components/SignUp/UserInfo'
import Home from './Components/HomePage/Home'
import Dashboard from './Components/Dashboard/Dashboard'
import ForgotPass from './Components/ForgotPassword/ForgotPass'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Userinfo" element={<UserInfo />} />
        <Route path="/userauth" element={<UserAuth />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
