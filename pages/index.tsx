import type { NextPage } from "next";
import { Flex, Box } from "@chakra-ui/layout";
import { CenterContainer } from "../components/shared/containers/centerContainer";
import React from "react";
import { Navbar } from "../components/global/Navbar/navbar";
import { Image } from "@chakra-ui/image";
import { Partners } from "../components/pages/index/Partners/partners";
import { Countdown } from "../components/pages/index/Countdown/countdown";
import { EffectAssets, ElementAssets } from "../config";
import { NFT } from "../components/shared/NFT/nft";
import { Features } from "../components/pages/index/Features/features";
import { Footer } from "../components/global/Footer/footer";
import { Steps } from "../components/shared/Steps/steps";
import { PageHeader } from "../components/shared/PageHeader";

import {
  IndexHeading,
  IndexHeadingAddon,
} from "../components/pages/index/header";
import { Layout } from "../components/layout/layout";

const Home: NextPage = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <CenterContainer>
        <Box pos="relative">
          <Box
            bg="linear-gradient(180deg, #2502FF 0%, #FF0202 100%);"
            zIndex="-20"
            pos="absolute"
            right="0%"
            boxSize={{ base: "200px", md: "400px" }}
            top="0px"
            transform="translate( 30%, 30%)"
            filter={{ base: "blur(80px)", md: "blur(160px)" }}
          />
        </Box>

        <PageHeader
          addon={<IndexHeadingAddon />}
          description={
            "A Casper Network community project that unites A DAO platform for creators and investors with project incubation HUB and Venture Capital"
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
                "By purchasing a ticket, you secure lifetime access to the platform at a lower price and earn extra points that increase your chance of winning the CasperArmyNFT airdrop",
              heading: "Purchase a NFT Ticket",
              index: 1,
              label: "USER ACCESS BY CALL-UP TICKET",
              buttonText: "BUY YOUR OWN TICKET",
              image: ElementAssets.tickets,
              soon: false,
              reversed: false,
              href: "",
            },
            {
              content:
                "Stake your CSPR on CasperArmy's validator to unlock all the platform's tools while increasing your points in the rating system",
              heading: "Stake CSPR",
              index: 2,
              label: "INVESTOR VERIFICATION BY STAKING",
              buttonText: "STAKE NOW",
              image: ElementAssets.validator,
              soon: false,
              reversed: true,
              href: "https://cspr.live/validator/020377bc3ad54b5505971e001044ea822a3f6f307f8dc93fa45a05b7463c0a053bed",
            },
            {
              content:
                "CasperArmy community member evaluation system is based on the analysis of many factors, which include, activity and commitment. Artificial intelligence algorithms will objectively evaluate the user's participation in the CasperArmy",
              heading: "Launch App",
              index: 3,
              label: "USER RATING BY AI",
              buttonText: "SOON",
              image: ElementAssets.launchAppHomepage,
              soon: true,
              reversed: false,
              href: "https://testnet.casper.army",
            },
          ]}
        />
      </CenterContainer>
      <NFT />
    </Flex>
  );
};

(Home as any).getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default Home;
