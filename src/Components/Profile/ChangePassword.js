import React, { useState } from 'react'
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

const ChangePassword = ({ open, onClose }) => {

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
                    <ModalHeader>Change Password</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormLabel display='flex' alignItems='center'>Old Password</FormLabel>
                        <Input type='password' placeholder='old password' />
                        <FormLabel display='flex' pt='3' alignItems='center'>New Password</FormLabel>
                        <InputGroup>
                            <Input type={hidePassword ? "text" : "password"} placeholder='new password' />
                            <InputRightElement>
                                {!hidePassword && (
                                    <i
                                        class='bi bi-eye-slash-fill'
                                        onClick={() => setHidePassword(!hidePassword)}>
                                    </i>
                                )}
                                {hidePassword && (
                                    <i
                                        class='bi bi-eye-fill'
                                        onClick={() => setHidePassword(!hidePassword)}>
                                    </i>
                                )}
                            </InputRightElement>
                        </InputGroup>
                        <FormLabel display='flex' pt='3' alignItems='center'>Confirm Password</FormLabel>
                        <InputGroup>
                            <Input type={hideConfirmPassword ? "text" : "password"} placeholder='First Name' />
                            <InputRightElement>
                                {hideConfirmPassword && (
                                    <i
                                        class='bi bi-eye-fill'
                                        onClick={() => setHideConfirmPassword(!hideConfirmPassword)}>
                                    </i>
                                )}
                                {!hideConfirmPassword && (
                                    <i
                                        class='bi bi-eye-slash-fill'
                                        onClick={() => setHideConfirmPassword(!hideConfirmPassword)}>
                                    </i>
                                )}
                            </InputRightElement>
                        </InputGroup>
                    </ModalBody>
                    <ModalFooter display={"flex"} justifyContent="center">
                        <Button bg={"cadetblue"} _hover="none" paddingInline={'30px'} color={BtnColor}>
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ChangePassword
