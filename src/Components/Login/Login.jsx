import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Floating from "./Floating";
import { Logo } from "./Logo";
import { useNavigate } from "react-router-dom";
import Facebook from "../SocialLogin/Facebook";
import Github from "../SocialLogin/Github";
import Google from "../SocialLogin/Google";

const Login = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#011729");
  const btnbg = useColorModeValue("#011729", "white");
  const bx = useColorModeValue("rgb(206, 206, 206)", "rgb(71, 71, 71)");
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("login", true);
    navigate("/dashboard");
  };

  useEffect(() => {
    let signin = localStorage.getItem("login");
    if (signin) {
      navigate("/dashboard");
    } else {
      navigate("/signin");
    }
  }, []);

  return (
    <Box
      bgGradient={{
        sm: "linear(to-r, blue.900, purple.900)",
      }}
      height={"100vh"}
      display="grid"
      alignItems={"center"}
      px={7}
    >
      <Button
        position={"absolute"}
        onClick={toggleColorMode}
        top="20px"
        right="20px"
        color={bg}
        bg={btnbg}
        userSelect="none"
        _hover="none"
      >
        {colorMode === "dark" ? (
          <i class="bi bi-brightness-high-fill"></i>
        ) : (
          <i class="bi bi-moon-stars-fill"></i>
        )}
      </Button>
      <Container
        maxW="md"
        px={{
          base: "4",
          sm: "10",
        }}
        bg={bg}
        py={5}
        // style={{ boxShadow: "0px 0px 10px 0px " + bx }}
        borderRadius={{
          base: "none",
          sm: "xl",
        }}
      >
        <Stack spacing="8">
          <Stack spacing="3" align="center">
            <Logo />
            <Stack spacing="1" textAlign="center">
              <Heading fontSize={25}>Sign in</Heading>
              <Text fontSize={13} Muted>
                Sign in to your account
              </Text>
            </Stack>
          </Stack>
          <Stack spacing="6">
            <Stack spacing="4">
              <Floating type={"email"} name={"Email"} />
              <Floating type={"password"} name={"Password"} />
              <Button
                bg={"blue.500"}
                color="white"
                _hover={{ bg: "blue.600" }}
                _active={{ bg: "blue.500" }}
                variant="solid"
                onClick={login}
              >
                Sign In
              </Button>
            </Stack>
          </Stack>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Google />
            {/* <Facebook /> */}
            <Github />
          </Box>
          <Stack spacing="0.5" style={{ margin: "10px" }}>
            <Text fontSize="sm" textAlign={'center'} color="muted">
              if Doesn't Signed Up
            </Text>
            <Button
              variant="link"
              colorScheme="blue"
              size="sm"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </Button>
          <Flex justifyContent={'space-between'}>
          <Button
              variant="link"
              colorScheme="blue"
              size="sm"
              mt={2}
              onClick={() => navigate("/forgotpass")}
            >
              Forgot Password
            </Button>
            <Button
              variant="link"
              colorScheme="blue"
              size="sm"
              mt={2}
              onClick={() => navigate("/ChangePassword")}
            >
             Change Password
            </Button>
          </Flex>
          </Stack>


          <Text
            style={{ marginTop: "0px" }}
            fontSize="xs"
            color="subtle"
            textAlign="center"
          >
            By continuing, you acknowledge that you have read, understood, and
            agree to our terms and condition
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
export default Login;
