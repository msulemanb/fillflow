import { useState } from "react";
import { levels } from "./constants";
import { isLevelComplete } from "./engine";
import { slide } from "./movement";

export const useGame = () => {
    const [levelIndex, setLevelIndex] = useState(0);
    const currentLevel = levels[levelIndex];


    const [playerPos, setPlayerPos] = useState(currentLevel.initialPos);
    const [visited, setVisited] = useState<Set<string>>(
        new Set(["1-1"])
    );
    const [showWin, setShowWin] = useState(false);


    const move = (direction: "UP" | "DOWN" | "LEFT" | "RIGHT") => {
        const result = slide(playerPos, direction, currentLevel);

        if (result.path.length === 0) return;

        const newVisited = new Set(visited);

        result.path.forEach((p) => {
            newVisited.add(`${p.x}-${p.y}`);
        });

        setPlayerPos(result.end);
        setVisited(newVisited);

        // 🔥 CHECK WIN
        if (isLevelComplete(currentLevel, newVisited)) {
            setShowWin(true);

            setTimeout(() => {
                nextLevel();
                setShowWin(false);
            }, 2000);
        }
    };

    const nextLevel = () => {
        if (levelIndex + 1 < levels.length) {
            const next = levelIndex + 1;
            const newLevel = levels[next];

            setLevelIndex(next);

            setPlayerPos(newLevel.initialPos);

            setVisited(
                new Set([`${newLevel.initialPos.x}-${newLevel.initialPos.y}`])
            );
        } else {
            console.log("🎉 Game Completed!");
        }
    };

    return {
        playerPos,
        visited,
        move,
        level: currentLevel,
        levelIndex,
        showWin,
    };
};