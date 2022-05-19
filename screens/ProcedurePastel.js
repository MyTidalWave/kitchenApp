import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import myColors from "../constants/colors";

const ProcedurePastel = ({ changeScreen }) => {
  return (
    <View>
      <Text>Procedimiento</Text>
      <Text>
        <ol>
          <li>
            <input type="checkbox" />
            Batir en un bowl los huevos por 5 minutos a velocidad media hasta
            que hayan doblado su volumen y se vean más claros
          </li>
          <li>
            <input type="checkbox" />
            Seguir batiendo a la misma velocidad mientras se agrega el azucar de
            poco en poco.
          </li>
          <li>
            <input type="checkbox" />
            Seguir batiendo a la misma velocidad mientras se agrega el aceite de
            poco en poco
          </li>
          <li>
            <input type="checkbox" />
            Seguir batiendo a la misma velocidad mientras se agrega la leche de
            poco en poco
          </li>
          <li>
            <input type="checkbox" />
            Añadir la cucharadita de vainilla
          </li>
          <li>
            <input type="checkbox" />
            Batir a velocidad muy baja mientras agregamos la harina de poco en
            poco, ésta debe de haber sido cernida previamente.
          </li>
          <li>
            <input type="checkbox" />
            Agregar las 2.5 cucharaditas de polvo para hornear, éste debe de
            haber sido cernido previamente.
          </li>
          <li>
            <input type="checkbox" />
            En un molde previamente engrasado o forrado con papel pergamino,
            verter la masa.
          </li>
          <li>
            <input type="checkbox" />
            Llevar al horno previamente calentado a 180 grados durante 45 mins o
            hasta que al introducir un palillo al pan este salga limpio.
          </li>
          <li>
            <input type="checkbox" />
            Dejar enfriar durante 10 mins o hasta que se pueda tocar el molde
            sin quemarse antes de desmontarlo.{" "}
          </li>
        </ol>
      </Text>
      <Button
        style={styles.button}
        title="Regresar a ingredientes"
        color={myColors.primary}
        onPress={() => {
          changeScreen(3);
        }}
      />
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

export default ProcedurePastel;
