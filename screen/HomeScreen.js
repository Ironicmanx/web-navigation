import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the Home Screen</Text>

      <Button
        style={styles.Button}
        onPress={() => navigation.navigate("Second")}
      >
        Go to Second Screen
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  Button: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#000",
  },
});

export default HomeScreen;
