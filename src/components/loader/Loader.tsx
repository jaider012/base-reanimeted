import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export function Loader() {
  const [stopAnimation, setStopAnimation] = useState(-1);
  console.log("stopAnimation", stopAnimation);

  const navigation = useNavigation();
  const progress = useSharedValue(0.8);
  const scale = useSharedValue(1);

  const stylesAnimated = useAnimatedStyle(() => {
    return {
      borderRadius: (scale.value * 25) / 2,
      opacity: scale.value / 2,
      transform: [
        {
          scale: scale.value,
        },
        {
          rotate: `${scale.value * 2 * Math.PI}rad`,
        },
      ],
    };
  });
  const stylesAnimatedInverse = useAnimatedStyle(() => {
    return {
      borderRadius: (scale.value * 25) / 2,
      opacity: scale.value / 2,
      transform: [
        {
          scale: scale.value,
        },
        {
          rotate: `${scale.value * -2 * Math.PI}rad`,
        },
      ],
    };
  });
  progress.value = withRepeat(withSpring(0.1), stopAnimation, true);
  scale.value = withRepeat(withSpring(1.5), stopAnimation, true);

  return (
    <View>
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
            navigation.goBack();
          }}
        />
        <Text>Loader</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "80%",
        }}
      >
        <Animated.View
          style={[
            {
              width: 100,
              height: 100,
              backgroundColor: "red",
              borderRadius: 50,
              position: "absolute",
              top: "30%",
            },
            stylesAnimated,
          ]}
        ></Animated.View>
        <Animated.View
          style={[
            {
              width: 75,
              height: 75,
              backgroundColor: "royalblue",
              borderRadius: 50,
              position: "absolute",
              top: "32%",
            },
            stylesAnimatedInverse,
          ]}
        ></Animated.View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            setStopAnimation(-1);
          }}
          style={{ width: "100%", height: 50, backgroundColor: "red" }}
        >
          <Text
            style={{
              textAlign: "center",
              backgroundColor: "green",
              color: "white",
              padding: 10,
            }}
          >
            start
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setStopAnimation(1);
          }}
          style={{ width: "100%", height: 50, backgroundColor: "red" }}
        >
          <Text
            style={{
              textAlign: "center",
              backgroundColor: "red",
              color: "white",
              padding: 10,
            }}
          >
            Stop
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
