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
import { isValidUrl, getTeam } from "../utils/utils";
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
      const fullTeam = await getTeam(this.props.team.id);
      
      if (fullTeam) {
        console.log("got team");
        this.props.showTeamDetails(fullTeam);
        this.setState({ team: fullTeam });
    //  }
    }
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

  renderPlayer = ({ item, index }) => (
    <View style={[AppStyles.top_center_col, { width: getRelativeWidth(100) }]}>
      <View style={AppStyles.top_center_col}>
        <View style={[AppStyles.left_center_row]}>{userIcon(26)}</View>
      </View>
      <View
        style={[
          AppStyles.center_align_row,
          { width: "100%", paddingVertical: getRelativeHeight(2) },
        ]}
      >
        <View style={[AppStyles.center_align_row, { width: "100%" }]}>
          <ScaledText text={item.name} style={styles.playerNameText} />
        </View>
      </View>
      <View
        style={[
          AppStyles.center_align_row,
          { width: "100%", paddingVertical: getRelativeHeight(2) },
        ]}
      >
        <ScaledText text={item.position} style={styles.playerPositionText} />
      </View>
    </View>
  );

  renderPlayersList = (squad) =>
    squad.length && (
      <View
        style={[
          {
            ...AppStyles.top_center_col,
            width: "100%",
            ...AppStyles.borderHelper,
          },
        ]}
      >
        <View style={[AppStyles.left_center_row]}>
          <ScaledText text={"Players"} style={[styles.playersHeaderText]} />
        </View>

        <View style={[{ ...AppStyles.center_align_row, width: "100%" }]}>
          <FlatList
            keyExtractor={(item) => `${item.id}`}
            horizontal={true}
            data={squad}
            renderItem={(item) => this.renderPlayer(item)}
            showsHorizontalScrollIndicator={true}
            removeClippedSubviews={true}
            style={[AppStyles.listContainer]}
            contentContainerStyle={{
              ...AppStyles.left_center_row,
              //width: "100%",
              height: getRelativeHeight(80),
              marginTop: getRelativeHeight(1),
            }}
            onEndReachedThreshold={0.5}
            initialNumToRender={4}
          />
        </View>
      </View>
    );

  render = () => (
    <View onLayout={this.onLayout.bind(this)} style={[styles.cardLayout]}>
      <View style={[styles.cardBody]}>
        <View style={[styles.cardContentFrame]}>
          {this.renderHeader()}
          {this.state.showMore &&
            this.state.team &&
            this.renderPlayersList(this.state.team.squad)}
        </View>
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
