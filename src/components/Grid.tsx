import { Dimensions, StyleSheet, View } from "react-native";
import Cell from "./Cell";

const SCREEN_WIDTH = Dimensions.get("window").width;
const GRID_PADDING = 20;

export default function Grid({ playerPos, visited, level }) {
  const cells = [];

  const grid = level.grid;

  const rows = grid.length;
  const cols = grid[0].length;

  // 🔥 dynamic cell size
  const cellSize = (SCREEN_WIDTH - GRID_PADDING) / cols;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const isWall = grid[y][x] === 1;
      const isPlayer = playerPos.x === x && playerPos.y === y;
      const isVisited = visited.has(`${x}-${y}`);

      cells.push(
        <Cell
          key={`${x}-${y}`}
          isWall={isWall}
          isPlayer={isPlayer}
          isVisited={isVisited}
          size={cellSize}
        />,
      );
    }
  }

  return <View style={styles.grid}>{cells}</View>;
}

const styles = StyleSheet.create({
  grid: {
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
