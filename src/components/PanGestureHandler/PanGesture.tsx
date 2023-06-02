import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Headerback } from "../Headerback";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  event,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
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
    onEnd: (event, context) => {
      const distance = Math.sqrt(
        Math.pow(event.translationX, 2) + Math.pow(event.translationY, 2)
      );
      if (distance < (SIZE * 3) / 2) {
        traslateX.value = withSpring(0);
        traslateY.value = withSpring(0);
      }
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
        <View style={styles.circle}>
          <PanGestureHandler onGestureEvent={onGestureEvent}>
            <Animated.View style={[styles.squere, rStyle]} />
          </PanGestureHandler>
        </View>
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
    borderRadius: 20,
  },
  circle: {
    width: SIZE * 3.8,
    height: SIZE * 3.8,
    borderRadius: 200,
    borderColor: "rgba(0,0,256,0.5)",
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
