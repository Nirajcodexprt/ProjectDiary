import { Text } from '@chakra-ui/react'
import React from 'react'
import AfterAuth from '../../HOC/AfterAuth'

function Team() {
    return (
        <>
            <AfterAuth>
                <Text fontSize='20px'>Hello Team</Text>
            </AfterAuth>
        </>
    )
}

export default Team
