import { Flex, Image, Text } from "@chakra-ui/react";
import { IconAssets } from "../../../config";

export const ChatButton = () => {
  return (
    <Flex
      mt="40px"
      padding={{ md: "10px 15px", lg: "18px 35px" }}
      gap="20px"
      justify="flex-start"
      fontWeight="bold"
      fontSize={{ base: "10px", md: "14px", xl: "18px" }}
      border="1px solid rgba(255,255,255,0.1)"
      borderRadius="4px"
      align="center"
      _hover={{ backgroundColor: "white", color: "black" }}
      cursor="pointer"
    >
      <Image src={IconAssets.chat} />
      <Text>Message us</Text>
    </Flex>
  );
};
