import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { StackAnimation } from "./src/Navitage";

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <StackAnimation />
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
