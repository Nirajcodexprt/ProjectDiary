import {
    Box,
    Button,
    Flex,
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
import React, { useState } from "react";

function ProfilePicture({ open, setOpen }) {
    const BtnColor = useColorModeValue("#000", "#fff");

    const [images, setImages] = React.useState("");
    const [imagePreview, setImagePreview] = React.useState("");

    const hiddenFileInput = React.useRef(null);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        hiddenFileInput.current.click();
    };

    const handleImageChange = (event) => {
        const fileUploaded = event.target.files[0];
        if (event.target.files[0]) {
            setImages(event.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImagePreview(reader.result);
            });
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    return (
        <>
            <Modal
                isCentered
                onClose={setOpen}
                isOpen={open}
                motionPreset="slideInBottom"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Change Profile Picture</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex justifyContent="center">
                            <Stack borderRadius="6px">
                                {!imagePreview && (<img className="userImg" src="assets/img.jpeg" />)}
                                {imagePreview && (<img className="userImg" src={imagePreview ? imagePreview : "assets/img.jpeg"} />)}
                            </Stack>
                        </Flex>
                        <Box mt="4" textAlign={"center"} fontWeight="700">
                            <div onClick={handleClick} style={{ cursor: 'pointer' }}>
                                <i class="bi bi-card-image"></i>&nbsp;Select Image
                            </div>
                            <div
                                style={{
                                    height: "0px",
                                    width: "0px",
                                    overflow: "hidden",
                                }}>
                                <input
                                    id='upfile'
                                    type='file'
                                    ref={hiddenFileInput}
                                    onChange={handleImageChange}
                                    style={{ display: "none" }}
                                />
                            </div>
                        </Box>
                    </ModalBody>
                    <ModalFooter display={"flex"} justifyContent="center">
                        <Button bg={"cadetblue"} _hover="none" color={BtnColor}>
                            Upload
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ProfilePicture;
