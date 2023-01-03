import './App.css'

import Login from './Components/Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './Components/SignUp/SignUp'
import UserAuth from './Components/SignUp/UserAuth'
import UserInfo from './Components/SignUp/UserInfo'
import Home from './Components/HomePage/Home'
import Dashboard from './Components/Dashboard/Dashboard'
import ForgotPass from './Components/ForgotPassword/ForgotPass'
import Team from './Components/Team/Team'
import Project from './Components/_projects/Project'
import Member from './Components/Member/Member'
import { useColorMode } from '@chakra-ui/react'
import CreateProject from './Components/_projects/CreateProject'

function App() {

  const { colorMode, toggleColorMode } = useColorMode()
  console.log("colorMode :::", colorMode)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Userinfo" element={<UserInfo />} />
        <Route path="/userauth" element={<UserAuth />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/teams" element={<Team />} />
        <Route path="/members" element={<Member />} />

        <Route path="/projects" element={<Project />} />
        <Route path="/projects/createProject" element={<CreateProject />} />

        <Route path="/forgotpass" element={<ForgotPass />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
