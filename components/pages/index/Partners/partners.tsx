import React from "react";
import { Flex, Box } from "@chakra-ui/layout";
import { PartnerAssets, PartnerUrls } from "../../../../config";
import Link from "next/link";
import { Image } from "@chakra-ui/image";

const partnersList = [

  {
    key: "cspr pl",
    image: PartnerAssets.csprPl,
    url: PartnerUrls.csprPl,
  },
  {
    key: "awesome casper",
    image: PartnerAssets.awesomecasper,
    url: PartnerUrls.awesomecasper,
  },
  {
    key: "casper blockchain",
    image: PartnerAssets.casperblockchain,
    url: PartnerUrls.casperblockchain,
  },

  {
    key: "tubbly",
    image: PartnerAssets.tubbly,
    url: PartnerUrls.tubbly,
  },
];

export const Partners = () => {
  return (
    
    <Flex
      gridGap={{ base: "40px", md: "96px" }}
      align="center"
      overflowX="scroll"
      padding="20px 0px"
      justify="center"
      css={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        '&::-webkit-scrollbar-track': {
          display: 'none',
        },
        '&::-webkit-scrollbar-thumb': {
          display: 'none'
        },
      }}
    >
      {partnersList.map((partner) => {
        return (
          <Link key={partner.key} href={partner.url}>
            <Image cursor="pointer" src={partner.image} />
          </Link>
        );
      })}
    </Flex>
  );
};
