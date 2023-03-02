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
import Protected from './Components/Protected'
import ViewProfile from './Pages/Profile/ViewProfile'
import ChangePassword from './Components/Change Password/ChangePassword'

function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  console.log('colorMode :::', colorMode)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Protected Component={Login} />} />
        <Route path="/signup" element={<Protected Component={SignUp} />} />
        <Route path="/Userinfo" element={<Protected Component={UserInfo} />} />
        <Route path="/userauth" element={<Protected Component={UserAuth} />} />
        <Route path="/dashboard" element={<Protected Component={Dashboard} />} />
        <Route path="/teams" element={<Protected Component={Teams} />} />
        <Route path="/members" element={<Protected Component={Member} />} />

        <Route path="/ViewProfile" element={<Protected Component={ViewProfile} />} />

        <Route path="/projects" element={<Protected Component={Project} />} />
        <Route path="/teams/CreateTeam" element={<Protected Component={CreateTeam} />} />
        <Route path="/projects/createProject" element={<Protected Component={CreateProject} />} />

        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
