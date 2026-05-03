import { View } from "react-native";

export default function Cell({ isWall, isPlayer, isVisited, size }) {
  let backgroundColor = "white";

  if (isWall) backgroundColor = "#222";
  else if (isVisited) backgroundColor = "#4FC3F7";

  return (
    <View
      style={{
        width: size,
        height: size,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor,
      }}
    >
      {isPlayer && (
        <View
          style={{
            width: size * 0.5,
            height: size * 0.5,
            borderRadius: size * 4,
            backgroundColor: "blue",
          }}
        />
      )}
    </View>
  );
}
