/**
 * App Styles
 */
import { Platform, StyleSheet } from "react-native";
import { lightTheme, colors } from "./colors";
import Fonts from "./fonts";
import AppSizes from "./sizes";
import { getRelativeDimens, getRelativeHeight, getRelativeWidth } from "./sizes";

const rowsAlign = {
  left_x_axis: {
    justifyContent: "flex-start"
  },
  center_x_axis: {
    justifyContent: "center"
  },
  right_x_axis: {
    justifyContent: "flex-end"
  },
  full_x_axis: {
    // works only if "width" is not defined
    justifyContent: "strech"
  },
  space_around_x_axis: {
    justifyContent: "space-around"
  },
  space_between_x_axis: {
    justifyContent: "space-between"
  },
  top_y_axis: {
    alignItems: "flex-start"
  },
  center_y_axis: {
    alignItems: "center"
  },
  bottom_y_axis: {
    alignItems: "flex-end"
  }
};

const rows = {
  space_around_center_row: {
    flexDirection: "row",
    ...rowsAlign.space_around_x_axis,
    ...rowsAlign.center_y_axis
  },
  space_between_center_row: {
    flexDirection: "row",
    ...rowsAlign.space_between_x_axis,
    ...rowsAlign.center_y_axis
  },
  right_bottom_row: {
    flexDirection: "row",
    ...rowsAlign.right_x_axis,
    ...rowsAlign.bottom_y_axis
  },
  left_bottom_row: {
    flexDirection: "row",
    ...rowsAlign.left_x_axis,
    ...rowsAlign.bottom_y_axis
  },
  left_top_row: {
    flexDirection: "row",
    ...rowsAlign.left_x_axis,
    ...rowsAlign.top_y_axis
  },
  center_bottom_row: {
    flexDirection: "row",
    ...rowsAlign.center_x_axis,
    ...rowsAlign.bottom_y_axis
  },
  center_top_row: {
    flexDirection: "row",
    ...rowsAlign.center_x_axis,
    ...rowsAlign.top_y_axis
  },
  left_center_row: {
    flexDirection: "row",
    ...rowsAlign.left_x_axis,
    ...rowsAlign.center_y_axis
  },
  right_center_row: {
    flexDirection: "row",
    ...rowsAlign.right_x_axis,
    ...rowsAlign.center_y_axis
  },
  right_top_row: {
    flexDirection: "row",
    ...rowsAlign.right_x_axis,
    ...rowsAlign.top_y_axis
  },
  center_align_row: {
    flexDirection: "row",
    ...rowsAlign.center_x_axis,
    ...rowsAlign.center_y_axis
  }
};

const colsAlign = {
  left_x_axis: {
    alignItems: "flex-start"
  },
  center_x_axis: {
    alignItems: "center"
  },
  right_x_axis: {
    alignItems: "flex-end"
  },
  full_x_axis: {
    // works only if "width" is not defined
    alignItems: "strech"
  },
  top_y_axis: {
    justifyContent: "flex-start"
  },
  center_y_axis: {
    justifyContent: "center"
  },
  bottom_y_axis: {
    justifyContent: "flex-end"
  },
  space_between_y_axis: {
    justifyContent: "space-between"
  },
  space_around_y_axis: {
    justifyContent: "space-around"
  }
};

const columns = {
  center_col: {
    flexDirection: "column",
    ...colsAlign.center_y_axis,
    ...colsAlign.center_x_axis
  },
  top_left_col: {
    flexDirection: "column",
    ...colsAlign.top_y_axis,
    ...colsAlign.left_x_axis
  },
  top_right_col: {
    flexDirection: "column",
    ...colsAlign.top_y_axis,
    ...colsAlign.right_x_axis
  },
  bottom_center_col: {
    flexDirection: "column",
    ...colsAlign.bottom_y_axis,
    ...colsAlign.center_x_axis
  },
  left_center_col: {
    flexDirection: "column",
    ...colsAlign.center_y_axis,
    ...colsAlign.left_x_axis
  },
  left_bottom_col: {
    flexDirection: "column",
    ...colsAlign.bottom_y_axis,
    ...colsAlign.left_x_axis
  },
  right_center_col: {
    flexDirection: "column",
    ...colsAlign.center_y_axis,
    ...colsAlign.right_x_axis
  },
  right_bottom_col: {
    flexDirection: "column",
    ...colsAlign.bottom_y_axis,
    ...colsAlign.right_x_axis
  },
  top_center_col: {
    flexDirection: "column",
    ...colsAlign.top_y_axis,
    ...colsAlign.center_x_axis
  },
  space_between_left_col: {
    flexDirection: "column",
    ...colsAlign.space_between_y_axis,
    ...colsAlign.left_x_axis
  },
  space_between_center_col: {
    flexDirection: "column",
    ...colsAlign.space_between_y_axis,
    ...colsAlign.center_x_axis
  },
  space_around_center_col: {
    flexDirection: "column",
    ...colsAlign.space_around_y_axis,
    ...colsAlign.center_x_axis
  }
};

const elevation = {
  elevatedSmall: {
    ...Platform.select({
      ios: {
        shadowColor: colors.overlay,
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1.0,
        shadowRadius: 2
      },
      android: {
        elevation: 1
      }
    })
  },
  elevatedMed: {
    ...Platform.select({
      ios: {
        shadowColor: colors.overlay,
        shadowOffset: { height: 3, width: 2 },
        shadowOpacity: 1.0,
        shadowRadius: 2
      },
      android: {
        elevation: 4
      }
    })
  },
  elevatedHigh: {
    ...Platform.select({
      ios: {
        shadowColor: colors.overlay,
        shadowOffset: { height: 5, width: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2
      },
      android: {
        elevation: 6
      }
    })
  }
};

const borderHelper = {
  borderHelper: {
    borderColor: colors.grey,
    borderWidth: 1
  }
};

const suggestionStyle = {
  suggestionStyle: {
    height: AppSizes.tagHeight,
    ...rows.center_align_row,
    flexWrap: "wrap",
    backgroundColor: lightTheme.suggestionBackground,
    borderRadius: 5,
    marginLeft: getRelativeWidth(4),
    marginTop: getRelativeWidth(2)
  },
  suggestionTextStyle: {
    ...Fonts.h5,
    textAlign: "center",
    color: lightTheme.tagLabelText,
    paddingHorizontal: 5
  }
};

const tagStyle = {
  tagStyle: {
    height: AppSizes.tagHeight,
    ...columns.center_col,
    paddingHorizontal: getRelativeWidth(5),
    backgroundColor: lightTheme.tagBackground,
    borderRadius: 3,
    marginVertical: getRelativeHeight(2.5),
    marginHorizontal: getRelativeWidth(2.5)
  },
  tagContainer: {
    flex: 1,
    ...rows.center_align_row
  },
  tagIconStyle: {
    width: AppSizes.tagIconSize,
    height: AppSizes.tagIconSize
  },
  tagTextStyle: {
    ...Fonts.h5,
    textAlign: "center",
    color: lightTheme.tagLabelText,
    paddingHorizontal: getRelativeWidth(3.7)
  }
};

const Styles = {
  ...rows,
  ...columns,
  ...elevation,
  ...borderHelper,
  ...suggestionStyle,
  ...tagStyle,
  hideLongText: {
    flexDirection: "row",
    //flexWrap: "wrap",
    overflow: "hidden"
  },
  screenContainer: {
    flex: 1,
    //top: AppSizes.statusBarHeight,
    flexDirection: "column",
    backgroundColor: lightTheme.screenBackground
  },
  contentContainer: {
    // contains dishes list or error message
    right: 0,
    left: 0,
    bottom: 0,
    marginTop: 0,
    zIndex: 1 // in the background
  },
  listContainer: {
    // inside contentContainer if all dishes were loaded
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginTop: 0,
    backgroundColor: colors.transparent
  },
  listContentContainer: {
    backgroundColor: colors.transparent,
    paddingBottom: AppSizes.bottomBarHeight
  },
  navigationHeaderStyle: {
    //top: Platform.OS === "ios" ? AppSizes.statusBarHeight : 0,
    top: 0,
    backgroundColor: lightTheme.headerTintColor,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: lightTheme.headerBottomBorder,
    width: AppSizes.DEVICE_WIDTH,
    height: AppSizes.headerHeight + AppSizes.statusBarHeight
  },
  headerTitleFrame: {
    top: 0,
    bottom: 0,
    left: AppSizes.DEVICE_WIDTH * 0.3,
    right: AppSizes.DEVICE_WIDTH * 0.3,
    position: "absolute",
    alignItems: Platform.OS === "ios" ? "center" : "center",
    justifyContent: Platform.OS === "ios" ? "center" : "center",
    alignSelf: "center",
    ...borderHelper.borderHelper
  },
  headerTitleText: {
    ...Fonts.h3,
    textAlign: "center",
    color: lightTheme.headerTitle,
    marginHorizontal: 0
  },
  rightHeaderButton: {
    ...rows.center_align_row,
    height: "80%",
    right: 0,
    minWidth: AppSizes.DEVICE_WIDTH * 0.15,
    //...borderHelper.borderHelper
  },
  leftHeaderButton: {
    ...rows.center_align_row,
    height: "80%",
    left: 0,
    minWidth: AppSizes.DEVICE_WIDTH * 0.15,
    //...borderHelper.borderHelper
  },
  headerButtonText: {
    ...Fonts.h3,
    color: colors.chefBase,
    textAlign: "center",
    letterSpacing: 0.06,
    paddingHorizontal: getRelativeWidth(2)
  },
  headerButtonIcon: {
    paddingHorizontal: getRelativeWidth(5)
  },
  bottomBarStyle: {
    flexDirection: "row",
    height: AppSizes.bottomBarHeight,
    backgroundColor: Platform.OS === "ios" ? lightTheme.bottomBarColor : lightTheme.bottomBarColor,
    borderTopColor: lightTheme.tabBarOutline, // borderColor
    ...elevation.elevatedMed,
    borderTopWidth: 0.7
  },
  bottomTabStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: Platform.OS === "ios" ? "center" : "stretch",
    paddingTop: 2,
    paddingBottom: 3
  },
  bottomTabLabel: {
    // tab label text style
    ...Fonts.small,
    textAlign: "center",
    marginTop: 0,
    marginBottom: 1.5 // original is 1.5
  },
  bottomBarIndicator: {
    // selected tab indicator line style
    backgroundColor: lightTheme.tabActiveIconTint,
    height: AppSizes.bottomBarIndicatorHeight
  },
  drawerLabelRow: {
    ...rows.left_center_row,
    marginLeft: AppSizes.drawerIconMargin
    //...borderHelper.borderHelper,
  },
  drawerLabelText: {
    ...Fonts.h5,
    fontWeight: "normal", // original: fontWeight: 'bold',
    fontStyle: "normal",
    textAlign: "center",
    color: colors.white,
    margin: 0 // original: margin: 16,
  },
  activeDrawerLabelText: {
    color: colors.persimmon
  },
  drawerItemsContainerStyle: {
    paddingVertical: 0,
    marginTop: getRelativeHeight(13),
    ...columns.top_left_col
  },
  drawerItemStyle: {
    ...rows.left_center_row,
    ...AppSizes.drawerItem,
    borderColor: "rgba(255, 255, 255, 0.29)",
    borderStyle: "solid",
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3
  },
  drawerIconContainer: {
    ...AppSizes.drawerIcon,
    marginHorizontal: 0,
    marginLeft: AppSizes.drawerIconMargin,
    alignItems: "center"
    //...borderHelper.borderHelper
  },
  screenTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  buttonContainer: {
    flex: 0.4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  popUpButtonStyle: {
    ...rows.center_align_row,
    //...elevation.elevatedMed,
    ...AppSizes.relativePopupButton,
    backgroundColor: lightTheme.activeButton,
    borderRadius: 3
  },
  doneButtonTouchableStyle: {
    ...rows.center_align_row,
    //...elevation.elevatedMed,
    ...AppSizes.longButton,
    backgroundColor: lightTheme.activeButton,
    borderRadius: 5
  },
  doneButtonDisabled: {
    backgroundColor: lightTheme.disabledButton
  },
  doneButtonStyle: {
    ...rows.center_align_row,
    paddingHorizontal: getRelativeWidth(4.7),
    paddingVertical: getRelativeHeight(4.7)
  },
  doneButtonText: {
    ...Fonts.h34,
    color: colors.white,
    textAlign: "center"
  },
  screenTextTitle: {
    ...Fonts.h23,
    textAlign: "center",
    color: colors.persimmon
  },
  inputText: {
    flex: 1,
    ...Fonts.h5,
    paddingHorizontal: 2,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 0,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.darkGrey
  },
  formLabel: {
    ...Fonts.h4,
    paddingLeft: 5,
    fontWeight: "normal",
    fontStyle: "normal",
    color: colors.darkGrey
  },
  formInputText: {
    ...Fonts.h4,
    //...Fonts.light,
    fontWeight: "300",
    fontStyle: "normal",
    textAlign: "left",
    color: lightTheme.inputText,
    //overflow: "hidden",
    paddingHorizontal: 0,
    paddingVertical: 0,
    paddingLeft: 5,
    marginBottom: 0
  },
  editModeTextStyle: {
    flex: 1,
    borderBottomColor: colors.hint,
    borderBottomWidth: 0.5
  },
  clickableText: {
    color: colors.persimmon,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textShadowColor: colors.shadow
  },
  h1: {
    ...Fonts.h1,
    fontFamily: Fonts.h1.fontFamily,
    fontSize: Fonts.h1.fontSize,
    lineHeight: Fonts.h1.lineHeight,
    color: lightTheme.screenTitleColor
    //fontWeight: "800"
  },
  h2: {
    ...Fonts.h2,
    color: colors.darkGrey
    //fontWeight: "800"
  },
  h3: {
    ...Fonts.h3,
    color: colors.darkGrey
    //fontWeight: "500"
  },
  h34: {
    ...Fonts.h34,
    color: colors.darkGrey
  },
  h4: {
    ...Fonts.h4,
    color: colors.darkGrey
  },
  h5: {
    ...Fonts.h5,
    color: colors.darkGrey,
    textAlign: "left"
  }
};

export default Styles;
