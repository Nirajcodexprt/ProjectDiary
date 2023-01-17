import './App.css'

import Login from './Components/Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './Components/SignUp/SignUp'
import UserAuth from './Components/SignUp/UserAuth'
import UserInfo from './Components/SignUp/UserInfo'
import Home from './Components/HomePage/Home'
import Dashboard from './Pages/Dashboard/Dashboard'
import ForgotPass from './Components/ForgotPassword/ForgotPass'
import Project from './Pages/Projects/Project'
import Member from './Pages/Member/table/Tables'
import { useColorMode } from '@chakra-ui/react'
import CreateProject from './Pages/Projects/CreateProject'
import Teams from './Pages/teams/Teams'
import CreateTeam from './Pages/teams/CreateTeam'
import EditProfile from './Pages/Profile/ViewProfile'

function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  console.log('colorMode :::', colorMode)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Userinfo" element={<UserInfo />} />
        <Route path="/userauth" element={<UserAuth />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/members" element={<Member />} />

        <Route path="/ViewProfile" element={<EditProfile />} />

        <Route path="/projects" element={<Project />} />
        <Route path="/teams/CreateTeam" element={<CreateTeam />} />
        <Route path="/projects/createProject" element={<CreateProject />} />

        <Route path="/forgotpass" element={<ForgotPass />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
