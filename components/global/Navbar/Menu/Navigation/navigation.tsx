import { Box, Flex } from "@chakra-ui/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { NavItem } from "./navItem";

interface INavigation {
  mobile?: boolean;
}

export const Navigation: FC<INavigation> = ({ mobile }) => {
  return (
    <Flex
      fontFamily="Mulish, sans-serif"
      gridGap={{base: "45px", lg: "18px", xl: "45px"}}
      fontSize="14px"
      flexDir={{ base: "column", lg: "initial" }}
      zIndex="1"
      textAlign={{ base: "center", lg: "initial" }}

      fontWeight="600"
      letterSpacing="0.1em"
      display={{ base: mobile ? "flex" : "none", lg: "flex" }}
      css={{
        ".active": {
          fontWeight: "800",
        },
      }}
    >
      <NavItem url="/">Investor</NavItem>
      <NavItem url="/creator">Creator</NavItem>
      <NavItem url="/tickets">Call-up ticket</NavItem>
      <NavItem url="/stake">Stake</NavItem>
      <NavItem url="https://casperarmy.io/">Army NFT</NavItem>
    </Flex>
  );
};
