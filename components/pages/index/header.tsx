import { Grid, Image } from "@chakra-ui/react";
import { IconAssets } from "../../../config";
import { HeaderButton } from "../../shared/Header/headerButton";

export const IndexHeading = () => (
  <>
    First Venture Capital with
    <br /> DAO on the{" "}
    <span
      style={{
        fontSize: "110%",
        WebkitTextStroke: "1px red",
        color: "transparent",
      }}
    >
      Casper
    </span>{" "}
    Network
  </>
);

export const IndexHeadingAddon = () => (
  <Grid
    templateColumns={{ base: "auto", md: "1fr 1fr" }}
    templateRows={{ base: "1fr 1fr", md: "auto" }}
    gridGap={{ base: "8px", md: "22px" }}
	w={{base: "80vw", md: 'auto'}}

  >
    <HeaderButton>
      Buy Call-Up Ticket
      <Image src={IconAssets.arrowRight} />
    </HeaderButton>
    <HeaderButton ghost>How to become member</HeaderButton>
  </Grid>
);
