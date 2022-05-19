import React from "react";
import axios from "axios";
import Ingredient from "../components/Ingredient";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";
import myColors from "../constants/colors";

const standardSugarMassInG = 59.1470591;
const oilVolumeInMl = 160;
const milkVolumeInMl = 160;
const vanillaVolumeInMl = 4.92892159;
const flourMassInG = 250;
const bakingPowderVolumeInMl = 4.92892159 * 2.5;

const PastelVainilla = ({
  volume,
  changeIngredientVolume,
  mass,
  changeIngredientMass,
  changeScreen,
}) => {
  const [standardSugarMass, setStandardSugarMass] =
    useState(standardSugarMassInG);
  const [standardSugarMassIndex, setStandardSugarMassIndex] = useState(0);

  const [oilVolume, setOilVolume] = useState(oilVolumeInMl);
  const [oilVolumeIndex, setOilVolumeIndex] = useState(0);

  const [milkVolume, setMilkVolume] = useState(milkVolumeInMl);
  const [milkVolumeIndex, setMilkVolumeIndex] = useState(0);

  const [vanillaVolume, setVanillaVolume] = useState(vanillaVolumeInMl);
  const [vanillaVolumeIndex, setVanillaVolumeIndex] = useState(0);

  const [flourMass, setFlourMass] = useState(flourMassInG);
  const [flourMassIndex, setFlourMassIndex] = useState(0);

  const [bakingPowderVolume, setBakingPowderVolume] = useState(
    bakingPowderVolumeInMl
  );
  const [bakingPowderVolumeIndex, setBakingPowderVolumeIndex] = useState(0);

  const changeStandardSugarMass = () => {
    const newStandardSugarMassIndex =
      (standardSugarMassIndex + 1) % mass.length;
    setStandardSugarMassIndex(newStandardSugarMassIndex);

    const newStandardSugarMass = changeIngredientMass(
      newStandardSugarMassIndex,
      standardSugarMass,
      standardSugarMassInG
    );
    setStandardSugarMass(newStandardSugarMass);
  };

  const changeOilVolume = () => {
    const newOilVolumeIndex = (oilVolumeIndex + 1) % volume.length;
    setOilVolumeIndex(newOilVolumeIndex);

    const newOilVolume = changeIngredientVolume(
      newOilVolumeIndex,
      oilVolume,
      oilVolumeInMl
    );
    setOilVolume(newOilVolume);
  };

  const changeMilkVolume = () => {
    const newMilkVolumeIndex = (milkVolumeIndex + 1) % volume.length;
    setMilkVolumeIndex(newMilkVolumeIndex);

    const newMilkVolume = changeIngredientVolume(
      newMilkVolumeIndex,
      milkVolume,
      milkVolumeInMl
    );
    setMilkVolume(newMilkVolume);
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

  const changeFlourMass = () => {
    const newFlourMassIndex = (flourMassIndex + 1) % mass.length;
    setFlourMassIndex(newFlourMassIndex);

    const newFlourMass = changeIngredientMass(
      newFlourMassIndex,
      flourMass,
      flourMassInG
    );
    setFlourMass(newFlourMass);
  };

  const [data, setData] = useState([]);

  const pedirGifs = () => {
    console.log("se pide gifs");
    const fetchData = async () => {
      const results = await axios("http://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "GZSWXTYbno6v2HVPLP8HccMvOiKxWIMB",
          q: "vanilla cake",
          limit: 1,
          offset: 3,
        },
      });
      setData(results.data.data);
    };
    fetchData();
  };

  const renderGif = () => {
    return data.map((el) => {
      return (
        <div key={el.id} className="gif">
          <img src={el.images.fixed_height.url} />
        </div>
      );
    });
  };

  pedirGifs();

  return (
    <View style={styles.ingredients}>
      <div>{renderGif()}</div>
      <Text>Ingredientes:</Text>
      <Text>
        <ul>
          <li>
            <Ingredient description="3 huevos" />
          </li>
          <li>
            <Ingredient
              ingredientMetric={standardSugarMass}
              ingredientIndex={standardSugarMassIndex}
              changeIngredientMetric={changeStandardSugarMass}
              measure={mass}
              description="de de azúcar blanca "
            />
          </li>

          <li>
            <Ingredient
              ingredientMetric={oilVolume}
              ingredientIndex={oilVolumeIndex}
              changeIngredientMetric={changeOilVolume}
              measure={volume}
              description="de aceite de sabor suave (aceite de girasol, canola, oliva de sabor suave, maiz)"
            />
          </li>
          <li>
            <Ingredient
              ingredientMetric={milkVolume}
              ingredientIndex={milkVolumeIndex}
              changeIngredientMetric={changeMilkVolume}
              measure={volume}
              description="de leche"
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
              ingredientMetric={flourMass}
              ingredientIndex={flourMassIndex}
              changeIngredientMetric={changeFlourMass}
              measure={mass}
              description="de harina de trigo"
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
        </ul>
      </Text>
      <View>
        <Button
          style={styles.button}
          title="Ir a procedimiento"
          color={myColors.primary}
          onPress={() => {
            changeScreen(4);
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

export default PastelVainilla;
