import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import Floating from './Floating'
import { Logo } from './Logo'

const SignUp = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('white', '#011729')
  const btnbg = useColorModeValue('#011729', 'white')
  const bx = useColorModeValue('rgb(206, 206, 206)', 'rgb(71, 71, 71)')
  const navigate = useNavigate()



  React.useEffect(() => {
		let signin = localStorage.getItem("login");
		if (signin) {
			navigate("/dashboard");
		}
    else{
      navigate('/signup')
    }
	}, []);

  return (
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
        <Stack spacing="8">
          <Stack spacing="3" align="center">
            <Logo />
            <Stack spacing="1" textAlign="center">
              <Heading fontSize={25}>Sign Up</Heading>
              <Text fontSize={13} Muted>
                Sign in to your account
              </Text>
            </Stack>
          </Stack>
          <Stack spacing="6">
            <Stack spacing="4">
              <Floating type={'email'} name={'Email'} />
              <Floating type={'password'} name={'Password'} />
              <Button
                bg={'blue.500'}
                color="white"
                _hover={{ bg: 'blue.600' }}
                _active={{ bg: 'blue.500' }}
                variant="solid"
                onClick={() => navigate('/userInfo')}
              >
                Continue with Email
              </Button>
            </Stack>
          </Stack>
          <Stack spacing="0.5" align="center">
            <Text fontSize="sm" color="muted">
              if Signed Up
            </Text>

            <Button
              variant="link"
              colorScheme="blue"
              size="sm"
              onClick={()=> navigate('/signin')}
            >
              Sign In
            </Button>
          </Stack>
          <Text fontSize="xs" color="subtle" textAlign="center">
            By continuing, you acknowledge that you have read, understood, and
            agree to our terms and condition
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}
export default SignUp
