import React from 'react'
import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    InputGroup,
    InputRightElement,
    Stack,
    Text,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Floating from '../Login/Floating'
import { Logo } from '../ForgotPassword/Logo'
import { useState } from 'react'

const ChangePassword = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue('white', '#011729')
    const btnbg = useColorModeValue('#011729', 'white')
    const bx = useColorModeValue('rgb(206, 206, 206)', 'rgb(71, 71, 71)')
    const navigate = useNavigate()
    const BtnColor = useColorModeValue("#000", "#fff");

    const [formValue, setFormValue] = useState(
        {
            name: "",
        }
    )

    const handleChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }

    console.log('formValue', formValue)

    const [hidePassword, setHidePassword] = useState(false);
    const [hideConfirmPassword, setHideConfirmPassword] = useState(false);

    return (
        <>
            <Box
                bgGradient={{
                    sm: 'linear(to-r, blue.900, purple.900)',
                }}
                height={'100vh'}
                display="grid"
                alignItems={'center'}
                px={7}
            >
                <Button
                    position={'absolute'}
                    onClick={toggleColorMode}
                    top="20px"
                    right="20px"
                    color={bg}
                    bg={btnbg}
                    userSelect="none"
                    _hover="none"
                >
                    {colorMode === 'dark' ? (
                        <i class="bi bi-brightness-high-fill"></i>
                    ) : (
                        <i class="bi bi-moon-stars-fill"></i>
                    )}
                </Button>
                <Container
                    maxW="md"
                    px={{
                        base: '4',
                        sm: '10',
                    }}
                    bg={bg}
                    py={5}
                    // style={{ boxShadow: '0px 0px 10px 0px ' + bx }}
                    borderRadius={{
                        base: 'none',
                        sm: 'xl',
                    }}
                >
                    <Stack spacing={4}>
                        <Stack align={'center'}>
                            <Logo />
                        </Stack>
                        <Heading fontSize={25} mb="4" textAlign={"center"}>Change Password</Heading>
                        <Floating type={"password"} onChange={handleChange} name={"Old Password"} />
                        <InputGroup>
                            <Floating type={hidePassword ? "text" : "password"} onChange={handleChange} name={"New Password"} />
                            <InputRightElement>
                                {!hidePassword && (
                                    <i
                                        class='bi bi-eye-slash-fill'
                                        onClick={() => setHidePassword(!hidePassword)}>
                                    </i>
                                )}
                                {hidePassword && (
                                    <i
                                        class='bi bi-eye-fill'
                                        onClick={() => setHidePassword(!hidePassword)}>
                                    </i>
                                )}
                            </InputRightElement>
                        </InputGroup>
                        <InputGroup>
                            <Floating type={hideConfirmPassword ? "text" : "password"} onChange={handleChange} name={"Confirm Password"} />
                            <InputRightElement>
                                {hideConfirmPassword && (
                                    <i
                                        class='bi bi-eye-fill'
                                        onClick={() => setHideConfirmPassword(!hideConfirmPassword)}>
                                    </i>
                                )}
                                {!hideConfirmPassword && (
                                    <i
                                        class='bi bi-eye-slash-fill'
                                        onClick={() => setHideConfirmPassword(!hideConfirmPassword)}>
                                    </i>
                                )}
                            </InputRightElement>
                        </InputGroup>
                        <Flex justifyContent={'space-between'}>
                            <Button onClick={() => navigate('/signin')} color={BtnColor} bg="cadetblue" _hover={'none'} px='40px'>Back</Button >
                            <Button color={BtnColor} bg="cadetblue" _hover={'none'} px="40px">Save</Button>
                        </Flex>
                    </Stack>
                </Container>
            </Box>
        </>
    )
}

export default ChangePassword
