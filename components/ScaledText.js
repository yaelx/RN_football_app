import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import { AppStyles } from "../theme/index";

export default class ScaledText extends Component {
  static propTypes = {
    text: PropTypes.any,
    style: Text.propTypes.style, //PropTypes.object,
    numberOfLines: PropTypes.number
  };

  render = () => (
    <Text
      //adjustsFontSizeToFit={true}
      maxFontSizeMultiplier={1}
      allowFontScaling={true}
      style={this.props.style}
      {...this.props}
    >
      {this.props.text}
    </Text>
  );
}
