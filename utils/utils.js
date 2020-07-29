import React from "react";
import { PixelRatio, ActivityIndicator, View, StyleSheet, Text } from "react-native";
import { WidthRatio, HeightRatio } from "../theme/sizes";
import { colors, AppStyles, getRelativeWidth, lightTheme, getRelativeHeight } from "../theme/index";
import axios from "react-native-axios";

export const FOOTBALL_KEY = "847061753ea04cb7b6cbbfd213817539";

export function scaledDP(size) {
  // getPixelSizeForLayoutSize: Converts a layout size (dp) to pixel size (px).
  return PixelRatio.getPixelSizeForLayoutSize(size);
}

export const isValidUrl = url => url && typeof url === "string" && (url.startsWith("http") || url.startsWith("file"));

export function loadingMessage(msg, hasSpinner = true) {
  return (
    <View style={[styles.msgContainer]}>
      <View style={[styles.msgView]}>
        <View style={[styles.msgRow]}>
          <Text style={[styles.msgText]}>{msg}</Text>
        </View>
      </View>
      {hasSpinner && (
        <View style={[styles.activityIndicatorView]}>
          {<ActivityIndicator animating size={"large"} color={colors.persimmon} />}
        </View>
      )}
    </View>
  );
}

export function renderEmptyComponent(msg) {
  <View style={styles.emptyComponentFrame}>
  {loadingMessage(msg, true)}
</View>
}



export async function getTeam(id) {
return axios.get(`http://api.football-data.org/v2/teams/${id}`, {
  headers: {
    "X-Auth-Token": FOOTBALL_KEY,
    dataType: "json"
  }
})
  .then((response) => {
    if (response) {
      return response.data;
    }
    return null;
  })
  .catch((error) => {
    console.log(`getTeam error: ${error}`);
    return null;
  });
}

export async function getCompetitionTeam(competitionId) {
  return axios.get(`http://api.football-data.org/v2/competitions/${competitionId}/teams`, {
    headers: {
      "X-Auth-Token": FOOTBALL_KEY,
      dataType: "json"
    }
  })
    .then((response) => {
      if (response.data.teams) {
        return response.data.teams;
      }
      return [];
    })
    .catch((error) => {
      console.log(`getCompetitionTeam error: ${error}`);
      return [];
    });
}


export async function getCompetitions() {
  return axios({
    method: "GET",
    url: "http://api.football-data.org/v2/competitions/",
    headers: {
      "X-Auth-Token": FOOTBALL_KEY,
      dataType: "json",
      type: "GET",
    },
  })
    .then((response) => {
      if (response.data.competitions) {
        return response.data.competitions.map((item, index) => ({
          id: item.id,
          name: item.name,
          plan: item.plan,
        }));
      }
      return [];
    })
    .catch((error) => {
      console.log(`getCompetitions error: ${error}`);
      return [];
    });
}

export async function getTeamRequests(competitions) {
  let requests = [];
  if (competitions && competitions.length > 0) {
    for (let i = 0; i < competitions.length; i++) {
      let id = competitions[i].id;

      let request = axios.get(`http://api.football-data.org/v2/competitions/${id}/teams`, {
        headers: {
          "X-Auth-Token": FOOTBALL_KEY,
          dataType: "json",
          type: "GET",
        },
      });
      requests.push(request);
    }
  }
  return requests;
}

export async function getTeamMatches(team_id) {
    return axios.get(`http://api.football-data.org/v2/teams/${team_id}/matches/?limit=10`, {
      headers: {
        "X-Auth-Token": FOOTBALL_KEY,
        dataType: "json"
      }
    })
      .then((response) => {
        let matches = [];
        if (response.data.matches) {
          response.data.matches.forEach((match,index) =>{
            matches = matches.concat({
              id: match.id,
              date: match.utcDate, 
              rivalTeam: match.homeTeam.name, 
              competition: match.competition.name, 
              awayTeam: match.awayTeam.name
            });
          });
          
          return matches;
        }
        return [];
      })
      .catch((error) => {
        console.log(`getTeamMatches for team: ${team_id} got error: ${error}`);
        return [];
      });
}



const message = {
  msgContainer: {
    backgroundColor: colors.transparent,
    ...AppStyles.top_center_col
  },
  activityIndicatorView: {
    flex: 0.8,
    ...AppStyles.top_center_col
  },
  msgView: {
    flex: 0.2,
    ...AppStyles.top_center_col
    //...AppStyles.borderHelper
  },
  msgRow: {
    ...AppStyles.center_align_row,
    flex: 1,
    padding: getRelativeWidth(10)
  },
  msgText: {
    ...AppStyles.h34,
    color: colors.darkGrey
  }
};

const styles = StyleSheet.create({
  ...message,
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: lightTheme.borderColor,
    marginVertical: getRelativeHeight(5)
  },
  emptyComponentFrame: {
    ...AppStyles.center_align_col, width: "100%", flex: 1
  }
});