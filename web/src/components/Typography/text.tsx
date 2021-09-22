import React, { forwardRef, ReactNode, Ref, useMemo } from "react";
import {
  StyleSheet,
  StyleProp,
  TextStyle,
  Text as RNText,
  TextProps as RNTextProps,
  ViewStyle,
  Platform,
} from "react-native";

import { body, title, caption } from "../../styles/text";
import { useTheme, ThemeFont } from "../../utils/theme";
import { TestProps } from "../../types";

export type TextType =
  | "body"
  | "bodyLarge"
  | "title"
  | "title2"
  | "title3"
  | "title4"
  | "title5"
  | "title6"
  | "caption";

export interface TextProps
  extends Omit<RNTextProps, "maxFontSizeMultiplier">,
    TestProps {
  type?: TextType;
  style?: StyleProp<TextStyle>;
  children?: ReactNode;
}

export interface useTextPropsOpts
  extends Pick<RNTextProps, "accessibilityRole"> {
  type?: TextType;
}

export function useTextProps({
  accessibilityRole,
  type = "body",
}: useTextPropsOpts) {
  const { fonts } = useTheme();

  const fontWeight: ThemeFont = useMemo(() => {
    return ["body", "bodyLarge"].includes(type) ? "regular" : "semibold";
  }, [type]);

  // switch between font weights based on text type
  const font = useMemo(() => fonts[fontWeight], [fontWeight, fonts]);
  const isHeading = useMemo(
    () =>
      ["title", "title2", "title3", "title4", "title5", "title6"].includes(
        type
      ),
    [type]
  );

  const ariaLevel = useMemo(() => {
    if (isHeading) {
      switch (type) {
        case "title":
          return "1";
        case "title2":
          return "2";
        case "title3":
          return "3";
        case "title4":
          return "4";
        case "title5":
          return "5";
        case "title6":
          return "6";
        default:
          return undefined;
      }
    }

    return undefined;
  }, [isHeading, type]);

  return {
    accessibilityRole: accessibilityRole ?? (isHeading ? "header" : "text"),
    accessibilityLevel: isHeading ? ariaLevel : null,
    fontStyles: [font, textStyles[type]],
  };
}

export const Text = forwardRef(function Text(
  {
    children,
    style,
    type,
    accessibilityRole,
    testID,
    numberOfLines,
    ...rest
  }: TextProps,
  ref: Ref<RNText>
) {
  const { colors } = useTheme();
  const { fontStyles, ...props } = useTextProps({ type, accessibilityRole });
  const safariStyles = useMemo(() => {
    if (Platform.OS !== "web") return undefined;

    const ua = navigator?.userAgent?.toLowerCase();
    if (ua.indexOf("safari") !== -1 && ua.indexOf("chrome") === -1) {
      if (numberOfLines === 1) {
        return {
          whiteSpace: "nowrap",
        } as ViewStyle;
      }

      return {
        WebkitLineClamp: numberOfLines,
      } as ViewStyle;
    }

    return undefined;
  }, [numberOfLines]);

  return (
    <RNText
      ref={ref}
      testID={testID}
      numberOfLines={numberOfLines}
      style={[
        textStyles.root,
        safariStyles,
        {
          color: colors.textPrimary,
        },
        fontStyles,
        style,
      ]}
      {...props}
      {...rest}
    >
      {children}
    </RNText>
  );
});

/* eslint-disable react-native/no-unused-styles */
export const textStyles = StyleSheet.create({
  root: body.normal,
  title: title.one,
  title2: title.two,
  title3: title.three,
  title4: title.four,
  title5: title.five,
  title6: title.six,
  bodyLarge: body.large,
  body: {
    // default, see root
  },
  caption: caption.normal,
});
/* eslint-enable react-native/no-unused-styles */
