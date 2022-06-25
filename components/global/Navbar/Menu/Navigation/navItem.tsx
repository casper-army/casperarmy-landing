import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

interface INavItem {
  url: string;
  children: React.ReactNode;
}

export const NavItem: FC<INavItem> = ({ url, children }) => {
  const router = useRouter();
  _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
  return (
    <Box
      textTransform="uppercase"
      className={router.pathname == url ? "active" : ""}
    >
      <Link href={url}>{children}</Link>
    </Box>
  );
};
