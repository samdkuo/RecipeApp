import React from "react";
import { View, Text, Image } from "react-native";

interface RecipeCardProps {
  title: string;
  totalIngredients: number;
  cookTime: number | undefined;
}

function RecipeCard({ title, totalIngredients, cookTime }: RecipeCardProps) {
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#d9dddc",
        overflow: "hidden",
        width: 250,
      }}
    >
      <Image
        style={{ width: "100%", height: 200 }}
        source={{
          uri: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
        }}
      />
      <View>
        <Text>{title}</Text>
        <View>
          <Text>{`${totalIngredients} ingredients | ${cookTime} min`}</Text>
        </View>
      </View>
    </View>
  );
}

export default RecipeCard;
