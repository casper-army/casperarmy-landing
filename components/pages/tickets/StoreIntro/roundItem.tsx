import { Box, Flex, Image } from "@chakra-ui/react";
import { IconAssets } from "../../../../config";

export const RoundItem = ({
  index,
  price,
  percent,
  max,
}: {
  index: number;
  price: number;
  percent: number;
  max: number;
}) => {
  return (
    <Flex
      flexDir="column"
      align="center"
      gap="20px"
      bg="#171717"
      border="1px dashed #7B7B7B"
      borderRadius="0px 20px 0px 0px"
      padding="23px 27px"
      minWidth="200px"
	  maxWidth='200px'
      position="relative"
      opacity="0.5"
    >
      <Image w="14px" src={IconAssets.lock} />
      <Box textTransform="uppercase">
        Round{" "}
        <Box fontWeight="bold" display="inline-block">
          {index}
        </Box>
      </Box>
      <Flex flexDir="column" gap="10px" align="center">
        <Box fontSize="32px" fontWeight="700">
          <Box display="inline-block" color="#FF0202">
            $
          </Box>
          {price}
        </Box>

        {max != 0 && <Box
          fontSize="14px"
          fontWeight="600"
          letterSpacing="0.19em"
          color="#FF0202"
        >
          {percent}% OFF
        </Box>}
      </Flex>
      <Flex flexDir="column" align="center" gap="8px">
	  {max != 0 && <Box w="140px" h="4px" bg="white" />}
        {max != 0 ? <Box>0 / {max}</Box> : <Box>No limit</Box> }
      </Flex>
    </Flex>
  );
};
