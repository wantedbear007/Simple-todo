import React from "react";
import { TouchableHighlight, Text, StyleSheet,  } from "react-native";

export const TodoButton = (props) => {
  return (
    <TouchableHighlight style={[styles.container,{ ...props.style}]} onPress={props.onPress}>
      <Text style={styles.textContainer}>{props.children}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    
  },
  textContainer: {
    fontSize: 20,
    padding: 8,
    color: "white",
    textAlign: "center",
    paddingHorizontal: 40,
  },
});
