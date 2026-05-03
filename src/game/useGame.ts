import { useRef, useState } from "react";
import { Animated } from "react-native";
import { levels } from "./constants";
import { isLevelComplete } from "./engine";
import { slide } from "./movement";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const useGame = () => {
    const [levelIndex, setLevelIndex] = useState(0);
    const currentLevel = levels[levelIndex];

    const [playerPos, setPlayerPos] = useState(currentLevel.initialPos);
    const [visited, setVisited] = useState(
        new Set([`${currentLevel.initialPos.x}-${currentLevel.initialPos.y}`])
    );
    const [showWin, setShowWin] = useState(false);

    const playerAnim = useRef(new Animated.ValueXY()).current;

    const animateTo = (x, y, cellSize) => {
        return new Promise((resolve) => {
            Animated.timing(playerAnim, {
                toValue: {
                    x: Math.round(x * cellSize),
                    y: Math.round(y * cellSize),
                },
                duration: 60,
                useNativeDriver: true,
            }).start(resolve);
        });
    };

    const move = async (direction, cellSize) => {
        const result = slide(playerPos, direction, currentLevel);

        if (result.path.length === 0) return;

        const newVisited = new Set(visited);

        for (let step of result.path) {
            await animateTo(step.x, step.y, cellSize);

            newVisited.add(`${step.x}-${step.y}`);
            setVisited(new Set(newVisited));

            setPlayerPos(step);

            await delay(10);
        }

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

            playerAnim.setValue({
                x: newLevel.initialPos.x,
                y: newLevel.initialPos.y,
            });
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
        playerAnim,
    };
};