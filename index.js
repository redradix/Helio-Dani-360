import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-360";

export default class example_360 extends React.Component {
  state = {
    translation: 0
  };
  componentDidMount() {
    setInterval(() => {
      this.setState(({ translation }) => {
        let multiplier = translation <= 0 ? -1 : 1;
        console.log(translation, -4680 / 2, 4680 / 2);
        if (translation < -4680 / 2) {
          return {
            translation: 4680 / 2
          };
        } else if (translation > 4680 / 2) {
          return {
            translation: -4680 / 2
          };
        }
        return {
          translation: translation - 10
        };
      });
    }, 50);
  }
  render() {
    const { translation } = this.state;
    console.log(translation);
    return (
      <View style={styles.panel}>
        <View
          style={[
            styles.greetingBox,
            { transform: [{ translate: [translation, 0, 0] }] }
          ]}
        >
          <Text style={styles.greeting}>I'm a snakeeeeeeeeeeeeeeee</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 4680,
    height: 600,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    justifyContent: "center",
    alignItems: "center"
  },
  greetingBox: {
    padding: 20,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2
  },
  greeting: {
    fontSize: 30
  }
});

AppRegistry.registerComponent("example_360", () => example_360);
