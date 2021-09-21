import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Layout = ({ children }: { children: any }) => {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text>Logo</Text>
        <View style={styles.navLinks}>
          <Text>link 1</Text>
          <Text>link 2</Text>
          <Text>link 3</Text>
        </View>
        <View>
          <Button
            title="Sign In"
            onPress={() => {
              ("");
            }}
          />
        </View>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navLinks: {
    flexDirection: "row",
  },
  container: {
    padding: 16,
  },
});

export default Layout;
