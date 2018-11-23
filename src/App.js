import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";

const App = (props) => {
  const onPress = () => console.log("Button was pressed!");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Different button styles</Text>

      <Button
        title="Add due date"
        onPress={onPress}
      />

      <Button
        title="Add due date"
        onPress={onPress}
        leftContainerStyle={{width: 60}}
      />

      <Button
        title="Add due date"
        onPress={onPress}
        rightContainerStyle={{justifyContent: "flex-start"}}
      />

      <Button
        title="Add due date"
        onPress={onPress}
        leftContainerStyle={{width: 60}}
        rightContainerStyle={{justifyContent: "flex-end"}}
      />

      <Button
        title="Add due date"
        onPress={onPress}
        containerStyle={{width: 100}}
      />

      <Button
        title="Add due date"
        onPress={onPress}
        containerStyle={{width: 300}}
        rightContainerStyle={{ justifyContent: "flex-start" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  }
});

export default App;
