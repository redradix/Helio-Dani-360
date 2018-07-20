const RIGHT = "RIGHT";
const LEFT = "LEFT";
const UP = "UP";
const DOWN = "DOWN";
const xMultiplayer = { LEFT: -1, RIGHT: 1 };
const yMultiplayer = { UP: -1, DOWN: 1 };
const movingHorizontally = direction =>
  direction === LEFT || direction === RIGHT;
const movingVertically = direction => direction === UP || direction === DOWN;

function mod(n, m) {
  return ((n % m) + m) % m;
}

const makeGame = (width, height) => {
  let snake = new Array(8)
    .fill()
    .map((_, i) => [Math.round(width / 2) - i, Math.round(height / 2)]);

  return {
    next: function next(direction) {
      const xMult = movingHorizontally(direction) ? xMultiplayer[direction] : 0;
      const yMult = movingVertically(direction) ? yMultiplayer[direction] : 0;
      snake = snake.map(([x, y], i) => {
        if (i === 0) return [mod(x + xMult, width), mod(y + yMult, height)];
        return snake[i - 1];
      });
      return {
        snake
      };
    }
  };
};

export default makeGame;
