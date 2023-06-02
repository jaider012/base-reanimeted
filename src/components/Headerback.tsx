import { View, Text, Button } from "react-native";
import React from "react";

interface HeaderbackProps {
  navigation: () => void;
  title: string;
}
export const Headerback: React.FC<HeaderbackProps> = ({
  navigation,
  title,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
      }}
    >
      <Button
        title="Back"
        onPress={() => {
          navigation();
        }}
      />
      <Text>{title}</Text>
    </View>
  );
};
