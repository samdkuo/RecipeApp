import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Layout = ({ children }: { children: any }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Logo</Text>
        <View>
          <Text>link 1</Text>
          <Text>link 2</Text>
          <Text>link 3</Text>
        </View>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default Layout;
