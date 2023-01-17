import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { CardWithAvatar } from './CardWithAvatar'
import { FollowerCount } from './FollowerCount'
import { UserInfo } from './UserInfo'

const Card = () => {

  const navigate = useNavigate()

  return (
    <CardWithAvatar
      key="Melinda Marcus">
      <UserInfo mt="3" name="Melinda Marcus" bio="Design Engineer at Cloth Studios" isVerified='true' />
      <FollowerCount my="4" count='0' />
      <Button
        variant="outline"
        colorScheme="blue"
        rounded="full"
        size="sm"
        width="full"
        onClick={() => navigate('/ViewProfile')}
      >
        View Profile
      </Button>
      <Flex direction={'column'} py={2}>
        <Button
          variant="ghost"
          colorScheme="blue"
          rounded="full"
          size="sm"
          width="full"
        >
          Change Password
        </Button>
        <Button
          variant="ghost"
          colorScheme="blue"
          rounded="full"
          size="sm"
          width="full"
        >
          Log Out
        </Button>
      </Flex>
    </CardWithAvatar>
  )
}
export default Card
