import React from "react";
import { StyleSheet, View, ViewPropTypes, TouchableOpacity } from "react-native";
import { AppStyles, colors } from "../theme/index";
import { getRelativeWidth, getRelativeHeight, getRelativeDimens } from "../theme/index";
import { closePopupIcon } from "../utils/iconGetters";

export default class CloseModalButton extends React.PureComponent {
  render = () => (
    <TouchableOpacity onPress={this.props.onPress} style={[styles.closeButtonFrame]}>
      {closePopupIcon()}
    </TouchableOpacity>
  );
}

const closeButtonDimens = getRelativeDimens({ height: 24, width: 24 });
const styles = StyleSheet.create({
  closeButtonFrame: {
    ...AppStyles.center_align_row,
    position: "absolute",
    zIndex: 150,
    backgroundColor: colors.white,
    ...closeButtonDimens,
    top: getRelativeHeight(8),
    right: getRelativeWidth(8),
    borderRadius: closeButtonDimens.width * 0.5,
    ...AppStyles.elevatedMed,
    borderWidth: 0.7,
    borderColor: colors.shadow
  }
});
