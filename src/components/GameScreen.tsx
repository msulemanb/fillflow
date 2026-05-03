import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useGame } from "../game/useGame";
import Grid from "./Grid";

export default function GameScreen() {
  const { playerPos, visited, move, level, levelIndex, showWin } = useGame();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* LEVEL TEXT */}
      <Text style={{ fontSize: 18, marginBottom: 10, fontWeight: "bold" }}>
        Level {levelIndex + 1}
      </Text>

      {/* GAME BOARD */}
      <Grid playerPos={playerPos} visited={visited} level={level} />

      {/* WIN MESSAGE */}
      {showWin && (
        <View
          style={{
            position: "absolute",
            top: "40%",
            backgroundColor: "black",
            padding: 20,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>
            🎉 Level Complete!
          </Text>
        </View>
      )}

      {/* TEMP CONTROLS (I will remove them once i add gesture handling) */}

      <View style={styles.dpad}>
        {/* UP */}
        <Pressable style={styles.button} onPress={() => move("UP")}>
          <Ionicons name="chevron-up" size={32} color="white" />
        </Pressable>

        {/* MIDDLE ROW */}
        <View style={styles.middleRow}>
          <Pressable style={styles.button} onPress={() => move("LEFT")}>
            <Ionicons name="chevron-back" size={32} color="white" />
          </Pressable>

          <View style={styles.centerSpace} />

          <Pressable style={styles.button} onPress={() => move("RIGHT")}>
            <Ionicons name="chevron-forward" size={32} color="white" />
          </Pressable>
        </View>

        {/* DOWN */}
        <Pressable style={styles.button} onPress={() => move("DOWN")}>
          <Ionicons name="chevron-down" size={32} color="white" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dpad: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  middleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  button: {
    width: 65,
    height: 65,
    borderRadius: 18,
    backgroundColor: "#111827", // deep dark game UI
    alignItems: "center",
    justifyContent: "center",
    margin: 6,

    // shadow (iOS)
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },

    // Android
    elevation: 6,
  },

  text: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "700",
  },

  up: {
    marginBottom: 8,
  },

  down: {
    marginTop: 8,
  },

  centerSpace: {
    width: 10,
  },
});
