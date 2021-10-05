// import React, { Ref, forwardRef, useMemo } from "react";
// import { Text, TextProps } from "react-native";

// export type TextColor =
//   | "white"
//   | "gray050"
//   | "gray100"
//   | "gray200"
//   | "gray300"
//   | "gray400"
//   | "gray500"
//   | "gray600"
//   | "gray700"
//   | "gray800"
//   | "gray900"
//   | "gray950"
//   | "black";

// export type TextFont = "bold" | "semiBold" | "regular" | "italic";
// export interface TypographyProps extends TextProps {
//   color?: TextColor;
//   font?: TextFont;
// }

// // /**
// //  * A text component with preset fonts, sizes, and colors.
// //  *
// //  * example: https://smartrent-ui.com/components/general/typography
// // */

// export const Typography = forwardRef(function Typography(
//   { color, font, style, ...rest }: TypographyProps,
//   ref: Ref<Text>
// ) {
//   const { colors, fonts } = useTheme();

//   const colorStyle = useMemo(() => {
//     if (!color) return undefined;
//     return colors[color as ThemeColor];
//   }, [colors, color]);

//   const fontStyle = useMemo(() => {
//     if (!font) return undefined;
//     return fonts[font];
//   }, [fonts, font]);

//   return (
//     <Text
//       ref={ref}
//       style={[colorStyle ? { color: colorStyle } : undefined, fontStyle, style]}
//       {...rest}
//     />
//   );
// });
