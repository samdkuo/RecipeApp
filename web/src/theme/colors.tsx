export const getColors = () => {
  const isLightMode = true;

  return {
    // Elemental
    primary: "#4FA1C3",
    secondary: "#DF336F",
    tertiary: "#FFC413",
    primaryMuted: isLightMode ? "#D6EEF5" : "#0A3542",

    // Grays
    white: "#FFFFFF",
    gray050: "#FBFCFD",
    gray075: "#F5F7FA",
    gray100: "#EBEEF4",
    gray200: "#CAD0DA",
    gray300: "#BEC2CD",
    gray400: "#9A9EAA",
    gray500: "#757A87",
    gray600: "#6A6E79",
    gray700: "#3E4650",
    gray800: "#2D3238",
    gray900: "#1A1F27",
    gray950: "#11151A",
    black: "#04070B",

    // Rainbow
    pink: isLightMode ? "#DA4F7A" : "#F76894",
    purple: isLightMode ? "#9F4EB6" : "#CD77E6",
    deepPurple: isLightMode ? "#7859BC" : "#A984FA",
    indigo: isLightMode ? "#5F6BBA" : "#8292FA",
    darkBlue: isLightMode ? "#4D7CDB" : "#6998F5",
    blue: isLightMode ? "#5EA3EF" : "#73B5FF",
    lightBlue: isLightMode ? "#59B3F0" : "#7EC9FC",
    cyan: isLightMode ? "#5FC3D7" : "#79DEF2",
    teal: isLightMode ? "#52A39A" : "#4CBFB3",
    green: isLightMode ? "#7BB972" : "#7CBF73",
    lightGreen: isLightMode ? "#A6CA72" : "#ACD96C",
    lime: isLightMode ? "#D6E06D" : "#C8D96C",
    yellow: isLightMode ? "#FDEF72" : "#FFF38C",
    amber: isLightMode ? "#F7CC50" : "#FFDB73",
    orange: isLightMode ? "#F3AB47" : "#FFBF66",
    deepOrange: isLightMode ? "#EE7850" : "#FF8D66",
    brown: isLightMode ? "#886F65" : "#B29285",
  };
};
