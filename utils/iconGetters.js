import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, Platform, PixelRatio } from "react-native";
import { Icon } from "react-native-elements";
import { AppStyles, AppFonts, AppSizes, colors } from "../theme/index";

export function footballIcon(size = 26, color = colors.darkGrey) {
    return (
      <Icon name="ios-football" type="ionicon" size={size} color={color} containerStyle={{ padding: 2 }} />
    );
  }

  export function userIcon(size = 26, color = colors.grey) {
    return (
      <Icon name="user" type="font-awesome" size={size} color={color} containerStyle={{ padding: 2 }} />
    );
  }

  export function closePopupIcon(size = 26, color = colors.grey) {
    return (
        <Icon name="close" type="font-awesome" size={size} color={color} containerStyle={{ padding: 2 }} />
      );
  }

  export function arrowsIcon(size = 26, color = colors.red) {
    return (
        <Icon name="arrows-v" type="font-awesome" size={size} color={color} containerStyle={{ padding: 2 }} />
      );
  }