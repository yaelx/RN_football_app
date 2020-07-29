import React, { Component } from "react";
import PropTypes from "prop-types";
//import { Overlay } from "react-native-popup-dialog";
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
import { footballIcon, userIcon } from "../utils/iconGetters";

export default class PopupModal extends Component {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string, // dialog title string
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
              height: getRelativeHeight(80),
              marginTop: getRelativeHeight(1),
            }}
            onEndReachedThreshold={0.5}
            initialNumToRender={4}
          />
        </View>
      </View>
    );

  /**
       #A list of 10 (or fewer) upcoming matches for the team. You should show the: 
       name of the rival team, the date, and the competition (Champions League, Primera Division,
  
        get `/v2/teams/${team_id}/matches/?limit=10`
        response.matches: for each match:
        date: match.utcDate,
        rival team: match.awayTeam.name
        competition: match.competition.name
       */
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

const BH = AppStyles.borderHelper;
const containerSize = {
  width: AppSizes.DEVICE_WIDTH,
  height: AppSizes.DEVICE_HEIGHT,
};
const popupDimens = getRelativeDimens({ height: 300, width: 230 });
const titleFlex = 0.15; // 0.27
const noTitleFlex = 0.1;
const buttonsFlex = 0.3; // 0.25
const buttonsVerticalFlex = 0.38;
const contentFlex = 1 - titleFlex - buttonsFlex;

const styles = StyleSheet.create({
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
    //...AppSizes.relativePopup
    ...containerSize
  },
  webViewDialogStyle: {
    backgroundColor: colors.white,
    alignSelf: "center",
    ...containerSize,
    //width: AppSizes.DEVICE_WIDTH,
    //height: popupDimens.height
  },
  dialogTitleFrame: {
    flex: titleFlex,
    width: "100%",
    backgroundColor: colors.white,
    ...AppStyles.center_col,
    marginTop: getRelativeHeight(20),
    //...BH
  },
  titleInnerFrame: {
    ...AppStyles.top_center_col,
    width: "100%",
    //...AppStyles.borderHelper
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
    //...AppStyles.borderHelper,
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
    //...AppStyles.borderHelper
  },
  dialogContentFrame: {
    width: "90%",
    ...AppStyles.top_center_col,
    paddingVertical: getRelativeHeight(5),
    //...AppStyles.borderHelper
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
    //...AppStyles.borderHelper
  },
  verticalButtonsFrame: {
    flex: buttonsVerticalFlex,
    ...AppStyles.space_around_center_col,
    backgroundColor: colors.white,
    marginBottom: getRelativeHeight(10),
    //...AppStyles.borderHelper
  },
  webView: {
    flex: 1,
  },
});
