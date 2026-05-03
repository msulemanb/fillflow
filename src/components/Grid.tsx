import { Animated, StyleSheet, View } from "react-native";
import Cell from "./Cell";

export default function Grid({
  playerPos,
  visited,
  level,
  playerAnim,
  cellSize,
}) {
  const grid = level.grid;

  const rows = grid.length;
  const cols = grid[0].length;

  const gridWidth = cellSize * cols;
  const gridHeight = cellSize * rows;

  const rowsElements = [];

  for (let y = 0; y < rows; y++) {
    const rowCells = [];

    for (let x = 0; x < cols; x++) {
      const isWall = grid[y][x] === 1;
      const isVisited = visited.has(`${x}-${y}`);

      rowCells.push(
        <Cell
          key={`${x}-${y}`}
          isWall={isWall}
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
    <View
      style={{
        width: gridWidth,
        height: gridHeight,
        alignSelf: "center",
      }}
    >
      {/* GRID */}
      <View style={styles.grid}>{rowsElements}</View>

      {/* PLAYER */}
      <Animated.View
        style={{
          position: "absolute",

          // 🔥 IMPORTANT: center inside cell
          left: cellSize * 0.15,
          top: cellSize * 0.15,

          width: cellSize * 0.7,
          height: cellSize * 0.7,
          borderRadius: 999,
          backgroundColor: "#F97316",

          transform: [
            { translateX: playerAnim.x },
            { translateY: playerAnim.y },
          ],
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    backgroundColor: "#111827",
  },
  row: {
    flexDirection: "row",
  },
});
