import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Platform,
  StyleSheet,
  Image,
  View,
  FlatList,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from "react-native";
import {
  AppStyles,
  AppSizes,
  AppFonts,
  colors,
  getRelativeHeight,
  getRelativeWidth,
  getRelativeDimens,
} from "../theme/index";
import { isValidUrl, getTeam, getTeamMatches } from "../utils/utils";
import ScaledText from "./ScaledText";
import { TrackingTouchableOpacity } from "./TrackingTouchableOpacity";
import { footballIcon, userIcon } from "../utils/iconGetters";

export default class TeamCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: undefined,
    };
    this.renderHeader = this.renderHeader.bind(this);
    this.showTeam = this.showTeam.bind(this);
  }

  onLayout = (evt) => {
    this.viewProperties = {
      width: 0,
      height: 0,
    };
    this.viewProperties.width = evt.nativeEvent.layout.width;
    this.viewProperties.height = evt.nativeEvent.layout.height;
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.team !== nextState.team) return true;
    return false;
  }

  renderImage = (url) => (
    <Image
      style={styles.teamLogoStyle}
      source={{
        uri: url,
      }}
      resizeMode={"cover"}
    />
  );

  renderDefaultLogo = () => (
    <View
      style={[
        styles.teamLogoStyle,
        { ...AppStyles.top_center_col, backgroundColor: colors.transparent },
      ]}
    >
      {footballIcon(40)}
    </View>
  );

  renderLogoImage = (url) =>
    isValidUrl(url)
      ? this.renderImage(this.props.team.crestUrl)
      : this.renderDefaultLogo();

  async showTeam() {
    console.log(`show team: ${this.props.team.id} ${this.props.team.name}`);
    //if (!this.state.team) {

    Promise.all([
      getTeam(this.props.team.id),
      getTeamMatches(this.props.team.id),
    ])
      .then((results) => {
        if (results[0] && results[1]){
          const fullTeam = {...results[0], matches: results[1]};
          console.log(fullTeam);
          this.props.showTeamDetails({ ...fullTeam });
          this.setState({ team: fullTeam });
        }

      })
      .catch((error) => {
        // react on errors.
        console.error(error);
        console.log(`showTeam error: ${error}`);
      });

    /*
    const fullTeam = await getTeam(this.props.team.id);
    const matches = await getTeamMatches(this.props.team.id);
    console.log(matches);

    if (matches) {
      console.log("got team and matches");
      console.log(matches);
      //this.props.showTeamDetails({ ...fullTeam });
      //this.setState({ team: fullTeam });
    }
    */
  }

  renderHeader = () => (
    <TrackingTouchableOpacity
      event={"team_card_pressed"}
      eventParams={this.props.team}
      key={"card_header"}
      activeOpacity={0.5}
      style={[styles.headerContainer]}
      onPress={this.showTeam}
    >
      <View
        style={[{ ...AppStyles.left_center_row, flex: 0.3, height: "100%" }]}
      >
        <View
          style={[{ ...AppStyles.center_align_row, flex: 0.5, height: "100%" }]}
        >
          {this.renderLogoImage(this.props.team.crestUrl)}
        </View>
      </View>

      <View
        style={[
          {
            ...AppStyles.left_center_row,
            ...AppStyles.hideLongText,
            flex: 0.7,
            height: "100%",
          },
        ]}
      >
        <ScaledText style={[styles.teamNameText]} text={this.props.team.name} />
      </View>
    </TrackingTouchableOpacity>
  );

  render = () => (
    <View onLayout={this.onLayout.bind(this)} style={[styles.cardLayout]}>
      <View style={[styles.cardBody]}>
        <View style={[styles.cardContentFrame]}>{this.renderHeader()}</View>
      </View>
    </View>
  );
}

const logoDimens = getRelativeDimens({ height: 30, width: 30 });
const styles = StyleSheet.create({
  teamNameText: {
    ...AppFonts.h3,
    color: colors.darkGrey,
    textAlign: "left",
    letterSpacing: 0.08,
    fontWeight: "bold",
  },
  playerNameText: {
    ...AppFonts.h4,
    color: colors.darkGrey,
    textAlign: "center",
    letterSpacing: 0.08,
    fontWeight: "bold",
  },
  playerPositionText: {
    ...AppFonts.h5,
    color: colors.darkGrey,
    textAlign: "center",
    letterSpacing: 0.08,
    color: colors.grey,
  },
  playersHeaderText: {
    ...AppFonts.h4,
    textAlign: "center",
    letterSpacing: 0.08,
    color: colors.red,
    fontWeight: "bold",
  },
  headerContainer: {
    ...AppStyles.center_align_row,
    //paddingVertical: getRelativeHeight(2)
  },
  cardLayout: {
    ...AppStyles.center_col,
    width: "100%",
    backgroundColor: colors.transparent,
  },
  cardBody: {
    width: "95%",
    ...AppStyles.top_center_col, // center_align_row
    ...AppStyles.elevatedMed,
    backgroundColor: colors.white,
    borderRadius: 8,
    margin: 3,
  },
  cardContentFrame: {
    width: "90%",
    ...AppStyles.top_center_col,
    paddingHorizontal: getRelativeWidth(5),
    paddingVertical: getRelativeHeight(5),
  },
  teamLogoStyle: {
    ...logoDimens,
    borderRadius: logoDimens.width * 0.5,
  },
});
