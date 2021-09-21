import React from "react";
import { View, Text, Image } from "react-native";

function RecipeCard() {
  return (
    <View
      style={{
        borderColor: "red",
        borderWidth: 1,
        flexDirection: "row",
      }}
    >
      <Image
        style={{ width: 100, height: 100 }}
        source={{
          uri: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
        }}
      />
      <Text>Title</Text>
    </View>
  );
}

export default RecipeCard;
