import React from 'react'
import {
  Container,
  Heading,
  VStack,
  Box,
  Text,
  ButtonGroup,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react'
import Nav from './Nav/Nav'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  return (
    <Box>
      <Nav />
      <Container>
        <VStack h={'100vh'} pt={20} display="grid" justifyContent="center">
          <Box display={'grid'} py={20} placeItems="center">
            <Heading
              fontSize={{
                base: 50,
                lg: 50,
                md: 50,
                sm: 35,
              }}
              width="70vw"
              className="xs"
              textAlign={'center'}
            >
              Welcome to Our Teams and <br /> Projects{' '}
              <span style={{ color: '#4fd1c5' }}>in our Website</span>
            </Heading>
            <Text
              textAlign={'center'}
              py={5}
              fontSize={19}
              width="70%"
              color={'#a0aec0'}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              dolorem totam autem fugit eaque odit officiis corrupti deleniti
              voluptas! Quibusdam fugit totam vel?
            </Text>
            <ButtonGroup spacing={5} py={5}>
              <Button
                fontSize={20}
                px={10}
                py={7}
                bg={'#4fd1c5'}
                color="black"
                _hover={{ bg: '#5f9d95' }}
                onClick={() => navigate('/signin')}
              >
                Get Started
                <ArrowForwardIcon />
              </Button>
              <Button fontSize={20} px={10} py={7}>
                About US
              </Button>
            </ButtonGroup>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Home
