import React from "react";
//import firebase from "react-native-firebase";
//import Countly from "countly-sdk-react-native-bridge";

var CountlyURL = "http://analytics.mydomain.com";
var CountlyAppKey = "123456";

export function logEvent(name, data) {
  //Countly.sendEvent({ eventName: name, eventCount: 1, segmentation: data });
  //firebase.analytics().logEvent(name, data);
}


export const withTracking = WrappedComponent => props => {
  const { onPress, event, eventParams, ...otherProps } = props;
  return (
    <WrappedComponent
      {...otherProps}
      onPress={() => {
        event && logEvent(event, eventParams)
        props.onPress();
      }}
    />
  );
};
