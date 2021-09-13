import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ProgressViewIOSComponent,
} from "react-native";
import { quotes } from "./TaskQuotes";

export const RandomQuotes = (props) => {
  const randomQuoteNumber = Math.floor(Math.random() * 3);

  return (
    <View style={styles.quotesContainer}>
      <Text style={styles.quote}>"{quotes[randomQuoteNumber].quote}"</Text>
      <Text style={styles.author}>-{quotes[randomQuoteNumber].author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  quotesContainer: {
    marginVertical: 40,
    marginHorizontal: 20,
  },
  quote: { fontSize: 23, textAlign: "center", color: "#171717" },
  author: {
      fontSize: 18,
      color: '#393E46',
      textAlign: 'right',
      marginRight: 10,
    fontStyle: 'italic'
    }
});
