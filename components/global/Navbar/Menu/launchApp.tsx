import React, { useEffect, useMemo, useState } from "react";
import { Box, Flex } from "@chakra-ui/layout";
import { useWeb3 } from "@3rdweb/hooks";
import {
  CasperClient,
  CasperServiceByJsonRPC,
  CLPublicKey,
  DeployUtil,
} from "casper-js-sdk";
import { isConnected } from "casper-js-sdk/dist/lib/Signer";
import { Grid } from "@chakra-ui/react";

const apiUrl =
  "020377bc3ad54b5505971e001044ea822a3f6f307f8dc93fa45a05b7463c0a053bed";
const casperService = new CasperServiceByJsonRPC(apiUrl);
const casperClient = new CasperClient(apiUrl);

export const LaunchApp = () => {
  const [state, setState] = useState<string | null>(null);

  const visibleAddress = useMemo(
    () =>
      state
        ? state.slice(0, 4) + "..." + state.substring(state.length - 5)
        : "",
    [state]
  );



  const [showDisconnect, setShowDisconnect] = useState<boolean>(false);

  return (
    <Flex
      gridGap={"23px"}
      align="center"
      borderRadius="4px"
      fontSize="16px"
      zIndex="999999"
      fontWeight="bold"
      padding={state ? "8px 28px" : "15px 28px"}
      fontFamily="Changa"
      justifyContent={{ base: "center", md: "initial" }}
      letterSpacing="3px"
      textAlign="center"
      border="2px solid white"
      cursor="pointer"
      _hover={{ backgroundColor: "white", color: "black" }}
      onClick={async () => {
        console.log(window)
        console.log(window.casperlabsHelper)
        try {
          if (state) {
            await window.casperlabsHelper.disconnectFromSite();
            setState(null);
          } else {
            if (!state) {
              await window.casperlabsHelper.requestConnection();
              setState(await window.casperlabsHelper.getActivePublicKey());
            }
          }
        } catch (e) {
          console.log(e);
        }
      }}
    >
      {state ? (
        <Grid
          _hover={{ color: "black" }}
          onMouseOver={() => setShowDisconnect(true)}
          onMouseOut={() => setShowDisconnect(false)}
        >
          <Box _hover={{ color: "black" }}>
            {showDisconnect ? "DISCONNECT" : "CONNECTED"}
            <br />
            {visibleAddress}
          </Box>
        </Grid>
      ) : (
        "CONNECT WALLET"
      )}
    </Flex>
  );
};
