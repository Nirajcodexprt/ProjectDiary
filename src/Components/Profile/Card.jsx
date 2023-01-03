import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { CardWithAvatar } from './CardWithAvatar'
import data from './data.json'
import { FollowerCount } from './FollowerCount'
import { UserInfo } from './UserInfo'

const Card = () => (
  <>
    {data.map((user) => {
      const { name, bio, src, isVerified, followerCount } = user
      return (
        <CardWithAvatar
          key={name}
          avatarProps={{
            src,
            name,
          }}
        >
          <UserInfo mt="3" name={name} bio={bio} isVerified={isVerified} />
          <FollowerCount my="4" count={followerCount} />
          <Button
            variant="outline"
            colorScheme="blue"
            rounded="full"
            size="sm"
            width="full"
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
    })}
  </>
)
export default Card
