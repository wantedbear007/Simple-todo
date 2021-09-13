import React, { useState } from "react";
import { TextInput, StyleSheet, View, Modal, Image } from "react-native";
import { TodoButton } from "./TodoButton";
import { RandomQuotes } from "./RandomQuotes";
import Toast from "react-native-simple-toast";

export const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredTask) => {
    setEnteredGoal(enteredTask);
  };

  const addGoalHandler = () => {
    if (enteredGoal.trim().length === 0) {
      Toast.show("Nothing to add📝");
    } else {
      props.onAddGoal(enteredGoal);
      setEnteredGoal("");
    }
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("./Images/todo.gif")} style={styles.todoImage} />
        <RandomQuotes />
        {console.log(enteredGoal.length)}
        <TextInput
          placeholder="Enter your task..."
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <TodoButton style={styles.todoAddButton} onPress={addGoalHandler}>
            +Add
          </TodoButton>
          <TodoButton
            style={styles.todoCancelButton}
            onPress={props.cancelTask}
          >
            Cancel
          </TodoButton>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    marginBottom: 10,
    backgroundColor: "#EDFFA9",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 15,
    fontSize: 25,
    marginBottom: 30,
  },
  addButton: {
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  todoAddButton: {
    backgroundColor: "#0F52BA",
  },
  todoCancelButton: {
    backgroundColor: "red",
    marginLeft: 20,
  },
  todoImage: {
    height: 100,
    width: 200,
  },
});
