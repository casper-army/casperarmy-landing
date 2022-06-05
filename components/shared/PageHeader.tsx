import React, { FC } from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { Welcome } from "../texts/welcome";
import { Heading } from "@chakra-ui/react";
import { TextBasic } from "../texts/textBasic";

interface IPageHeader {
  addon: React.ReactNode;
  label: string;
  heading: React.ReactNode | string;
  description: string;
}

export const PageHeader: FC<IPageHeader> = ({
  addon,
  label,
  heading,
  description,
}) => {
  return (
    <Flex
      m={{ base: "50px 0px", md: "150px 0px" }}
      flexDir="column"
      gridGap="40px"
      align="center"
      textAlign="center"
      position="relative"
      zIndex="1"
    >
      <Welcome lines>{label}</Welcome>
      <Heading
        fontFamily="Sora, sans-serif"
        lineHeight="130%"
        fontSize={{ base: "30px", md: "70px" }}
        padding="0px 10px"
		maxW="1100px"
      >
        {heading}
      </Heading>
      <Box maxWidth="850px" padding="0px 10px">
        <TextBasic>{description}</TextBasic>
      </Box>
      <Box>{addon}</Box>
    </Flex>
  );
};
