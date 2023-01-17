import { Text } from '@chakra-ui/react'
import React from 'react'
import AfterAuth from '../../HOC/AfterAuth'

function Member() {
    return (
        <>
            <AfterAuth>
                <Text fontSize='20px'>Hello Member</Text>
            </AfterAuth>
        </>
    )
}

export default Member