import React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { getColors } from "../../theme/colors";

interface RecipeFormProps {}

const Input = ({
  label,
  multi = false,
}: {
  label: string;
  multi?: boolean;
}) => {
  return (
    <View style={{ marginTop: 8 }}>
      <Text style={{ textTransform: "capitalize", color: colors.primary }}>
        {label}
      </Text>
      <TextInput
        style={styles.inputs}
        multiline={multi}
        numberOfLines={multi ? 4 : 1}
      />
    </View>
  );
};

const IngredientInput = () => {
  const [ingredientsList, setIngredientsList] = React.useState([]);

  return (
    <View style={{ marginTop: 8 }}>
      <Text style={{ textTransform: "capitalize", color: colors.primary }}>
        Add Ingredients
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput style={[styles.inputs, { flex: 1 }]} placeholder="name" />
        <TextInput
          style={[styles.inputs, { flex: 1 }]}
          placeholder="quantity"
        />
        <TouchableOpacity
          style={[
            styles.submit,
            {
              marginTop: 0,
              marginLeft: 8,
              paddingHorizontal: 16,
            },
          ]}
        >
          <Text style={{ color: "white" }}>Add</Text>
        </TouchableOpacity>
      </View>
      <View>
        {ingredientsList.map((ingredient, index) => (
          <Text key={index}>{ingredient}</Text>
        ))}
      </View>
    </View>
  );
};

const colors = getColors();
function RecipeForm({}: RecipeFormProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add new Recipe</Text>

      <Input label="Dish Name" />
      <Input label="description" multi />
      <IngredientInput />
      <Input label="directions" multi />

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
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 4,
  },
  title: {
    color: colors.secondary,
    fontSize: 24,
    textTransform: "capitalize",
    marginBottom: 8,
  },
  inputs: {
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    outlineColor: colors.cyan,
    outlineWidth: 1,
  },
  submit: {
    padding: 8,
    marginTop: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});
