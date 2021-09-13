import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const GoalItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.listItems}>
        <Text style={styles.titleText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItems: {
    marginTop: 10,
    padding: 5,
    backgroundColor: "#222831",
    borderColor: "black",
    borderRadius: 25,
  },
  titleText: {
    fontSize: 22,
    color: "white",
    textAlign: "center",
  },
});
