import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Headerback } from "../Headerback";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import {
  GestureHandlerGestureEvent,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
const SIZE = 100;

type ContextType = {
  translateX: number;
  translateY: number;
};
export const PanGesture = () => {
  const navigation = useNavigation();
  const traslateX = useSharedValue(0);
  const traslateY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (event, context) => {
      context.translateX = traslateX.value;
      context.translateY = traslateY.value;
    },
    onActive: (event, context) => {
      traslateX.value = event.translationX + context.translateX;
      traslateY.value = event.translationY + context.translateY;
    },
  });
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: traslateX.value,
        },
        {
          translateY: traslateY.value,
        },
      ],
    };
  });
  return (
    <View>
      <Headerback
        title="PanGestureHandler"
        navigation={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.container}>
        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <Animated.View style={[styles.squere, rStyle]} />
        </PanGestureHandler>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "95%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  squere: {
    width: SIZE,
    height: SIZE,
    backgroundColor: "rgba(0,0,256,0.5)",
  },
});
