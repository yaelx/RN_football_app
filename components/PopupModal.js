import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
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
import ScaledText from "./ScaledText";
import CloseModalButton from "./CloseModalButton";
const popupButtonWidth = AppSizes.relativePopupButton.width;
import { footballIcon, userIcon, arrowsIcon } from "../utils/iconGetters";
import { dateUTCConverter } from "../utils/dateTimeConverter";

export default class PopupModal extends Component {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    innerText: PropTypes.string,
    buttons: PropTypes.array,
    buttonsVertical: PropTypes.bool,
    height: PropTypes.number,
    childNode: PropTypes.any,
    team: PropTypes.object,
  };

  static defaultProps = {
    isVisible: true,
  };

  constructor(props) {
    super(props);
    this.itemsFlex = { content: 1, title: titleFlex, buttons: buttonsFlex };
    this.state = {
      visible: true,
    };
    this.renderSpecialContent = this.renderSpecialContent.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.isVisible !== nextProps.isVisible) {
      return true;
    }
    return true;
  }

  renderClocheIcon = () => (
    <View
      style={[AppStyles.top_center_col, { marginTop: getRelativeHeight(8) }]}
    >
      {restaurant_clocheOpenIcon()}
    </View>
  );

  renderActionButton = (button, buttonWidth = popupButtonWidth) => (
    <TouchableOpacity
      key={button.title}
      style={[
        AppStyles.popUpButtonStyle,
        { marginTop: 0, width: buttonWidth, marginHorizontal: 5 },
      ]}
      onPress={button.action}
    >
      <View style={[AppStyles.doneButtonStyle]}>
        <ScaledText style={[AppStyles.doneButtonText]} text={button.title} />
      </View>
    </TouchableOpacity>
  );

  renderButtons = (buttonWidth) => (
    <View
      key="buttons"
      style={[
        this.props.buttons.length == 1 && { justifyContent: "center" },
        this.props.buttonsVertical
          ? styles.verticalButtonsFrame
          : styles.dialogButtonsFrame,
        { flex: this.itemsFlex.buttons },
      ]}
    >
      {this.props.buttons.map((button) =>
        this.renderActionButton(button, buttonWidth)
      )}
    </View>
  );

  renderSpecialContent = () => (
    <View style={[AppStyles.top_center_col, { flex: 1 }]}>
      <ScaledText
        style={[AppStyles.h2, { color: colors.persimmon }]}
        text={`"${this.props.innerText}"`}
      />
      <ScaledText
        style={[AppStyles.h2, AppFonts.light, { textAlign: "center" }]}
        text={this.props.body}
      />
      {this.props.buttons.length === 0 && this.renderClocheIcon()}
    </View>
  );

  renderContent = () => (
    <View style={[styles.dialogInnerFrame, { flex: this.itemsFlex.content }]}>
      <View style={[styles.dialogContentFrame]}>
        {this.props.innerText ? (
          this.renderSpecialContent()
        ) : (
          <ScaledText style={[styles.contentText]} text={this.props.body} />
        )}
      </View>
    </View>
  );

  onOverlayPress = () => {
    this.props.onClose();
  };

  renderCloseButton = () => <CloseModalButton onPress={this.props.onClose} />;

  renderTitle = (title) => (
    <View style={[styles.titleRow]}>
      <ScaledText style={[styles.titleText]} text={`${title}`} />
    </View>
  );

  renderHeader = () => (
    <View style={[styles.dialogTitleFrame]}>
      <View style={[styles.titleInnerFrame]}>
        {!!this.props.title && this.renderTitle(this.props.title)}
      </View>
    </View>
  );

  renderPopupView = (buttonWidth) => (
    <View
      style={[
        styles.dialogStyle,
        this.props.dialogStyle && this.props.dialogStyle,
      ]}
    >
      {this.renderCloseButton()}
      {this.props.title && this.renderHeader()}
      {this.props.childNode ? (
        <View
          style={[styles.dialogInnerFrame, { flex: this.itemsFlex.content }]}
        >
          {this.props.childNode}
        </View>
      ) : (
        this.renderContent()
      )}
      {this.props.buttons &&
        this.props.buttons.length > 0 &&
        this.renderButtons(buttonWidth)}
    </View>
  );

  renderPlayer = ({ item, index }) => (
    <View
      style={[
        AppStyles.top_center_col,
        { width: getRelativeWidth(100), ...AppStyles.elevatedSmall },
      ]}
    >
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

  renderMatch = ({ item, index }) => (
    <View
      style={[
        AppStyles.top_center_col,
        {
          width: getRelativeWidth(120),
          paddingHorizontal: getRelativeWidth(2),
        },
      ]}
    >
      <View style={[AppStyles.center_align_row, { width: "100%" }]}>
        {!!item.competition && (
          <ScaledText text={item.competition} style={styles.playerNameText} />
        )}
      </View>
      <View
        style={[
          AppStyles.center_align_row,
          { width: "100%", paddingVertical: getRelativeHeight(2) },
        ]}
      >
        {!!item.date && (
          <ScaledText
            text={dateUTCConverter(item.date)}
            style={styles.playerPositionText}
          />
        )}
      </View>

      <View
        style={[
          AppStyles.center_align_row,
          {
            marginTop: getRelativeHeight(8),
            width: "100%",
            paddingVertical: getRelativeHeight(2),
          },
        ]}
      >
        <View style={[AppStyles.center_align_row, { width: "100%" }]}>
          {!!item.rivalTeam && (
            <ScaledText
              text={item.rivalTeam}
              style={styles.playerPositionText}
            />
          )}
        </View>
      </View>
      <View style={[AppStyles.center_align_row]}>{arrowsIcon()}</View>
      <View
        style={[styles.awayTeamFrame
        ]}
      >
        <ScaledText text={item.awayTeam} style={styles.playerPositionText} />
      </View>
    </View>
  );

  renderPlayersList = (squad) =>
    squad.length && (
      <View style={[styles.playersFrame]}>
        <View style={[AppStyles.left_center_row]}>
          <ScaledText text={"Players"} style={[styles.playersHeaderText]} />
        </View>

        <View style={[styles.playersListFrame]}>
          <FlatList
            keyExtractor={(item) => `${item.id}`}
            horizontal={true}
            data={squad}
            renderItem={(item) => this.renderPlayer(item)}
            showsHorizontalScrollIndicator={true}
            removeClippedSubviews={true}
            style={[AppStyles.listContainer]}
            contentContainerStyle={styles.contentContainerStyle}
            onEndReachedThreshold={0.5}
            initialNumToRender={4}
          />
        </View>
      </View>
    );

  renderMatchesList = (matches) =>
    matches.length && (
      <View
        style={[
          styles.playersFrame,
          {
            marginTop: getRelativeHeight(10),
          },
        ]}
      >
        <View style={[AppStyles.left_center_row]}>
          <ScaledText text={"Matches"} style={[styles.playersHeaderText]} />
        </View>

        <View style={[styles.playersListFrame]}>
          <FlatList
            keyExtractor={(item) => `${item.id}`}
            horizontal={true}
            data={matches}
            renderItem={(item) => this.renderMatch(item)}
            showsHorizontalScrollIndicator={true}
            renderEMO
            removeClippedSubviews={true}
            style={[AppStyles.listContainer]}
            contentContainerStyle={styles.matcherContainer}
            onEndReachedThreshold={0.5}
            initialNumToRender={4}
          />
        </View>
      </View>
    );

  renderTeam = (team) => (
    <View
      style={[
        styles.dialogStyle,
        this.props.dialogStyle && this.props.dialogStyle,
      ]}
    >
      {this.renderCloseButton()}
      {!!this.props.title && this.renderHeader()}
      {team && team.squad && this.renderPlayersList(team.squad)}
      {team && team.matches && this.renderMatchesList(team.matches)}
    </View>
  );

  render = () => (
    <Modal
      animationType={"slide"}
      visible={this.props.isVisible}
      onRequestClose={this.props.onClose}
      transparent
    >
      <View
        style={[styles.screenContainer, !this.props.isVisible && styles.hidden]}
      >
        {this.renderTeam(this.props.team)}
      </View>
    </Modal>
  );
}

const containerSize = {
  width: AppSizes.DEVICE_WIDTH,
  height: AppSizes.DEVICE_HEIGHT,
};
const titleFlex = 0.15; // 0.27
const buttonsFlex = 0.3; // 0.25
const buttonsVerticalFlex = 0.38;
const contentFlex = 1 - titleFlex - buttonsFlex;

const styles = StyleSheet.create({
  awayTeamFrame: {
    ...AppStyles.center_align_row,
    width: "100%", paddingVertical: getRelativeHeight(2)
  },
  playersFrame: {
    ...AppStyles.top_center_col,
    width: "100%",
  },
  playersListFrame: {
    ...AppStyles.center_align_row,
    width: "100%",
  },
  contentContainerStyle: {
    ...AppStyles.left_center_row,
    height: getRelativeHeight(80),
    marginTop: getRelativeHeight(1),
  },
  matcherContainer: {
    ...AppStyles.left_center_row,
    height: getRelativeHeight(130),
    marginTop: getRelativeHeight(1),
  },
  screenContainer: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1000,
    backgroundColor: colors.overlay,
    ...AppStyles.center_align_row,
    ...containerSize,
  },
  dialogStyle: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    zIndex: 1000,
    borderRadius: 3,
    ...AppStyles.top_center_col,
    ...containerSize,
  },
  webViewDialogStyle: {
    backgroundColor: colors.white,
    alignSelf: "center",
    ...containerSize,
  },
  dialogTitleFrame: {
    flex: titleFlex,
    width: "100%",
    backgroundColor: colors.white,
    ...AppStyles.center_col,
    marginTop: getRelativeHeight(20),
  },
  titleInnerFrame: {
    ...AppStyles.top_center_col,
    width: "100%",
  },
  titleCloseButtonRow: {
    ...AppStyles.right_top_row,
    alignSelf: "flex-end",
  },
  closeButtonStyle: {
    ...AppStyles.center_top_row,
    paddingVertical: getRelativeWidth(4),
    paddingHorizontal: getRelativeWidth(8),
  },
  titleRow: {
    ...AppStyles.center_top_row,
    width: "90%",
    marginTop: getRelativeHeight(5),
  },
  titleText: {
    ...AppStyles.h3,
    color: colors.persimmon,
    textAlign: "center",
    fontWeight: "300",
  },
  dialogInnerFrame: {
    flex: contentFlex,
    width: "100%",
    ...AppStyles.top_center_col,
    backgroundColor: colors.white,
  },
  dialogContentFrame: {
    width: "90%",
    ...AppStyles.top_center_col,
    paddingVertical: getRelativeHeight(5),
  },
  contentText: {
    ...AppStyles.h34,
    color: colors.darkGrey,
    ...AppFonts.light,
    textAlign: "center",
  },
  dialogButtonsFrame: {
    flex: buttonsFlex,
    ...AppStyles.space_between_center_row,
    backgroundColor: colors.white,
    marginBottom: getRelativeHeight(10),
  },
  verticalButtonsFrame: {
    flex: buttonsVerticalFlex,
    ...AppStyles.space_around_center_col,
    backgroundColor: colors.white,
    marginBottom: getRelativeHeight(10),
  },
  webView: {
    flex: 1,
  },
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
});
