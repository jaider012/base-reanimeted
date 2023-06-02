import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slider } from "./Slider";
import { useNavigation } from "@react-navigation/native";

export const Homelist = () => {
  // list of  types animations
  const [data, setData] = React.useState([
    {
      id: 1,
      name: "Loading",
      nav: "loding",
    },
    {
      id: 2,
      name: "PanGestureHandler",
      nav: "PanGesture",
    },
    {
      id: 3,
      name: "Slide from left",
    },
    {
      id: 4,
      name: "Slide from bottom",
    },
    {
      id: 5,
      name: "Slide from top",
    },
    {
      id: 6,
      name: "Zoom in",
    },
    {
      id: 7,
      name: "Zoom out",
    },
    {
      id: 8,
      name: "Fade in",
    },
  ]);
  const Navigator = useNavigation();

  return (
    <View style={styles.container}>
      {data.map((item) => {
        return (
          <Slider name={item.name} id={item.id} key={item.id} nav={item.nav} />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
