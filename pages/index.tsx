import type { NextPage } from "next";
import { Flex, Box } from "@chakra-ui/layout";
import { CenterContainer } from "../components/shared/containers/centerContainer";
import React from "react";
import { Navbar } from "../components/global/Navbar/navbar";
import Link from "next/link";
import { Image } from "@chakra-ui/image";
import { Partners } from "../components/pages/index/Partners/partners";
import { Countdown } from "../components/pages/index/Countdown/countdown";
import { EffectAssets, ElementAssets, IconAssets } from "../config";
import { BackgroundDark } from "../components/shared/containers/backgroundDark";
import { NFT } from "../components/shared/NFT/nft";
import { Features } from "../components/pages/index/Features/features";
import { Footer } from "../components/global/Footer/footer";
import { Steps } from "../components/shared/Steps/steps";
import { PageHeader } from "../components/shared/PageHeader";
import { Grid } from "@chakra-ui/react";
import { HeaderButton } from "../components/shared/Header/headerButton";
import {
  IndexHeading,
  IndexHeadingAddon,
} from "../components/pages/index/header";

const Home: NextPage = () => {
  return (
    <Flex overflowX="hidden" flexDir="column" bg="#161616" alignItems="center">
      <CenterContainer>
        <Box pos="relative">
          <Image
            src={EffectAssets.mesh}
            zIndex="-20"
            pos="absolute"
            right="-50%"
            top="-300px"
            transform="rotate(220deg), translateY(-50%)"
            filter="blur(180px)"
          />
        </Box>
        <Navbar />
        <PageHeader
          addon={<IndexHeadingAddon />}
          description={
            "Casper Network community project that unites DAO platform for creators and investors with project incubation HUB and Venture Capital"
          }
          label={"Welcome to casper army"}
          heading={<IndexHeading />}
        />
        <Box pos="relative">
          <Image
            src={EffectAssets.elipse}
            zIndex="-20"
            pos="absolute"
            w="700px"
            left="-30%"
            top="-400px"
            transform="rotate(20deg), translateY(-50%)"
            filter="blur(180px)"
          />
        </Box>
        <Partners />
        <Countdown />
      </CenterContainer>
      <Features />
      <CenterContainer>
        <Steps
          stepList={[
            {
              content:
                "By purchasing your ticket now, you secure lifetime access to the platform at a lower price and earn extra points that increase your chance of winning the CasperArmyNFT airdrop",
              heading: "Buy NFT Ticket",
              index: 1,
              label: "USER ACCESS BY CALL-UP TICKET",
              buttonText: "BUY YOUR OWN TICKET",
              image: ElementAssets.tickets,
              soon: false,
              reversed: false,
            },
            {
              content:
                "Stake your CSPR on CasperArmy's validator to unlock all the platform's tools while increasing your points in the rating system",
              heading: "Stake CSPR",
              index: 2,
              label: "USER ACCESS BY CALL-UP TICKET",
              buttonText: "SEE OUR EKO VALIDATOR",
              image: ElementAssets.validator,
              soon: false,
              reversed: true,
            },
            {
              content:
                "CasperArmy community member evaluation system is based on the analysis of many factors, which include, among others, activity and commitment. Artificial intelligence algorithms will objectively evaluate the user's participation in the CasperArmy.",
              heading: "Launch App",
              index: 3,
              label: "USER RATING BY AI",
              buttonText: "SOON",
              image: ElementAssets.points,
              soon: true,
              reversed: false,
            },
          ]}
        />
      </CenterContainer>
      <NFT />
      <Footer />
    </Flex>
  );
};

export default Home;
