import { Flex, Box, Grid } from "@chakra-ui/layout";
import React from "react";
import { Menu } from "./Menu/menu";
import { Topbar } from "./Topbar/topbar";

export const Navbar = () => {
  return (
    <Grid bg="transparent" zIndex="20">
      <Topbar />
      <Menu />
    </Grid>
  );
};
