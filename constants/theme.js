import { Dimensions } from "react-native";


const { width, height } = Dimensions.get("window");




export const COLORS = {
    // base colors
    primary: "#D4D5D6", // lightgray
    secondary: "#0047AB",   // blue

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",
    lightGray: "#ABAFB8",
    lightGray2: "#EFEFF0",
    gray: "#BEC1D2",
    LightBlue: '#42B0FF',
    LightBlueWhite: '#B5DCFF',
    darkGreen: '#59990F',
    darkGray: '#898C95',
    rose:'#de6fa1',
    red:'#ff6326',
    green:'#00aa95',
    transparentLightGray: '#CCD4D5D6',
    transparentLightGray1: 'rgba(255,255,255,0.7)',
};

export const SIZES = {
    // global sizes
    border:13,
    base: 8,
    font: 14,
    radius: 20,
    nextRadius: 60,
    padding: 24,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily: "Lato_900Black", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Lato_900Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Lato_700Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Lato_700Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Lato_700Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Lato_400Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Lato_400Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Lato_400Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Lato_400Regular", fontSize: SIZES.body4, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;