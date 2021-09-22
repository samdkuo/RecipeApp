import React from "react";
import { Text } from "react-native";
import Layout from "../layout/Layout";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
  return (
    <Layout>
      <Text>Home</Text>
      <RecipeCard title={"Hamburger"} totalIngredients={10} cookTime={40} />
    </Layout>
  );
};

export default Home;
