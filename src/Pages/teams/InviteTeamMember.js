import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

const InviteTeamMember = ({ open, onClose }) => {
  const BtnColor = useColorModeValue("#000", "#fff");

  const [hidePassword, setHidePassword] = useState(false);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(false);

  return (
    <>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={open}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Invite Team Member</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormLabel display="flex" alignItems="center">
              Email
            </FormLabel>
            <Input type="Email" placeholder="Enter Email To Invite" />
          </ModalBody>
          <ModalFooter display={"flex"} justifyContent="center">
            <Button
              bg={"cadetblue"}
              _hover="none"
              paddingInline={"30px"}
              color={BtnColor}
            >
              Invite
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default InviteTeamMember;
