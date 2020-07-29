/**
 * App Theme - Fonts
 */
import { Platform, PixelRatio } from "react-native";
import { DEVICE_HEIGHT, DEVICE_WIDTH, ASPECT_RATIO, HeightRatio, WidthRatio } from "./sizes";

const PixelDensity = PixelRatio.get();
console.log(`PixelRatio.get(): ${PixelDensity}`);

const widthScale = size => WidthRatio * size;
const heightScale = size => HeightRatio * size;

export function moderateScale(size, factor = ASPECT_RATIO) {
  const scaled = widthScale(size) - size;
  return size + Math.ceil(scaled * factor);
}

export function scaledFontSize(fontSize) {
  let scaledFont = fontSize;
  //roundToNearestPixel: Rounds a layout size (dp) to the nearest layout size that corresponds to an integer number of pixels
  if (Platform.OS === "ios") {
    scaledFont = Math.round(PixelRatio.roundToNearestPixel(fontSize));
    console.log(`iOS scaledFont: ${scaledFont}`);
  } else {
    scaledFont = Math.round(PixelRatio.roundToNearestPixel(fontSize));
    console.log(`Android scaledFont: ${scaledFont}`);
  }

  let finalFontSize = moderateScale(scaledFont);
  console.log(`finalFontSize: ${finalFontSize}\n`);
  return finalFontSize;
}

export function scaledLineHeight(fontSize) {
  const multiplier = fontSize > 20 ? 0.2 : 0.33; // 1.2
  const lineHeight = parseInt(fontSize + fontSize * multiplier, 10);
  return lineHeight;
}

const appBaseFont = scaledFontSize(10.7);
const appBaseLineHeight = scaledLineHeight(appBaseFont);

const base = {
  fontSize: appBaseFont,
  lineHeight: appBaseLineHeight,
  textAlign: "left",
  letterSpacing: 0.07,
  ...Platform.select({
    ios: {
      fontFamily: "San Francisco"
    },
    android: {
      fontFamily: "Roboto"
    }
  })
};

const Fonts = {
  verySmall: {
    ...base,
    fontSize: base.fontSize * 0.7, // 9.3
    lineHeight: scaledLineHeight(base.fontSize * 0.5)
  },
  small: {
    ...base,
    fontSize: base.fontSize * 0.875, // 9.3
    lineHeight: scaledLineHeight(base.fontSize * 0.875)
  },
  base: { ...base }, // 10.7
  h5: {
    ...base,
    fontSize: base.fontSize * 1.05, // 11.23
    lineHeight: scaledLineHeight(base.fontSize * 1.05)
  },
  h4: {
    ...base,
    fontSize: base.fontSize * 1.1, // 11.77 but looks like 10.7 dp
    lineHeight: scaledLineHeight(base.fontSize * 1.1)
  },
  h34: {
    ...base,
    fontSize: base.fontSize * 1.18,
    lineHeight: scaledLineHeight(base.fontSize * 1.18)
  },
  h3: {
    ...base,
    fontSize: base.fontSize * 1.25, // 13.37
    lineHeight: scaledLineHeight(base.fontSize * 1.25)
  },
  h23: {
    ...base,
    fontSize: base.fontSize * 1.4,
    lineHeight: scaledLineHeight(base.fontSize * 1.4)
  },
  h2: {
    ...base,
    fontSize: base.fontSize * 1.5,
    lineHeight: scaledLineHeight(base.fontSize * 1.5)
  },
  h1: {
    ...base,
    fontSize: base.fontSize * 1.75,
    lineHeight: scaledLineHeight(base.fontSize * 1.75)
  },
  h0: {
    ...base,
    fontSize: base.fontSize * 2,
    lineHeight: scaledLineHeight(base.fontSize * 2)
  },
  light: {
    fontFamily: "NotoSans-ExtraLight"
  },
  thin: {
    fontFamily: "NotoSans-Thin"
  },
  semibold: {
    fontFamily: "NotoSans-SemiBold"
  },
  bold: {
    fontFamily: "NotoSans-Bold" //"Lato-Bold"
  }
};

export default Fonts;
