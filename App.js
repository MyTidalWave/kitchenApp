import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import myColors from "./constants/colors";
import Header from "./components/Header";
import { useState } from "react";
import NumberFormat from "react-number-format";
import Ingredient from "./components/Ingredient";
import Procedure from "./screens/Procedure";

const volume = ["mL", "tsp", "tbsp", "tazas", "L"];
const mass = ["g", "oz", "lb", "Kg"];

const brownSugarVolumeInMl = 59.1470591;
const standardSugarVolumeInMl = 59.1470591;
const butterMassInG = 56;
const vanillaVolumeInMl = 14.7867648;
const flourVolumeInMl = 354.882355;
const bakingPowderVolumeInMl = 4.92892159;
const chocoChipsVolumeInMl = 236.5882364;

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const [brownSugarVolume, setBrownSugarVolume] =
    useState(brownSugarVolumeInMl);
  const [brownSugarVolumeIndex, setBrownSugarVolumeIndex] = useState(0);

  const [standardSugarVolume, setStandardSugarVolume] = useState(
    standardSugarVolumeInMl
  );
  const [standardSugarVolumeIndex, setStandardSugarVolumeIndex] = useState(0);

  const [butterMass, setButterMass] = useState(butterMassInG);
  const [butterMassIndex, setButterMassIndex] = useState(0);

  const [vanillaVolume, setVanillaVolume] = useState(vanillaVolumeInMl);
  const [vanillaVolumeIndex, setVanillaVolumeIndex] = useState(0);

  const [flourVolume, setFlourVolume] = useState(flourVolumeInMl);
  const [flourVolumeIndex, setFlourVolumeIndex] = useState(0);

  const [bakingPowderVolume, setBakingPowderVolume] = useState(
    bakingPowderVolumeInMl
  );
  const [bakingPowderVolumeIndex, setBakingPowderVolumeIndex] = useState(0);

  const [chocoChipsVolume, setChocoChipsVolume] =
    useState(chocoChipsVolumeInMl);
  const [chocoChipsVolumeIndex, setChocoChipsVolumeIndex] = useState(0);

  const changeIngredientVolume = (
    ingredientIndex,
    ingredientVolume,
    ingredientVolumeInMl
  ) => {
    var newIngredientVolume;
    switch (ingredientIndex) {
      case 0:
        newIngredientVolume = ingredientVolumeInMl;
        break;
      case 1:
        //1ml a tbsp. 4.92892159 ml = 1 tsp
        newIngredientVolume = ingredientVolume / 4.92892159;
        break;
      case 2:
        //tsp a tbsp. 3tsp = 1tbsp
        newIngredientVolume = ingredientVolume / 3;
        break;
      case 3:
        //tbsp a taza. 16 tbsp = 1 taza
        newIngredientVolume = ingredientVolume / 16;
        break;
      case 4:
        //1 taza a Litro. 1000 mL = 1 L
        newIngredientVolume = ingredientVolumeInMl / 1000;
        break;
    }
    return newIngredientVolume;
  };
  const changeIngredientMass = (
    ingredientIndex,
    ingredientMass,
    ingredientMassInG
  ) => {
    var newIngredientMass;
    switch (ingredientIndex) {
      case 0:
        newIngredientMass = ingredientMassInG;
        break;
      case 1:
        //1g a oz. 28.3495231 g = 1 oz
        newIngredientMass = ingredientMass / 28.3495231;
        break;
      case 2:
        //oz a lb. 16 oz = 1 lb
        newIngredientMass = ingredientMass / 16;
        break;
      case 3:
        //lb a kg. 1000 g = 1 kg
        newIngredientMass = ingredientMassInG / 1000;
        break;
    }
    return newIngredientMass;
  };

  const changeBrownSugarVolume = () => {
    const newBrownSugarVolumeIndex =
      (brownSugarVolumeIndex + 1) % volume.length;
    setBrownSugarVolumeIndex(newBrownSugarVolumeIndex);

    const newBrownSugarVolume = changeIngredientVolume(
      newBrownSugarVolumeIndex,
      brownSugarVolume,
      brownSugarVolumeInMl
    );
    setBrownSugarVolume(newBrownSugarVolume);
  };

  const changeStandardSugarVolume = () => {
    const newStandardSugarVolumeIndex =
      (standardSugarVolumeIndex + 1) % volume.length;
    setStandardSugarVolumeIndex(newStandardSugarVolumeIndex);

    const newStandardSugarVolume = changeIngredientVolume(
      newStandardSugarVolumeIndex,
      standardSugarVolume,
      standardSugarVolumeInMl
    );
    setStandardSugarVolume(newStandardSugarVolume);
  };

  const changeButterMass = () => {
    const newButterIndex = (butterMassIndex + 1) % mass.length;
    setButterMassIndex(newButterIndex);

    const newButterMass = changeIngredientMass(
      newButterIndex,
      butterMass,
      butterMassInG
    );
    setButterMass(newButterMass);
  };

  const changeVanillaVolume = () => {
    const newVanillaVolumeIndex = (vanillaVolumeIndex + 1) % volume.length;
    setVanillaVolumeIndex(newVanillaVolumeIndex);

    const newVanillaVolume = changeIngredientVolume(
      newVanillaVolumeIndex,
      vanillaVolume,
      vanillaVolumeInMl
    );
    setVanillaVolume(newVanillaVolume);
  };

  const changeFlourVolume = () => {
    const newFlourVolumeIndex = (flourVolumeIndex + 1) % volume.length;
    setFlourVolumeIndex(newFlourVolumeIndex);

    const newFlourVolume = changeIngredientVolume(
      newFlourVolumeIndex,
      flourVolume,
      flourVolumeInMl
    );
    setFlourVolume(newFlourVolume);
  };

  const changeBakingPowderVolume = () => {
    const newBakingPowderVolumeIndex =
      (bakingPowderVolumeIndex + 1) % volume.length;
    setBakingPowderVolumeIndex(newBakingPowderVolumeIndex);

    const newBakingPowderVolume = changeIngredientVolume(
      newBakingPowderVolumeIndex,
      bakingPowderVolume,
      bakingPowderVolumeInMl
    );
    setBakingPowderVolume(newBakingPowderVolume);
  };

  const changeChocoChipsVolume = () => {
    const newChocoChipsVolumeIndex =
      (chocoChipsVolumeIndex + 1) % volume.length;
    setChocoChipsVolumeIndex(newChocoChipsVolumeIndex);

    const newChocoChipsVolume = changeIngredientVolume(
      newChocoChipsVolumeIndex,
      chocoChipsVolume,
      chocoChipsVolumeInMl
    );
    setChocoChipsVolume(newChocoChipsVolume);
  };

  let content = (
    <View style={styles.ingredients}>
      <Text>Ingredientes:</Text>
      <Text>
        <ul>
          <li>
            <Ingredient description="1 huevo" />
          </li>
          <li>
            <Ingredient
              ingredientMetric={brownSugarVolume}
              ingredientIndex={brownSugarVolumeIndex}
              changeIngredientMetric={changeBrownSugarVolume}
              measure={volume}
              description="de azúcar morena o mascabado"
            />
          </li>

          <li>
            <Ingredient
              ingredientMetric={standardSugarVolume}
              ingredientIndex={standardSugarVolumeIndex}
              changeIngredientMetric={changeStandardSugarVolume}
              measure={volume}
              description="de azúcar estándar"
            />
          </li>
          <li>
            <Ingredient
              ingredientMetric={butterMass}
              ingredientIndex={butterMassIndex}
              changeIngredientMetric={changeButterMass}
              measure={mass}
              description="de mantequilla a temperatura ambiente"
            />
          </li>
          <li>
            <Ingredient
              ingredientMetric={vanillaVolume}
              ingredientIndex={vanillaVolumeIndex}
              changeIngredientMetric={changeVanillaVolume}
              measure={volume}
              description="de esencia de vainilla"
            />
          </li>
          <li>
            <Ingredient
              ingredientMetric={flourVolume}
              ingredientIndex={flourVolumeIndex}
              changeIngredientMetric={changeFlourVolume}
              measure={volume}
              description="de harina"
            />
          </li>
          <li>
            <Ingredient
              ingredientMetric={bakingPowderVolume}
              ingredientIndex={bakingPowderVolumeIndex}
              changeIngredientMetric={changeBakingPowderVolume}
              measure={volume}
              description="de polvo para hornear"
            />
          </li>
          <li>
            <Ingredient
              ingredientMetric={chocoChipsVolume}
              ingredientIndex={chocoChipsVolumeIndex}
              changeIngredientMetric={changeChocoChipsVolume}
              measure={volume}
              description="de chispas de chocolate o trozos
              de chocolate"
            />
          </li>
        </ul>
      </Text>
    </View>
  );

  let buttonSign = "Ir a procedimiento";

  if (currentScreen === 1) {
    content = <Procedure />;
    buttonSign = "Regresar a ingredientes";
  }

  return (
    <View style={styles.container}>
      <Header style={styles.screen} title={"Hello there!"} />
      {content}
      <Button
        style={styles.button}
        title={buttonSign}
        color={myColors.primary}
        onPress={() => {
          setCurrentScreen((currentScreen + 1) % 2);
        }}
      />
    </View>
  );
}

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
