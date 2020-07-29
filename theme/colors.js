/**
 * App Theme - Colors
 */
export const restaurantColors = {
  ocher: "rgba(213, 154, 21, 1)",
  mango: "rgba(255, 189, 40, 1)",
  tangerine: "rgba(255, 139, 1, 1)",
  reddish_orange: "rgba(249, 102, 34, 1)",
  persimmon: "rgba(238, 71, 39, 1)",
  brick: "rgba(173, 51, 28, 1)",
  red_purple: "rgba(130, 13, 61, 1)",
  burgundy: "rgba(87, 6, 37, 1)",
  sickly_yellow: "rgba(186, 217, 61, 1)",
  booger_green: "rgba(146, 184, 0, 1)",
  mud_green: "rgba(91, 114, 1, 1)",
  darkish_green: "rgba(33, 128, 43, 1)",
  pine: "rgba(38, 92, 44, 1)",
  darkOlive: "rgba(13, 57, 18, 1)"
};

export const restaurantColorsList = Object.keys(restaurantColors);

export const restaurantColorsClear = {
  ocher: "rgba(213, 154, 21, 0.7)",
  mango: "rgba(255, 189, 40, 0.7)",
  tangerine: "rgba(255, 139, 1, 0.7)",
  reddish_orange: "rgba(249, 102, 34, 0.7)",
  persimmon: "rgba(238, 71, 39, 0.7)",
  brick: "rgba(173, 51, 28, 0.7)",
  red_purple: "rgba(130, 13, 61, 0.7)",
  burgundy: "rgba(87, 6, 37, 0.7)",
  sickly_yellow: "rgba(186, 217, 61, 0.7)",
  booger_green: "rgba(146, 184, 0, 0.7)",
  mud_green: "rgba(91, 114, 1, 0.7)",
  darkish_green: "rgba(33, 128, 43, 0.7)",
  pine: "rgba(38, 92, 44, 0.7)",
  darkOlive: "rgba(13, 57, 18, 0.7)"
};

export const orderColors = {
  payment_received: restaurantColors.tangerine,
  order_demand: restaurantColors.reddish_orange,
  order_supplied: restaurantColors.mango
};

export const colors = {
  transparent: "transparent",
  white: "#fff",
  lemon: "#efeb38",
  chefBase: "#ff8b01",
  chefBase_light: "rgba(255, 139, 1, 0.7)",
  sunflower: "rgba(255, 210, 1, 1)",
  mustard: "#e5c07b",
  pistachioGreen: "#98c379",
  tomato: "rgba(239, 71, 39, 1)", // a bit more red than persimmon

  sky: "#3498db",
  lightBlue: "#48bbec",
  iOSBlue: "#007aff",
  softPurple: "#c682f0",
  blush: "#fedfd9",
  lightRed: "rgba(250, 110, 99, 0.87)",
  lightchefBase: "rgba(238, 71, 39, 0.5)",
  pink: "#ff667b",
  raspberry: "#e06c75",
  red: "#f74e4e",
  bordo: "#7e0000",

  shadow: "rgba(0, 0, 0, 0.129)",
  overlay: "rgba(0, 0, 0, 0.341)",
  transparent_white: "rgba(255, 255, 255, 0.9)",
  light_transparent_white: "rgba(255, 255, 255, 0.7)",
  veryLightGrey: "#f7f7f7",
  whiteGrey: "#f6f6f6",
  dimGrey: "rgba(242, 242, 242, 1)",
  lightGrey: "#ecf0f1",
  thinGrey: "rgba(216, 216, 216, 0.4)",
  lightGreyHacky: "rgb(216, 216, 216)",
  midGrey: "rgba(151, 151, 151, 1)",
  grey: "#696969",
  cameraOverlay: "rgba(0, 0, 0, 0.5)",
  darkGreyMed: "rgba(89, 89, 89, 1)",
  darkGrey: "#4a4a4a",
  halfBlack: "rgba(0, 0, 0, 0.49)",
  hint: "rgba(0, 0, 0, 0.557)",
  clearDarkShadow: "rgba(0, 0, 0, 0.6)",
  darkShadow: "rgba(0, 0, 0, 0.702)",
  black: "rgba(0, 0, 0, 1)",

  ...restaurantColors
};

export const socialColors = {
  DeviceId: "DeviceId",
  Facebook: "#39579a",
  Twitter: "#24caff",
  Instagram: "#3d719d",
  Goolge: "#ffffff",
  PushNotifications: "#ffffff",
  Email: "#c0351f",
  Phone: colors.tangerine
};

export const lightTheme = {
  /* for tab bar navigation tabs */
  white: colors.white,
  shadowBackground: colors.shadow,
  highlight: colors.highlight,
  statusBarColor: colors.darkGrey,

  tabActiveIconTint: colors.chefBase, // Label and icon color of the active tab.
  tabActiveBackground: colors.veryLightGrey, // Background color of the active tab.
  tabInactiveIconTint: colors.darkGrey, // Label and icon color of the inactive tab.
  tabInactiveBackground: colors.veryLightGrey, // Background color of the inactive tab.
  tabBarUnderlineColor: colors.darkGrey,
  bottomBarColor: colors.veryLightGrey, // bottomBarStyle background

  screenTitleColor: colors.chefBase,
  spinnerColor: colors.chefBase,
  searchHeader: colors.chefBase,

  moreMembersBackground: colors.reddish_orange,

  screenBackground: colors.white,
  eventDishCard_Background: colors,
  clearScreen: colors.transparent,
  /* for navigation header */
  headerTitle: colors.darkGrey,
  headerIconsColor: colors.darkGrey, //colors.white,
  headerBottonText: colors.chefBase,
  headerBottomBorder: colors.chefBase,
  tabBarOutline: colors.overlay, //darkGrey,
  headerBackButton: colors.darkGrey,
  headerTintColor: colors.white,

  listItemTitleColor: colors.black,
  link: colors.lightBlue,

  /* icons colors */
  iconDark: colors.darkGrey,
  iconLight: colors.white,
  iconLike: colors.chefBase,
  iconRating: colors.lemon,
  iconAdd: colors.bordo,
  iconRed: colors.deepRed,

  /* buttons colors */
  disabledButton: colors.lightPersimmon,
  activeButton: colors.chefBase,

  /* in page screen directions */
  bodyText: colors.darkGrey,

  /* old card colors */
  cardBorder: colors.lightGrey,
  cardShadow: colors.shadow,
  overlay: colors.overlay,
  darkOverlay: colors.darkShadow,
  cardHeader: colors.white,
  cardSubtitleText: colors.darkGrey,
  cardButtonText: colors.darkGrey,
  /* dish card colors */
  dishTitle: colors.bordo,
  dishDescription: colors.darkGrey,
  /* review card colors */
  reviewTitle: colors.bordo,
  content: colors.darkGrey,
  reviewTimeAgo: colors.darkGrey,
  reviewBackground: colors.white,
  reviewPlaceholderBackground: colors.white,
  /* reviews list */
  reviewsDividingLine: colors.lightGrey,
  /* comment item colors */
  commentText: colors.darkGrey,
  commentAuthor: colors.lightGrey,
  commentTimeAgo: colors.darkGrey,
  commentBackground: colors.white,
  /* tag item colors */
  tagLabelText: colors.darkGrey,
  tagBackground: colors.thinGrey,
  suggestionBackground: colors.lightGrey,
  deleteTagIcon: colors.darkGrey,

  /* review form */
  borderColor: colors.midGrey,
  formBackground: colors.white,
  inputBackground: colors.white,
  inputContainer: colors.white,
  inputText: colors.darkGrey,
  placeholderText: colors.hint
};

export default {
  ...colors,
  ...lightTheme,
  ...orderColors
};
