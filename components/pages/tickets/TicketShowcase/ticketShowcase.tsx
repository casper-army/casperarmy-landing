import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { ElementAssets } from "../../../../config";
import { getParallaxValue, useParallax } from "../../../../hooks/useParralax";
import { CenterContainer } from "../../../shared/containers/centerContainer";

export const TicketShowcase = () => {
  const { ref, result } = useParallax({
    onScroll: useCallback((percentage) => {
      const scrollValue = getParallaxValue(percentage, 180, 0, 45);
      const opacityValue = getParallaxValue(percentage, 0, 1, 45);
      const slideValue = getParallaxValue(percentage, 300, 0, 35);
      return {
        scrollValue: scrollValue,
        opacityValue: opacityValue,
        slideValue: slideValue,
      };
    }, []),
    minWindowWidth: 1000,
  });

  return (
    <CenterContainer>
      <Flex
        justify="center"
        mb="100px"
        position="relative"
        opacity={`${result && result.opacityValue}`}
        transform={`translateY(${result && result.slideValue}px)`}
      >
        <Grid maxW="80vw" position="relative">
          <Image w="100%" src={ElementAssets.ticketFront} />
          <Image
            src={ElementAssets.web3SpinnerTransparent}
            pos="absolute"
            right="0px"
            top="20%"
            display={{base: 'none', md: 'block'}}
            transform={`translateX(50%) rotate(${
              result && result.scrollValue
            }deg)`}
          />
        </Grid>

        <Box
          ref={ref}
          bg="#161616"
          filter="blur(260px)"
          w="80vw"
          h="100%"
          borderRadius="100%"
          pos="absolute"
          zIndex="-1"
        ></Box>
      </Flex>
    </CenterContainer>
  );
};
