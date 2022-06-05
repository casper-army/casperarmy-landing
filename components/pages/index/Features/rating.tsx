import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import { EffectAssets } from "../../../../config";
import { SectionHeader } from "../../../texts/sectionHeader";

export const Rating = () => {
  return (
    <Grid
      background="rgba(255, 255, 255, 0.01)"
      boxShadow="inset 0px 0px 12.3205px rgba(255, 255, 255, 0.05), inset 0px 0.724735px 0.724735px rgba(255, 255, 255, 0.15)"
      backdropFilter="blur(23px)"
      borderRadius="17px"
      textAlign="left"
      padding={{ base: "30px", md: "70px" }}
      alignItems="flex-start"
      gap="30px"
      justifyContent="flex-start"
      templateColumns={{ base: "1fr", md: "250px 1fr" }}
      templateRows={{ base: "auto auto", md: "1fr" }}
      zIndex="1"
      m="60px 0px 120px"
      position="relative"
    >
      <Image
        src={EffectAssets.dot}
        w="180px"
        position="absolute"
        zIndex="-1"
        right="-90px"
        display={{ base: "none", md: "block" }}
        top="0"
        bottom="0"
        margin="auto"
      />
      <Image
        src={EffectAssets.dot}
        w={{base: "80px", md:"50px"}}
        position="absolute"
        zIndex="-4"
        right="15%"
        margin="auto"
        top={{base: "-40px", md:"-25px"}}
      />
      <Image
        src={EffectAssets.dot}
        w="40px"
        position="absolute"
        zIndex="-4"
        left="35%"
        margin="auto"
        bottom="-20px"
      />
      <SectionHeader>
        <Box fontSize="34px" mt="17px" textAlign="left">
          Points system & rating
        </Box>
      </SectionHeader>
      <Flex flexDir="column" gap="16px">
        <Box bg="#FF0202" h="5px" w="46px"></Box>
        <Text
          color="#888888"
          fontSize="14px"
          lineHeight="180%"
          fontFamily="Sora, sans-serif"
        >
          The entire CasperArmy platform ecosystem is based on a point system.
          CasperArmy investors are scored based on their engagement in the
          CasperArmy community and the broader CasperArmy ecosystem. This
          ensures that those who dedicate time, effort and capital to
          participate in the CasperArmy community, DAO, VC and staking are
          fairly rewarded. Soldier Rating calculates the quality of each
          investor through ongoing analysis of their investment participation.
        </Text>
      </Flex>
    </Grid>
  );
};
