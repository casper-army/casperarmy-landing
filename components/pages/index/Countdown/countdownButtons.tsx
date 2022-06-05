import { Box, Flex, Grid } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { IconAssets } from "../../../../config";

export const CountdownButtons = () => {
  return (
    <Grid
      templateColumns={{ base: "auto 50px", md: "auto 70px" }}
      height={{ base: "50px", md: "70px" }}
      gridGap={{ base: "9px", md: "13px" }}
      fontSize={{ base: "12px", md: "13px" }}
    
    >
      <Flex
        border="2px solid white"
        padding={{ base: "0px 10px", md: "0px 80px" }}
        align="center"
        gridGap="20px"
        textTransform="uppercase"
        fontWeight="bold"
        fontFamily="Sora, sans-serif"
        
      >
        What is Call-up ticket
        <Image
          display={{ base: "none", md: "block" }}
          src={IconAssets.arrowRightBrand}
        />
      </Flex>
      <Flex border="2px solid red" align="center" justify="center">
        <Image src={IconAssets.bell} />
      </Flex>
    </Grid>
  );
};
