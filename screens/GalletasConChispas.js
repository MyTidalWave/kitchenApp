import React from "react";
import Ingredient from "../components/Ingredient";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState, useEffect } from "react";
import myColors from "../constants/colors";
//import axios from "axios";

const brownSugarVolumeInMl = 59.1470591;
const standardSugarVolumeInMl = 59.1470591;
const butterMassInG = 56;
const vanillaVolumeInMl = 14.7867648;
const flourVolumeInMl = 354.882355;
const bakingPowderVolumeInMl = 4.92892159;
const chocoChipsVolumeInMl = 236.5882364;

const GalletasConChispas = ({
  volume,
  changeIngredientVolume,
  mass,
  changeIngredientMass,
  changeScreen,
}) => {
  console.log("Estamos en galletas ingredientes");
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

  /*useEffect(() => {
    const fetchData = async () => {
      const results = await axios("http://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "GZSWXTYbno6v2HVPLP8HccMvOiKxWIMB",
        },
      });
    }
    console.log(results)
    fetchData()
  })*/

  return (
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
      <View>
        <Button
          style={styles.button}
          title="Ir a procedimiento"
          color={myColors.primary}
          onPress={() => {
            changeScreen(2);
          }}
        />
      </View>
      <View>
        <Button
          style={styles.button}
          title="Regresar a Home"
          color={myColors.secondary}
          onPress={() => {
            changeScreen(0);
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

export default GalletasConChispas;
