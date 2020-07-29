/**
 * App Theme - Sizes
 */
import { Dimensions, Platform, StatusBar, PixelRatio } from "react-native";
const isIOS = Platform.OS === "ios";
const { width, height } = Dimensions.get("window");
export const DEVICE_HEIGHT = width < height ? height : width;
export const DEVICE_WIDTH = width < height ? width : height;


export function getRelativeHeight(h) {
  return h * HeightRatio;
}

export function getRelativeWidth(w) {
  return w * WidthRatio;
}

export function getRelativeDimens(dimens) {
  const { width, height } = dimens;
  let relWidth = getRelativeWidth(width);
  let ratio = height / width;
  return { width: relWidth, height: relWidth * ratio };
}


console.log(`DEVICE_WIDTH: ${DEVICE_WIDTH} DEVICE_HEIGHT: ${DEVICE_HEIGHT}`);
export const ASPECT_RATIO = DEVICE_WIDTH / DEVICE_HEIGHT;
console.log(`ASPECT_RATIO: ${ASPECT_RATIO}`);

const zeplin_screen = { width: 250, height: 412 };
export const WidthRatio = DEVICE_WIDTH / zeplin_screen.width;
export const HeightRatio = DEVICE_HEIGHT / zeplin_screen.height;
console.log(`WidthRatio: ${WidthRatio}\nHeightRatio: ${HeightRatio}\n`);

// SearchBar header with autocomplete
const relativeSearchBar = getRelativeDimens({ width: 250, height: 37.3 });
// TextInput inside SearchBar only
const relativeSearchInput = getRelativeDimens({ width: 239.7, height: 24 });
const searchBoxMarginTop = 6.3 * WidthRatio;
const searchBoxWrapperMargins = searchBoxMarginTop * 2;

// long red common button
const relativeLongButton = getRelativeDimens({ width: 199, height: 28.7 });
// Bottom bar UI with tabs
const relativeBottomBar = getRelativeDimens({ width: 250, height: 35 });
// popup screen dimens
const relativePopup = getRelativeDimens({ height: 255, width: 211 });
const shortPopup = getRelativeDimens({ height: 150, width: 211 });
const popupHeight = isIOS ? 32 : 24.7;
const relativePopupButton = getRelativeDimens({ width: 184, height: popupHeight });
// ellipse UI for restaurant
const shortRestaurant = getRelativeDimens({ height: 27.7, width: 150 });
const shortRestMargin = getRelativeWidth(5);

const longRestaurant = getRelativeDimens({ height: 27.7, width: 232 });
// for restaurant badge in EventDishCard header
const restBadgeDimens = getRelativeDimens({ height: 27.7, width: 31.7 });

// member icon for EventCard
const eventMemberIcon = getRelativeDimens({ height: 16, width: 16 });
const addMemberIconEvent = getRelativeDimens({ width: 22, height: 15.3 });

// member icon for EventDetails Screen/ CreateEvent Screen
const mediumMemberIcon = getRelativeDimens({ height: 24, width: 24 });
const addMemberIconMedium = getRelativeDimens({ width: 30.7, height: 21.3 });

// member icon in restaurant ellipse bar in GroupDishesScreen
const relativeRestMember = getRelativeDimens({ height: 20, width: 20 });
// review form frame in ReviewFormScreen
const ReviewForm = getRelativeDimens({ height: 360, width: 199 });
const drawer = getRelativeDimens({ width: 158, height: 412 });
const drawerItem = getRelativeDimens({ width: 158, height: 48 });
const drawerIcon = getRelativeDimens({ width: 19, height: 19 });
const drawerIconMargin = getRelativeWidth(16);

const pickerDimens = getRelativeDimens({ width: 130, height: 17 });

const AppSizes = {
  DEVICE_HEIGHT: DEVICE_HEIGHT,
  DEVICE_WIDTH: DEVICE_WIDTH,
  zeplin_screen: zeplin_screen,

  HeightRatio: HeightRatio,
  WidthRatio: WidthRatio,
  drawer: drawer,
  drawerItem: drawerItem,
  drawerIcon: drawerIcon,
  drawerIconMargin: drawerIconMargin,

  pickerDimens: pickerDimens,

  ReviewForm: ReviewForm,

  relativePopup: relativePopup,
  shortPopup: shortPopup,
  relativePopupButton: relativePopupButton,

  eventMemberIcon: eventMemberIcon,
  addMemberIconEvent: addMemberIconEvent,
  mediumMemberIcon: mediumMemberIcon,
  addMemberIconMedium: addMemberIconMedium,
  restaurantMemberIcon: relativeRestMember,

  longRestaurant: longRestaurant,
  shortRestaurant: shortRestaurant,
  shortRestMargin: shortRestMargin,
  restBadgeDimens: restBadgeDimens,
  relativeRestMember: relativeRestMember,
  restBarHeight: shortRestaurant.height + relativeRestMember.height + getRelativeHeight(3), // in GroupDishesScreen

  statusBarHeight: isIOS ? 20 : StatusBar.currentHeight, // Platform.select({ ios: 20, android: 24 }),
  headerHeight: isIOS ? 44 : 56, // Platform.select({ ios: 44, android: 56 }),

  headerLeftIconMargin: getRelativeWidth(4),
  headerRightIconMargin: 0, //getRelativeWidth(4),

  searchBarHeader: relativeSearchBar,
  wrapperSerachInput: relativeSearchInput,
  searchBoxWrapperMargins: searchBoxWrapperMargins,

  reviewFormWidth: DEVICE_WIDTH * 0.95,
  reviewFormHeight: DEVICE_HEIGHT * 0.1,
  reviewForm_MIN_HEIGHT: 40,
  reviewForm_MAX_HEIGHT: 200,

  bottomBarIndicatorHeight: 3,
  bottomBarHeight: relativeBottomBar.height,
  bottomTabHeight: relativeBottomBar.height,

  tagHeight: getRelativeWidth(17.7),
  tagIconSize: getRelativeWidth(12.3),

  longButton: relativeLongButton,
  buttonWidth: relativeLongButton.width,
  buttonHeight: relativeLongButton.height
};

export default AppSizes;
