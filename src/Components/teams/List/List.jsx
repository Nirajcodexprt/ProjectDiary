import {
  Avatar,
  AvatarBadge,
  Box,
  Center,
  Checkbox,
  HStack,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react'
import * as React from 'react'
import { members } from './data'

const List = () => (
  <Box bg="bg-surface" py="4">
    <Stack divider={<StackDivider />} spacing="4">
      {members.map((member) => (
        <Stack
          border={'1px'}
          borderRadius="5"
          borderColor={'grey'}
          key={member.id}
          fontSize="sm"
          p="4"
          spacing="4"
        >
          <Stack direction="row" justify="space-between" spacing="4">
            <HStack spacing="3">
              <Checkbox />
              <Avatar src={member.avatarUrl} boxSize="10">
                <AvatarBadge
                  boxSize="4"
                  bg={member.status === 'active' ? 'success' : 'subtle'}
                />
              </Avatar>
              <Box>
                <Text fontWeight="medium" color="emphasized">
                  {member.name}
                </Text>
              </Box>
            </HStack>
            <Text color="muted">{member.lastSeen}</Text>
          </Stack>
          <Text
            color="muted"
            sx={{
              '-webkit-box-orient': 'vertical',
              '-webkit-line-clamp': '2',
              overflow: 'hidden',
              display: '-webkit-box',
            }}
          >
            Candy donut tart pudding macaroon. Soufflé carrot cake choc late
          </Text>
        </Stack>
      ))}
    </Stack>
  </Box>
)
export default List
