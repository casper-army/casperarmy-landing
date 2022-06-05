export const assetsUrl = (path: string): string => `/assets/${path}`;

const brandAssetsUrl = (filename: string): string =>
  assetsUrl(`brand/${filename}`);
const socialAssetsUrl = (filename: string): string =>
  assetsUrl(`socials/${filename}`);
const iconAssetsUrl = (filename: string): string =>
  assetsUrl(`icons/${filename}`);
const partnerAssetsUrl = (filename: string): string =>
  assetsUrl(`partners/${filename}`);
const elementAssetsUrl = (filename: string): string =>
  assetsUrl(`elements/${filename}`);
const effectAssetsUrl = (filename: string): string =>
  assetsUrl(`effects/${filename}`);

export const BrandAssets = {
  ecologyLabel: brandAssetsUrl("eco.svg"),
  ecologyLabelMobile: brandAssetsUrl("eco2.svg"),
  logo: brandAssetsUrl("logo.svg"),
  circle: brandAssetsUrl("circle.png"),
  world: brandAssetsUrl("world.png"),
  computer: brandAssetsUrl("computer.png"),
  chart: brandAssetsUrl("chart.png"),
} as const;

export const EffectAssets = {
  elipse: effectAssetsUrl("elipse.png"),
  mesh: effectAssetsUrl("mesh.png"),
  numbers: effectAssetsUrl("numbers.png"),
  curtain: effectAssetsUrl("curtain.png"),
  dot: effectAssetsUrl("dot.svg"),
} as const;

export const ElementAssets = {
  ticketBackground: elementAssetsUrl("ticket-background.png"),
  ticketCorner: elementAssetsUrl("ticket.png"),
  web3Spinner: elementAssetsUrl("web3-spinner.png"),
  web3SpinnerTransparent: elementAssetsUrl("web3-spinner-transparent.svg"),
  nft: elementAssetsUrl("nft.png"),
  nftBackground: elementAssetsUrl("nft-background.png"),
  nftCards: elementAssetsUrl("nft-cards.png"),
  points: elementAssetsUrl("points.png"),
  validator: elementAssetsUrl("validator.png"),
  tickets: elementAssetsUrl("tickets.png"),
  ticketFront: elementAssetsUrl("ticket-front.png"),
  dot: elementAssetsUrl("dot.png"),
  validatorMenu: elementAssetsUrl("validator-menu.png"),
  ecofriendlyBig: elementAssetsUrl("ecofriendly-big.png"),
  launchAppHomepage: elementAssetsUrl("launchapp-homepage.png"),
} as const;

export const PartnerAssets = {
  casperblockchain: partnerAssetsUrl("casperblockchain.svg"),
  csprPl: partnerAssetsUrl("cspr-pl.svg"),
  casperDash: partnerAssetsUrl("casper-dash.svg"),
  awesomecasper: partnerAssetsUrl("awesome-casper.svg"),
  tubbly: partnerAssetsUrl("tubbly.svg"),
} as const;

export const IconAssets = {
  arrowRight: iconAssetsUrl("arrow-right.svg"),
  bell: iconAssetsUrl("bell.svg"),
  arrowRightBrand: iconAssetsUrl("arrow-right-brand.svg"),
  chat: iconAssetsUrl("chat.svg"),
  x: iconAssetsUrl("x.svg"),
  chevronVertical: iconAssetsUrl("chevron-vertical.svg"),
  server: iconAssetsUrl("server.svg"),
  alert: iconAssetsUrl("alert.svg"),
} as const;

export const SocialAssets = {
  twitter: socialAssetsUrl("twitter.svg"),
  medium: socialAssetsUrl("medium.svg"),
  telegram: socialAssetsUrl("telegram.svg"),
  discord: socialAssetsUrl("discord.svg"),
} as const;

export const PartnerUrls = {
  awesomecasper: "https://casper.network/en/network",
  csprPl: "https://cspr.pl/",
  casperDash: "https://casperdash.io/",
  casperblockchain: "",
  tubbly: ""
} as const;

export const SocialMediaUrls = {
  twitter: "https://twitter.com/casperarmyorg",
  medium: "https://www.linkedin.com/",
  telegram: "https://t.me/casperarmyofficial",
  discord: "https://www.instagram.com",
} as const;
