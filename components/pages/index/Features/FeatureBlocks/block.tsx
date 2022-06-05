import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import { IconAssets } from "../../../../../config";
import { GlassContainer } from "../glassContainer";
import { FeatureLabel } from "./featureBlocks";

interface IBlock {
  label: string;
  heading: string;
  text: string;
  image: string;
  bigImage?: boolean;
}

export const Block: FC<IBlock> = ({
  label,
  heading,
  text,
  image,
  bigImage = false,
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <GlassContainer
      onClick={() => {
        setOpen(!isOpen);
      }}
    >
      <FeatureLabel>{label}</FeatureLabel>
      {bigImage ? <Image w="200px" src={image} /> : <Box></Box>}
      {!bigImage && (
        <Image
          position="absolute"
          w="65px"
          top="40px"
          right="40px"
          src={image}
        />
      )}
      {isOpen ? (
        <Text mt={bigImage ? "50px" : "0px"}>{text}</Text>
      ) : (
        <Heading>
          <Box
            fontSize={bigImage ? { base: "100%", md: "140%" } : "100%"}
            mt={bigImage ? "40px" : "0px"}
          >
            {heading}
          </Box>
        </Heading>
      )}
      <Flex justify="space-between">
        <Box>Coming soon</Box> {isOpen && <Box><Image src={IconAssets.x}/></Box>}
      </Flex>
    </GlassContainer>
  );
};
