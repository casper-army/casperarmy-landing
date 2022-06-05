import { Flex } from "@chakra-ui/layout";
import { FC } from "react";

interface IHeaderButton {
  ghost?: boolean;
  children: React.ReactNode;
}

export const HeaderButton: FC<IHeaderButton> = ({ ghost, children }) => {
  return (
    <Flex
      borderRadius="3px"
	    textTransform="uppercase"
	    fontFamily="Sora, sans-serif"
	    fontWeight="bold"
      justify="space-between"
      color="white"
      lineHeight="100%"
      align="center"
      p={{base:"20px 25px", md: "25px 40px"}}
      fontSize={{base:"12px", md: "13px"}}
      bg={ghost ? "transaprent" : "#FF0202"}
      border="2px solid #FF0202"
      textAlign="center"

    >
      {children}
    </Flex>
  );
};
