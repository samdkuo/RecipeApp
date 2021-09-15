import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";

const { height } = Dimensions.get("screen");

const routes = [{ component: Home, path: "/", exact: true }];
const App = () => {
  return (
    <Switch>
      {routes.map(
        (
          route: { component: any; path: string; exact: boolean },
          idx: number
        ) => {
          return (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              render={() => (
                <View style={styles.container}>
                  {/* <route.component.default {...routeProps} /> */}
                </View>
              )}
            />
          );
        }
      )}
      <Route>
        <View>Not Found</View>
      </Route>
    </Switch>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
