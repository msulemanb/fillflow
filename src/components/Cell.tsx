import { View } from "react-native";

export default function Cell({ isWall, isVisited, size }) {
  let backgroundColor = "#F5F3FF";

  if (isWall) backgroundColor = "#1F2937";
  else if (isVisited) backgroundColor = "#A78BFA";

  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.05)",
      }}
    />
  );
}
