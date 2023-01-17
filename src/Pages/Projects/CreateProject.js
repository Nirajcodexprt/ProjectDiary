import { Box, Button, FormControl, FormLabel, Heading, HStack, Input, Divider, InputGroup, Stack, Flex, Text, Textarea, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import AfterAuth from '../../HOC/AfterAuth'

function CreateProject() {

    const navigate = useNavigate()
    const BtnColor = useColorModeValue('#000', '#fff')

    return (
        <>
            <AfterAuth>
                <HStack justifyContent='space-between'>
                    <Heading>Create Project</Heading>
                    <Button bg={'cadetblue'} _hover='none' fontWeight='800' color={BtnColor} onClick={() => navigate(-1)}>Back</Button>
                </HStack>
                <Box
                    as="form"
                    bg="bg-surface"
                    boxShadow={useColorModeValue('sm', 'sm-dark')}
                    borderRadius="lg"
                >
                    <Stack
                        spacing="5"
                        py={{
                            base: '5',
                            md: '6',
                        }}
                    >
                        <Stack
                            spacing="6"
                            direction={{
                                base: 'column',
                                md: 'row',
                            }}
                        >
                            <FormControl id="firstName">
                                <FormLabel>Project Name</FormLabel>
                                <Input type='text' placeholder='Project Name' />
                            </FormControl>
                            <FormControl id="lastName">
                                <FormLabel>Project Budget</FormLabel>
                                <Input type='text' placeholder='Project Budget' />
                            </FormControl>
                        </Stack>
                        <FormControl id="street">
                            <FormLabel>Project Details</FormLabel>
                            <Textarea type='text' placeholder='Project Details' />
                        </FormControl>
                        <Stack
                            spacing="6"
                            direction={{
                                base: 'column',
                                md: 'row',
                            }}
                        >
                            <FormControl id="city">
                                <FormLabel>Starting Date</FormLabel>
                                <Input type={'date'} />
                            </FormControl>
                            <FormControl id="state">
                                <FormLabel>Delivery Date</FormLabel>
                                <Input type={'date'} />
                            </FormControl>
                        </Stack>
                    </Stack>
                    <Divider />
                    <Flex
                        direction="row-reverse"
                        py="4"
                    >
                        <Button bg={'cadetblue'} _hover='none' fontWeight='800' color={BtnColor} >Save</Button>
                    </Flex>
                </Box>
            </AfterAuth>
        </>
    )
}

export default CreateProject