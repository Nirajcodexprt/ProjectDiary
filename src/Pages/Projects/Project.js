import { Box, Button, ButtonGroup, Flex, Heading, HStack, Icon, IconButton, Stack, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue, VStack } from '@chakra-ui/react'
import React from 'react'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'
import { NavLink, useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import AfterAuth from '../../HOC/AfterAuth'
import { mainAtom } from '../../recoil/Atom'

function Project() {

    const BtnColor = useColorModeValue('#000', '#fff')

    const projects = useRecoilValue(mainAtom)
    // console.log('projects', projects)

    return (
        <>
            <AfterAuth>
                <HStack justifyContent={'space-between'}>
                    <Heading>Project</Heading>
                    <NavLink to={'/projects/createProject'}>
                        <Button bg={'cadetblue'} _hover='none' fontWeight='700' color={BtnColor}>Create Project</Button>
                    </NavLink>
                </HStack>
                <Stack mt="7">
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Project Name</Th>
                                <Th>Project Budget</Th>
                                <Th>Starting Date</Th>
                                <Th>Delivery Date</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {projects.length ? (projects?.map((obj, i) => (
                                <Tr>
                                    <Td>{obj.projectName}</Td>
                                    <Td>{obj.projectBudget}</Td>
                                    <Td>{obj.StartingDate}</Td>
                                    <Td>{obj.DeliveryDate}</Td>
                                    <Td>
                                        <IconButton
                                            icon={<FiEdit2 fontSize="1.25rem" />}
                                            variant="ghost"
                                            aria-label="Edit member"
                                        />
                                        <IconButton
                                            icon={<FiTrash2 fontSize="1.25rem" />}
                                            variant="ghost"
                                            aria-label="Delete member"
                                        />
                                    </Td>
                                </Tr>
                            ))
                            ) : "No records found"}
                        </Tbody>
                    </Table>
                </Stack>
            </AfterAuth>
        </>
    )
}

export default Project
