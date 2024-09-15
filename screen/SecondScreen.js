import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

function SecondScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is the second screen</Text>
            <Button
                style={styles.button}
                title="Go to Home Screen"
                onPress={() => navigation.navigate("Home")}
            />
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
    text: {
        marginBottom: 20,
    },
    button: {
        borderWidth: 1,
        borderColor: "#000",
        padding: 10,
    },
});

export default SecondScreen;