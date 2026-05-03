import { View } from "react-native";

export default function Cell({ isWall, isPlayer, isVisited, size }) {
  let backgroundColor = "#F5F3FF";

  if (isWall) backgroundColor = "#1F2937";
  else if (isVisited) backgroundColor = "#A78BFA";

  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.05)",
        // soft 3D feel
        shadowColor: "#000",
        shadowOpacity: isWall ? 0.25 : 0.05,
        shadowRadius: 2,
        elevation: isWall ? 3 : 1,
      }}
    >
      {isPlayer && (
        <View
          style={{
            width: size * 0.75,
            height: size * 0.75,
            borderRadius: size,
            backgroundColor: "#F97316",
            shadowColor: "#000",
            shadowOpacity: 0.3,
            shadowRadius: 6,
            elevation: 8,
          }}
        />
      )}
    </View>
  );
}
