import React from "react";
import { Box, Flex } from "@chakra-ui/layout";

export const LaunchApp = () => {
  return (
    <Flex
      gridGap="23px"
      align="center"
      borderRadius="4px"
      fontSize="16px"
      zIndex="1"
      fontWeight="bold"
      padding="19px 28px"
      fontFamily="Changa"
      justifyContent={{ base: "center", md: "initial" }}
      letterSpacing="3px"
      textAlign="center"
      border="2px solid white"
      cursor="pointer"
      _hover={{ backgroundColor: "white", color: "black" }}
    >
      LAUNCH&nbsp;APP
      <Box
        display={{ base: "none", xl: "block" }}
        bg="#FF0202"
        boxSize="12px"
      ></Box>
    </Flex>
  );
};
