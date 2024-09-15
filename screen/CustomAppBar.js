import React from "react";
import { Appbar } from "react-native-paper";
import { View, StyleSheet } from "react-native";

function CustomAppBar({ navigation, back }) {
  return (
    <Appbar.Header>
    <View style={styles.container}>
      {back ? (
        <>
          <Appbar.BackAction onPress={navigation.goBack} />
          <Appbar.Content title="My App" style={styles.content} />
          <View style={styles.placeholder} />
        </>
      ) : (
        <>
          <View style={styles.placeholder} />
          <Appbar.Content title="My App" style={styles.content} />
          <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate("Second")} />
        </>
      )}
    </View>
  </Appbar.Header>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  placeholder: {
    width: 48, 
  },
});

export default CustomAppBar;
