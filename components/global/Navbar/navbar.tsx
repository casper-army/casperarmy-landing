import { Flex, Box, Grid } from "@chakra-ui/layout";
import React from "react";
import { Menu } from "./Menu/menu";
import { Topbar } from "./Topbar/topbar";

export const Navbar = () => {
  return (
    <Grid bg="transparent" position="relative" zIndex="2000">
      _hover={{ background: "#FF0202", color: "white", }} // dodałem hover w menu
      <Topbar />
      <Menu />
    </Grid>
  );
};
