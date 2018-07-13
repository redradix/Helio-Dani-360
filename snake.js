const RIGHT = "RIGHT";
const LEFT = "LEFT";
const UP = "UP";
const DOWN = "DOWN";

function mod(n, m) {
  return ((n % m) + m) % m;
}

const makeGame = (width, height) => {
  let snake = new Array(4)
    .fill()
    .map((_, i) => [Math.round(width / 2) - i, Math.round(height / 2)]);

  return {
    next: function next(direction) {
      snake = snake.map(([x, y]) => [mod(x - 1, width), mod(y, height)]);
      return {
        snake,
        food: [34, 27]
      };
    }
  };
};

export default makeGame;
