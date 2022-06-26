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
import {
  Button,
  Grid,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { IconAssets } from "../../../../config";
import { WalletButton } from "./walletButton";
import { LoggedUser, WalletTypes } from "./LoggedUser/loggedUser";

const apiUrl =
  "020377bc3ad54b5505971e001044ea822a3f6f307f8dc93fa45a05b7463c0a053bed";
const casperService = new CasperServiceByJsonRPC(apiUrl);
const casperClient = new CasperClient(apiUrl);

export const LaunchApp = () => {
  const [state, setState] = useState<string | null>(null);
  const [walletType, setWalletType] = useState<WalletTypes>(
    WalletTypes.CASPER_SIGNER
  );

  const visibleAddress = useMemo(
    () =>
      state
        ? state.slice(0, 4) + "..." + state.substring(state.length - 5)
        : "",
    [state]
  );

  const handleLogout = async () => {
    if (walletType === WalletTypes.METAMASK) {
    } else if (walletType === WalletTypes.CASPER_SIGNER) {
    }

    setState(null);
  };

  const handleMetamaskLogin = () => {};

  const handleCasperSignerLogin = () => {};

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {!state ? (
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
            if (!state) {
              onOpen();
            } else {
              setState(null);
            }
          }}
        >
          CONNECT WALLET
        </Flex>
      ) : (
        <LoggedUser
          address={state}
          wallet={walletType}
          handleLogout={handleLogout}
        />
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color="black" maxW="580px" borderRadius="4px">
          <Grid padding="67px 78px" color="black" gap="9px">
            <Box
              letterSpacing="0.8em"
              ml="2px"
              fontSize="8px"
              fontFamily="Chaney"
              color="black"
            >
              CasperArmy
            </Box>
            <Text fontWeight="800" fontSize="30px">
              Select your wallet
            </Text>

            <Text fontSize="16px" maxW="350px">
              Connect with one of our available wallet or create and connect a
              new wallet.
            </Text>
            <Grid gap="10px" m="15px 0px">
              <WalletButton
                name="Casper Signer"
                icon={IconAssets.casper}
                action={async () => {
                  if (typeof window !== "undefined") {
                    try {
                      window.casperlabsHelper.requestConnection();
                      const isConnected = await window.casperlabsHelper.isConnected();

                      if (!state && isConnected) {
                        console.log(await window.casperlabsHelper);
                        setState(
                          await window.casperlabsHelper.getActivePublicKey()
                        );
                        setWalletType(WalletTypes.CASPER_SIGNER);
                        onClose();
                      }
                    } catch (e) {
                      console.log(e);
                    }
                  }
                }}
              />
              <WalletButton
                name="Metamask"
                icon={IconAssets.metamask}
                action={() => {
                  if ((window as any).ethereum) {
                    (window as any).ethereum
                      .request({ method: "eth_requestAccounts" })
                      .then((res: any) => {
                        // Return the address of the wallet
                        setState(res[0]);
                        setWalletType(WalletTypes.METAMASK);
                        onClose();
                      });
                  } else {
                    alert("install metamask extension!!");
                  }
                }}
              />
            </Grid>
            <Link
              href=""
              fontSize="12px"
              textDecoration="underline"
              fontWeight="500"
            >
              Create new Casper wallet
            </Link>
          </Grid>
          <ModalFooter
            bg="black"
            color="white"
            fontSize="9px"
            display="flex"
            gridGap="10px"
            justifyContent="center"
          >
            <Image src={IconAssets.alertTriangle} /> Only connecting to the
            Casper Signer will allow you to take full advantage of the platform
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
