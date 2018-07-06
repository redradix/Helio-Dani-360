import React from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-360'
import { screenDimensions } from './config'

const screenWidth = screenDimensions.width
const screenHeight = screenDimensions.height

export default class App extends React.Component {
  state = {
    translation: 0
  }
  componentDidMount() {
    setInterval(() => {
      this.setState(({ translation }) => {
        let multiplier = translation <= 0 ? -1 : 1
        console.log(translation, -screenWidth / 2, screenWidth / 2)
        if (translation < -screenWidth / 2) {
          return {
            translation: screenWidth / 2
          }
        } else if (translation > screenWidth / 2) {
          return {
            translation: -screenWidth / 2
          }
        }
        return {
          translation: translation - 10
        }
      })
    }, 50)
  }
  render() {
    const { translation } = this.state
    console.log(translation)
    return (
      <View style={styles.panel}>
        <View
          style={[
            styles.snakeContainer,
            { transform: [{ translate: [translation, 0, 0] }] }
          ]}
        >
          <Text style={styles.snake}>I'm a snakeeeeeeeeeeeeeeee</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: screenWidth,
    height: screenHeight,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  snakeContainer: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2
  },
  snake: {
    fontSize: 30
  }
})

AppRegistry.registerComponent('App', () => App)
