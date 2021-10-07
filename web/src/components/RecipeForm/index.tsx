import React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
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

const IngredientInput = () => {
  const [ingredientsList, setIngredientsList] = React.useState([]);

  const handleSubmit = (values: { values: any }) => {
    setIngredientsList([]);
  };
  return (
    <View style={{ marginTop: 8 }}>
      <Text style={{ textTransform: "capitalize", color: colors.primary }}>
        Add Ingredients
      </Text>

      <Formik
        initialValues={{ name: "", quantity: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextInput
              style={[styles.inputs, styles.ingredientInputs]}
              placeholder="name"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
            />

            <TextInput
              style={[styles.inputs, styles.ingredientInputs]}
              placeholder="quantity"
              onChangeText={handleChange("quantity")}
              onBlur={handleBlur("quantity")}
              value={values.quantity}
            />

            <TouchableOpacity
              style={[
                styles.submit,
                {
                  marginTop: 0,
                  paddingHorizontal: 16,
                },
              ]}
              // onPress={handleSubmit}s
            >
              <Text style={{ color: "white" }}>Add</Text>
            </TouchableOpacity>

            <View>
              {ingredientsList.map((ingredient, index) => (
                <Text key={index}>{ingredient}</Text>
              ))}
            </View>
          </View>
        )}
      </Formik>
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
  ingredientInputs: { flex: 0.95 },
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
