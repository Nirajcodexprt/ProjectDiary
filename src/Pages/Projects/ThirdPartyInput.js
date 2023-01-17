import React from "react";
import { FormControl, Flex, Textarea, Button, Divider } from "@chakra-ui/react";

const ThirdPartyInput = ({ creadential, removeRow }) => {
  return (
    <div>
      {creadential.map((val, i) => (
        <>
          <FormControl gap={5} display={"grid"} my={5}>
            <Flex gap={5}>
              <Textarea placeholder="Enter Name" resize={"none"}></Textarea>
              <Textarea placeholder="Enter Details" resize={"none"}></Textarea>
            </Flex>
            <Flex gap={5}>
              <Textarea
                placeholder="Enter Credentials"
                resize={"none"}
              ></Textarea>
              <Textarea placeholder="Enter Notes" resize={"none"}></Textarea>
            </Flex>

            <Flex justifyContent={"flex-end"} gap={10}>
              {i >= 1 && (
                <Button width={"100px"} onClick={() => removeRow(i)}>
                  Remove
                </Button>
              )}
            </Flex>
          </FormControl>
          <Divider />
        </>
      ))}
    </div>
  );
};

export default ThirdPartyInput;
