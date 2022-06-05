import { Flex, Grid, Image } from "@chakra-ui/react";
import React from "react";
import { ElementAssets } from "../../../../config";
import { BackgroundDark } from "../../../shared/containers/backgroundDark";
import { CenterContainer } from "../../../shared/containers/centerContainer";
import { SectionHeading } from "../../../shared/sectionHeading";
import { BenefitItem } from "./benefitItem";

export interface Benefit {
  title: string;
  description: string;
}

const benefitList: Benefit[] = [
  {
    title: "Access & Membership",
    description:
      "Gives you access to a creative platform. In combination with staking it entitles you to use all the tools of the CasperArmy platform",
  },
  {
    title: "Allocation",
    description:
      "Guarantees allocation in future projects incubated on the platform",
  },
  {
    title: "More points",
    description:
      "Each ticket is assigned a fixed amount of points. Increase your points by buying more tickets",
  },
  {
    title: "CasperArmy NFT",
    description:
      "Members wil have the chance to win CasperArmy NFTs. Ticket holders will have access to our NFT sale",
  },
  {
    title: "DAO Governance",
    description:
      "Your ticket gives you a vote in decisions regarding the development of the platform and products incubated on it",
  },
];

export const Benefits = () => {
  return (
    <BackgroundDark>
      <CenterContainer>
        <SectionHeading
          centered
          content={"Benefits of owning a ticket"}
          label="Why is it worth it?"
        />
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gridGap="24px"
          mb={{ base: "54px", md: "150px" }}
        >
          <Flex
            pos="relative"
            display={{ base: "none", md: "flex" }}
            justifyContent="center"
            align="flex-start"
          >
            <Image w="80%" src={ElementAssets.ticketFront} />
          </Flex>
          <Flex flexDir="column" gridGap="50px">
            {benefitList.map((benefit, index) => {
              return (
                <BenefitItem
                  value={benefit}
                  index={"0" + (index + 1).toString()}
                  key={benefit.title}
                />
              );
            })}
          </Flex>
        </Grid>
      </CenterContainer>
    </BackgroundDark>
  );
};
