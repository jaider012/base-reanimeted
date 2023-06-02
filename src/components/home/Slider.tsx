import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
interface SliderProps {
  name: string;
  id: number;
  nav?: string;
}
export const Slider: React.FC<SliderProps> = ({ name, id, nav }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        if (nav) navigation.navigate(nav);
      }}
    >
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    borderColor: "black",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: "center",
  },
});
