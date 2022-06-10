import type { NextPage } from "next";
import { Flex, Box } from "@chakra-ui/layout";
import { CenterContainer } from "../components/shared/containers/centerContainer";
import React from "react";
import { Navbar } from "../components/global/Navbar/navbar";
import { ElementAssets } from "../config";
import { NFT } from "../components/shared/NFT/nft";
import { Footer } from "../components/global/Footer/footer";
import { Steps } from "../components/shared/Steps/steps";
import { PageHeader } from "../components/shared/PageHeader";

import {
  CreatorHeadingAddon,
  IndexHeadingAddon,
} from "../components/pages/index/header";
import { Features } from "../components/pages/index/Features/features";
import { CreatorFeatures } from "../components/pages/index/Features/creatorFeatures";
import { Layout } from "../components/layout/layout";

const Home: NextPage = () => {
  return (
    <Flex  flexDir="column" alignItems="center">
      <CenterContainer>
        <Box pos="relative">
          <Box
            bg="linear-gradient(180deg, #2502FF 0%, #FF0202 100%);"
            zIndex="-20"
            pos="absolute"
            right="0%"
            boxSize={{ base: "200px", md: "400px" }}
            top="0px"
            transform="translate( 70%, 30%)"
            filter={{ base: "blur(80px)", md: "blur(160px)" }}
          />
        </Box>
      
      </CenterContainer>
      <CenterContainer>
        <PageHeader
          addon={<CreatorHeadingAddon />}
          description={
            "Casper Network community project that unites DAO platform for creators and investors with a project incubation HUB Decentralized Autonomous Launchpad and Venture Capital"
          }
          label={"Welcome to casper army"}
          heading="First DAO with DAL on the Casper Network"
        />

        <Box pos="relative">
          <Box
            bg="linear-gradient(180deg, #2502FF 0%, #FF0202 100%);"
            zIndex="-20"
            pos="absolute"
            left="0%"
            boxSize={{ base: "200px", md: "400px" }}
            bottom="0px"
            transform="translate(-40%, -0%)"
            filter={{ base: "blur(80px)", md: "blur(160px)" }}
          />
        </Box>
      </CenterContainer>
      <CreatorFeatures />
      <CenterContainer>
        <Steps
          stepList={[
            {
              content:
                "By purchasing your ticket now, you secure lifetime access to the platform at a lower price and earn extra points that increase your chance of winning the CasperArmyNFT airdrop.",
              heading: "Buy NFT Ticket",
              index: 1,
              label: "USER ACCESS BY CALL-UP TICKET",
              buttonText: "Purchase now",
              image: ElementAssets.tickets,
              soon: false,
              reversed: false,
              href: "",
            },
            {
              content:
                "Be transparent. Verify your company/personal data and gain credibility, support from CasperArmy and trust from investors.",
              heading: "Get Access",
              index: 2,
              label: "CREATOR VERIFICATION",
              buttonText: "SOON",
              image: ElementAssets.AmlKyc,
              soon: true,
              reversed: true,
              href: "",
            },
            {
              content:
                "Introduce your project for incubation, pitch it to the investor community, let the community vote, get marketing and developer support, create a contract and token, launch a seed round sale and get funded.",
              heading: "Launch App",
              index: 3,
              label: "CREATORS PLATFORM",
              buttonText: "SOON",
              image: ElementAssets.incubationHub,
              soon: true,
              reversed: false,
              href: "",
            },
          ]}
        />
      </CenterContainer>
      <NFT />
     
    </Flex>
  );
};

(Home as any).getLayout = function getLayout(page : any) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}


export default Home;
