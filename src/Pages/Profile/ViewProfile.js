import { Box, Button, Flex, FormControl, FormLabel, Heading, HStack, Input, Stack, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import ProfilePicture from '../../Components/Profile/ProfilePicture'
import AfterAuth from '../../HOC/AfterAuth'

const ViewProfile = () => {

    const [open, setOpen] = useState(false)

    const BtnColor = useColorModeValue('#000', '#fff')
    const BoxShadowColor = useColorModeValue('#000', '#fff')
    const navigate = useNavigate()

    return (
        <AfterAuth>
            <HStack justifyContent={'space-between'}>
                <Heading>View Profile</Heading>
                <Button bg={'cadetblue'} _hover='none' onClick={() => navigate(-1)} fontWeight='700' color={BtnColor}>Back</Button>
            </HStack>
            <Flex mt='6'>
                <Flex flexDirection={'column'}>
                    <Stack height={180} borderRadius='6px' boxShadow={'0px 0px 2px 0px ' + BoxShadowColor} width={180} ><img className='userImg' src="assets/img.jpeg" /></Stack>
                    <Button bg={'cadetblue'} _hover='none' onClick={() => setOpen(true)} color={BtnColor} mt='2' width={180} >Change Profile Picture</Button>
                </Flex>
                <Box width='100%' ms="50px">
                    <FormControl id="firstName">
                        <Flex>
                            <FormLabel display='flex' alignItems='center' pt='2'>FirstName</FormLabel>
                            <Input type='text' ms='3' placeholder='First Name' />
                        </Flex>
                    </FormControl>
                    <FormControl mt={6} id="LastName">
                        <Flex>
                            <FormLabel display='flex' alignItems='center' pt='2'>LastName</FormLabel>
                            <Input type='text' ms='3' placeholder='Last Name' />
                        </Flex>
                    </FormControl>
                    <FormControl mt={6} id="LastName">
                        <Flex>
                            <FormLabel display='flex' alignItems='center' pt='2'>Mobile&nbsp;No.</FormLabel>
                            <Input type='text' ms='2' placeholder='Last Name' />
                        </Flex>
                    </FormControl>
                    <FormControl mt={6} id="LastName">
                        <Flex>
                            <FormLabel display='flex' alignItems='center' pt='2'>description</FormLabel>
                            <Input type='text' ms='1' placeholder='Last Name' />
                        </Flex>
                    </FormControl>
                </Box>
                <ProfilePicture open={open} setOpen={() => setOpen(false)} />
            </Flex>
        </AfterAuth>
    )
}

export default ViewProfile