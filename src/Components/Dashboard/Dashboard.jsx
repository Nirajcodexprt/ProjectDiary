import {
  Box,
  Flex,
} from '@chakra-ui/react'
import * as React from 'react'
import AfterAuth from '../../HOC/AfterAuth'
import Nav from '../NavBar/Nav'
import Sidebar from './Sidebar'

const Dashboard = ({children,colorMode,toggleColorMode}) => {
 
  return (
    <AfterAuth>
      <h1>Hello dashboard</h1>
    </AfterAuth>
  )
}
export default Dashboard
