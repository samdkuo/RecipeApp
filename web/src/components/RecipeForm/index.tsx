import React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { getColors } from "../../theme/colors";

interface RecipeFormProps {}

function RecipeForm({}: RecipeFormProps) {
  return (
    <View style={styles.container}>
      <Text>Add Recipe</Text>

      <TextInput style={styles.inputs} placeholder="dish name" />
      <TextInput
        style={styles.inputs}
        placeholder="description"
        multiline
        numberOfLines={4}
      />
      <TextInput
        style={styles.inputs}
        placeholder="directions"
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.submit}>
        <Text style={{ color: "white" }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

export default RecipeForm;

const styles = StyleSheet.create({
  container: {
    width: "50%",
    marginVertical: 16,
    padding: 8,
    borderColor: "red",
    borderWidth: 1,
  },
  inputs: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 8,
    padding: 8,
  },
  submit: {
    padding: 8,
    marginTop: 4,
    borderRadius: 4,
    backgroundColor: getColors().primary,
    justifyContent: "center",
    alignItems: "center",
  },
});
