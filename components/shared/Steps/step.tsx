import { Box, Flex, Grid, Heading, Image, Link, Text } from "@chakra-ui/react";
import { FC, useCallback } from "react";
import { ElementAssets } from "../../../config";
import { getParallaxValue, useParallax } from "../../../hooks/useParralax";
import { TextBasic } from "../../texts/textBasic";

interface IStep {
  reversed?: boolean;
  index: number;
  heading: string;
  content: string;
  label: string;
  buttonText: string;
  soon?: boolean;
  image: string;
  href?: string;
}

export const Step: FC<IStep> = ({
  reversed = false,
  index,
  soon = false,
  heading,
  content,
  label,
  buttonText,
  image,
  href,
}) => {
  const { ref, result } = useParallax({
    onScroll: useCallback((percentage) => {
      const moveValue = getParallaxValue(percentage, 200, 0, 45);
      const opacityValue = getParallaxValue(percentage, 0, 1, 30);
      return {
        moveValue: moveValue,
        opacityValue: opacityValue,
      };
    }, []),
    minWindowWidth: 1000,
  });

  return (
    <Grid
      gridGap={{ base: "90px", md: "48px" }}
      gridTemplateColumns={{ base: "initial", md: "1fr 1fr" }}
      gridTemplateRows={{ base: "auto auto", md: "initial" }}
      templateAreas={{ md: reversed ? "'a b'" : "'b a'", base: "'b' 'a'" }}
      padding={{ base: "10px", md: "initial" }}
      ref={ref}
    >
      <Flex
        flexDir="column"
        gridArea="b"
        alignItems="flex-start"
        justifyContent="flex-start"
        gap="14px"
        position="relative"
      >
        <Text fontSize="49px" fontFamily="Sora, sans-serif">
          {index}
        </Text>
        <Text
          color="#FF0202"
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="14px"
          fontFamily="Sora, sans-serif"
        >
          {label}
        </Text>
        {/*<Box ml="1px" w="8px" h="2px" bg="white" />*/}
        <Heading fontSize={{ base: "35px", md: "50px" }} lineHeight="140%">
          {heading}
        </Heading>
        <TextBasic>{content}</TextBasic>
        <Link  href={href}>
          <Flex
            borderRadius="4px"
            mt="40px"
            minW="240px"
            w={{ base: "100%", md: "auto" }}
            fontWeight="bold"
            fontSize="13px"
            border="2px solid #FF0202"
            padding={{ base: "18px", md: "24px" }}
            justify="center"
            cursor={soon ? "default" : "pointer"}
            filter={soon ? "grayscale(1)" : ""}
            _hover={{ backgroundColor: !soon ? "#FF0202" : "transparent" }}
          >
            {buttonText}
          </Flex>
        </Link>
      </Flex>
      <Flex
        gridArea="a"
        justifyContent={reversed ? "flex-start" : "flex-end"}
        align="center"
        transform={`translateX(${
          result && (reversed ? -result?.moveValue : result?.moveValue)
        }px)`}
        opacity={result && result.opacityValue}
      >
        <Image src={image} />
      </Flex>
    </Grid>
  );
};
