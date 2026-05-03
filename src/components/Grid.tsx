import { Dimensions, StyleSheet, View } from "react-native";
import Cell from "./Cell";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function Grid({ playerPos, visited, level }) {
  const grid = level.grid;

  const rows = grid.length;
  const cols = grid[0].length;

  const cellSize = Math.floor(SCREEN_WIDTH / cols);
  const gridWidth = cellSize * cols;

  const rowsElements = [];

  for (let y = 0; y < rows; y++) {
    const rowCells = [];

    for (let x = 0; x < cols; x++) {
      const isWall = grid[y][x] === 1;
      const isPlayer = playerPos.x === x && playerPos.y === y;
      const isVisited = visited.has(`${x}-${y}`);

      rowCells.push(
        <Cell
          key={`${x}-${y}`}
          isWall={isWall}
          isPlayer={isPlayer}
          isVisited={isVisited}
          size={cellSize}
        />,
      );
    }

    rowsElements.push(
      <View key={y} style={styles.row}>
        {rowCells}
      </View>,
    );
  }

  return (
    <View style={[styles.grid, { width: gridWidth }]}>{rowsElements}</View>
  );
}

const styles = StyleSheet.create({
  grid: {
    alignSelf: "center",
    backgroundColor: "#111827",
  },

  row: {
    flexDirection: "row",
  },
});
