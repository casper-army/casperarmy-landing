import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { ElementAssets, IconAssets } from "../../../../../config";
import { HeaderButton } from "../../../../shared/Header/headerButton";
import { CustomHeader } from "../../../../shared/typography/CustomHeader";
import { Paragraph } from "../../../../shared/typography/Paragraph";
import { GlassIcon } from "../../TopIcons/glassIcon";

export const StartStaking = () => {
  return (
    <Grid gridGap="24px">
      <CustomHeader>How to start staking?</CustomHeader>
      <Paragraph>
        To start delegating CSPR on our validator you will need to have a Casper
        Signer or Ledger hardware wallet. If you don't have it please read our
        tutorial on how to set up a Casper Signer wallet to delegate your cspr
        or tutorial that explains how to start delegating with Ledger.
      </Paragraph>
      <Grid templateColumns={{base: "1fr", md: "1fr auto"}} gap={{base: "50px", md : "100px"}} m="30px 0px">
        <Flex flexDir="column" gap="38px">
          <CustomHeader smaller>CasperArmy is eco-friendly</CustomHeader>
          <Paragraph>
            The fate of our planet is particularly important to us. We want the
            development of blockchain technology and our business to not
            contribute to the degradation of the natural environment in which we
            live and will live for generations to come. The choice of the Casper
            Network was obvious, Casper Network is one of the most
            energy-efficient blockchains and continues to improve its technology
            in this regard.
          </Paragraph>
          <Paragraph>
            We strive to minimise our carbon footprint. Therefore, during the
            selection process for the service provider to host our node, it was
            essential that the provider uses renewable energy sources.
          </Paragraph>
        </Flex>
        <Flex justifyContent="center" align="center">
          <Image maxW="60vw" src={ElementAssets.ecofriendlyBig} />
        </Flex>
      </Grid>
      <Box pr={{ base: "initial", md: "200px" }}>
        <Paragraph>
          The CasperArmy validator is hosted by www.hetzner.com. Hetzner uses
          green energy-efficient servers powered by electricity obtained from
          100% renewable energy sources. You can read more about this here
          
        </Paragraph>
      </Box>

      <Flex justifyContent="flex-start">
        <HeaderButton>Stake with CasperArmy</HeaderButton>
      </Flex>
    </Grid>
  );
};
