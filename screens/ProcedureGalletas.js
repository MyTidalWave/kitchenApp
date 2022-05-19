import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import myColors from "../constants/colors";

const ProcedureGalletas = ({ changeScreen }) => {
  console.log("Se entro en procedimiento");
  return (
    <View>
      <Text>Procedimiento</Text>
      <Text>
        En un bowl
        <ol>
          <li>
            <input type="checkbox" />
            Batir el huevo hasta que duplique su tamaño
          </li>
          <li>
            <input type="checkbox" />
            Agregar la azucar estandar en 3 partes batiendo continuamente
          </li>
          <li>
            <input type="checkbox" />
            Agregar la azúcar morena en 3 partes batiendo continuamente
          </li>
          <li>
            <input type="checkbox" />
            Agregar la mantequilla, batir hasta que no quede rastros de ésta
          </li>
          <li>
            <input type="checkbox" />
            Agregar la esencia de vainilla, batir hasta que no quede rastro
          </li>
          <li>
            <input type="checkbox" />
            Agregar la harina y el polvo para hornear mediante un colador para
            cernirla. Batir hasta que no quede rastro
          </li>
          <li>
            <input type="checkbox" />
            Integrar las chispas de chocolate, asegurarse que estén repartidas
            por toda la masa
          </li>
          <li>
            <input type="checkbox" />
            Envolver la masa en papel film y meterle al refrigerador por 30 mins
          </li>
          <li>
            <input type="checkbox" />
            Precalentar el horno a 180 grados - hacer bolas del mismo tamaño
            (aproximadamente de 37 gramos para hacer 12 galletas)
          </li>
          <li>
            <input type="checkbox" />
            Poner papel pergamino en una charola o engrasarla con mantequilla
          </li>
          <li>
            <input type="checkbox" />
            Llevar al horno durante 20 mins o hasta que se sientan ligeramente
            duras
          </li>
        </ol>
      </Text>
      <Button
        style={styles.button}
        title="Regresar a ingredientes"
        color={myColors.primary}
        onPress={() => {
          changeScreen(1);
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

export default ProcedureGalletas;
