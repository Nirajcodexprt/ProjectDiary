import {
  Avatar,
  Badge,
  Box,
  Checkbox,
  HStack,
  Icon,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import * as React from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { IoArrowDown } from "react-icons/io5";
import { Rating } from "./Rating";
import { members } from "./data";

const MemberTable = (props) => (
  <Table {...props}>
    <Thead>
      <Tr>
        <Th>
          <HStack spacing="3">
            <HStack spacing="1">
              <Text>Name</Text>
              <Icon as={IoArrowDown} color="muted" boxSize="4" />
            </HStack>
          </HStack>
        </Th>
        <Th>Status</Th>

        <Th>Role</Th>

        <Th></Th>
      </Tr>
    </Thead>
    <Tbody>
      {members.map((member) => (
        <Tr key={member.id}>
          <Td>
            <HStack spacing="3">
              <Avatar name={member.name} src={member.avatarUrl} boxSize="10" />
              <Box>
                <Text fontWeight="medium">{member.name}</Text>
              </Box>
            </HStack>
          </Td>
          <Td>
            <Badge
              size="sm"
              colorScheme={member.status === "active" ? "green" : "red"}
            >
              {member.status}
            </Badge>
          </Td>

          <Td>
            <Text color="muted">{member.role}</Text>
          </Td>
          <Td>
            <HStack spacing="1">
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
            </HStack>
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);
export default MemberTable;
