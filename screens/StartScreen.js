import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import myColors from "../constants/colors";

const StartScreen = ({ changeScreen }) => {
  return (
    <View>
      <Text>Esta es la página principal</Text>
      <View>
        <Text>Galletas con chispas</Text>
        <Button
          style={styles.button}
          title="Ir"
          color={myColors.secondary}
          onPress={() => {
            changeScreen(1);
          }}
        />
        <Text>Pastel de vainilla</Text>
        <Button
          style={styles.button}
          title="Ir"
          color={myColors.secondary}
          onPress={() => {
            changeScreen(3);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ingredients: {
    flex: 1,
    paddingLeft: 20,
  },
  button: {},
});

export default StartScreen;
