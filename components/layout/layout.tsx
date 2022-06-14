import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { Footer } from "../global/Footer/footer";
import { Navbar } from "../global/Navbar/navbar";
import { CenterContainer } from "../shared/containers/centerContainer";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>CasperArmy - DAO platform for creators and investors with project incubation HUB and Venture Capital</title>
      </Head>
      <Flex
        overflowX="hidden"
        flexDir="column"
        bg="#161616"
        alignItems="center"
      >
        <CenterContainer>
          <Navbar />
        </CenterContainer>
		
        {children}
        <Footer />
      </Flex>
    </>
  );
};
