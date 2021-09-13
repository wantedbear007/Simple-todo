import React, { useState } from "react";
import { GoalInput } from "./components/GoalInput";
import { GoalItem } from "./components/GoalItem";
import { StyleSheet, View, FlatList, Text, Image } from "react-native";
import Toast from "react-native-simple-toast";
import { TodoButton } from "./components/TodoButton";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const removeTaskHandler = (goalid) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalid);
    });
  };

  const cancelTaskHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.primaryContainer}>
      <View style={styles.screen}>
        <Text style={styles.title}>TASKS🖊️</Text>

        <TodoButton
          onPress={() => setIsAddMode(true)}
          style={styles.addNewButton}
        >
          Add new...
        </TodoButton>
        {!courseGoals.length ? (
          <View>
            {Toast.show("Congratulations ✨")}
            <View style={styles.imageContainer}>
              <Image
                source={require("./components/Images/noTask.gif")}
                style={styles.noTask}
              />
              <Text style={styles.noGoalsTitle}>Cheers🍻 Nothing left.</Text>
            </View>
          </View>
        ) : (
          <Text />
        )}
        <GoalInput
          visible={isAddMode}
          onAddGoal={addGoalHandler}
          cancelTask={cancelTaskHandler}
        />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              id={itemData.item.id}
              onDelete={removeTaskHandler}
              title={itemData.item.value}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  primaryContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  screen: {
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 80,
  },
  title: {
    fontSize: 50,
    textAlign: "center",
    letterSpacing: 8,
    marginBottom: 20,
  },

  addNewButton: {
    marginHorizontal: 50,
    fontSize: 28,
    textAlign: "center",
    borderRadius: 10,
    color: "white",
    backgroundColor: "red",
    padding: 4,
    elevation: 10,
  },
  noGoalsTitle: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 40,
  },
  noTask: {
    height: 230,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
