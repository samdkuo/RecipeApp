import React, { useCallback } from "react";
import {
  Text,
  TextInput,
  Pressable,
  View,
  StyleSheet,
  Button,
} from "react-native";
import { Formik } from "formik";
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

const IngredientInput = (handleSubmit: (values: Ingredient) => void) => {
  return (
    <View style={{ marginTop: 8 }}>
      <Text style={{ textTransform: "capitalize", color: colors.primary }}>
        Add Ingredients
      </Text>

      <Formik
        initialValues={{ name: "", quantity: "" }}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, values }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextInput
              style={[styles.inputs, { flex: 0.9 }]}
              placeholder="name"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
            />

            <TextInput
              style={[styles.inputs, { width: 80 }]}
              placeholder="quantity"
              onChangeText={handleChange("quantity")}
              onBlur={handleBlur("quantity")}
              value={values.quantity}
            />

            <Pressable
              style={[
                styles.submit,
                {
                  marginTop: 0,
                  paddingHorizontal: 16,
                },
              ]}
              onPress={() => handleSubmit(values)}
            >
              <Text style={{ color: "white" }}>Add</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

interface Ingredient {
  name: string;
  quantity: string;
}

interface Recipe {
  name: string;
  description: string;
  ingredients: Array<Ingredient>;
  directions: string;
}

const colors = getColors();

function RecipeForm({}: RecipeFormProps) {
  const [recipeList, setRecipeList] = React.useState<Array<Recipe>>([]);

  const [ingredientsList, setIngredientsList] = React.useState<
    Array<Ingredient>
  >([]);

  const handleIngredientSubmit = useCallback(
    (values: Ingredient) => {
      setIngredientsList([...ingredientsList, values]);
    },
    [ingredientsList]
  );

  const handleSubmit = (values: Recipe) => {
    console.log(values);
    setRecipeList([...recipeList, values]);
  };

  return (
    <View>
      <Formik
        initialValues={{
          name: "",
          description: "",
          ingredients: [],
          directions: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <View style={styles.container}>
            <Text style={styles.title}>Add new Recipe</Text>

            <Input label="Dish Name" />
            <Input label="description" multi />
            {/* <IngredientInput handleSubmit={handleIngredientSubmit}/> */}

            <View>
              {ingredientsList.map((ingredient, index) => (
                <Text
                  key={index}
                >{`${ingredient.name} ${ingredient.quantity}`}</Text>
              ))}
            </View>
            <Input label="directions" multi />

            <Pressable
              style={styles.submit}
              onPress={() => handleSubmit(values)}
            >
              <Text style={{ color: "white" }}>Submit</Text>
            </Pressable>
          </View>
        )}
      </Formik>

      <View>
        {recipeList.map((recipe, index) => (
          <Text key={index}>{`${recipe.name} ${recipe.description}`}</Text>
        ))}
      </View>
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
