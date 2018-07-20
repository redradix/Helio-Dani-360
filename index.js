import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-360";
import { screenDimensions } from "./config";
import makeGame from "./snake";

const KEY_CODES = { 37: "LEFT", 38: "UP", 39: "RIGHT", 40: "DOWN" };

const screenWidth = screenDimensions.width;
const screenHeight = screenDimensions.height;
const gameWidth = 60;
const gameHeight = 10;
const cellWidth = screenWidth / gameWidth;
const cellHeight = screenHeight / gameHeight;
const widthArray = new Array(gameWidth).fill();
const heightArray = new Array(gameHeight).fill();
const isSnake = (x, y, snake) => {
  return snake.reduce(
    (accum, [snakeX, snakeY]) => accum || (x === snakeX && y === snakeY),
    false
  );
};
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.game = makeGame(gameWidth, gameHeight);
    this.direction = "RIGHT";
    this.state = this.game.next(this.direction);
  }
  componentDidMount() {
    setInterval(() => {
      this.setState(this.game.next(this.direction));
    }, 500);
  }
  handleKeyPress = e => {
    if (!KEY_CODES[e.nativeEvent.inputEvent.button]) return;
    this.direction = KEY_CODES[e.nativeEvent.inputEvent.button];
  };
  render() {
    const { snake, food } = this.state;
    return (
      <View style={styles.panel} onInput={this.handleKeyPress}>
        {heightArray.map((_, y) => (
          <View style={{ flexDirection: "row" }}>
            {widthArray.map((_, x) => {
              const color = isSnake(x, y, snake) ? "black" : "transparent";

              return (
                <View
                  key={`${x}-${y}`}
                  style={{
                    backgroundColor: color,
                    width: cellWidth,
                    height: cellHeight
                  }}
                />
              );
            })}
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: screenWidth,
    height: screenHeight,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    justifyContent: "center",
    alignItems: "center"
  },
  snakeContainer: {
    padding: 20,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2
  },
  snake: {
    fontSize: 30
  }
});

AppRegistry.registerComponent("App", () => App);
