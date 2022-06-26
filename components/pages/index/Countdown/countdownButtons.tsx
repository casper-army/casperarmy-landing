import { Box, Flex, Grid } from "@chakra-ui/layout";
import { Image, Link } from "@chakra-ui/react";
import { IconAssets } from "../../../../config";

export const CountdownButtons = () => {
  return (
    <Grid
      templateColumns={{ base: "auto 50px", md: "auto 70px" }}
      height={{ base: "50px", md: "70px" }}
      gridGap={{ base: "9px", md: "13px" }}
      fontSize={{ base: "12px", md: "13px" }}
      position="relative"
      zIndex="0"
    >
      <Link href="https://docs.casperarmy.org/docs/PRODUCTS%20AND%20SERVICES/2.7-call-up-ticket" display="grid" position="relative" zIndex="10">
        <Flex
          border="2px solid white"
          padding={{ base: "0px 10px", md: "0px 80px" }}
          align="center"
          gridGap="20px"
          textTransform="uppercase"
          fontWeight="bold"
          fontFamily="Sora, sans-serif"
          textDecoration="none"
          _hover={{background: 'white', color: 'black'}}
        >
          What are call up tickets
          <Image
            display={{ base: "none", md: "block" }}
            src={IconAssets.arrowRightBrand}
          />
        </Flex>
      </Link>
      <Flex border="2px solid red" align="center" justify="center" _hover={{filter: "grayscale(1)"}}>
        <Image src={IconAssets.bell} />
      </Flex>
    </Grid>
  );
};
