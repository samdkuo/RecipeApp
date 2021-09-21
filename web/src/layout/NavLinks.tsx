import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Navigation = () => {
  return (
    <View style={styles.container}>
      <Text>Logo</Text>
      <View>
        <Text>link 1</Text>
        <Text>link 2</Text>
        <Text>link 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default Navigation;
