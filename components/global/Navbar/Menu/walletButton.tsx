import { Grid, Image, Text } from "@chakra-ui/react";
import { IconAssets } from "../../../../config";

export const WalletButton = ({
  name,
  icon,
  action,
}: {
  name: string;
  icon: string;
  action: () => void;
}) => {

	return <Grid gap="28px" cursor="pointer" onClick={action} border="1px solid black" borderRadius="3px" padding="18px 30px" gridTemplateColumns="40px 1fr 20px" alignItems="center">
		<Image src={icon}/>
		<Text color="black">Connect with {name}</Text>
		<Image src={IconAssets.logOut}/>
	</Grid>
};
