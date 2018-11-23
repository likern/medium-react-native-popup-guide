import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";

const Button = ({title, containerStyle, leftContainerStyle, rightContainerStyle, onPress}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.leftContainer, leftContainerStyle]}></View>
      {/* We want to respond to press on full right orange area */}
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.rightContainer, rightContainerStyle]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 24,
    width: 200,
    backgroundColor: "#A2B7FE",
  },
  leftContainer: {
    backgroundColor: "#BEBEBE",
    width: 40,
    height: 50
  },
  rightContainer: {
    flexGrow: 1,
    height: 50,
    justifyContent: "center",
    backgroundColor: "#FED1A3"
  },
  text: {
    backgroundColor: "#FEA2AC"
  }
});

export default Button;