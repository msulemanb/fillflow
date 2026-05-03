export function isLevelComplete(
    level: { grid: number[][] },
    visited: Set<string>
) {
    const grid = level.grid;

    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[0].length; x++) {
            if (grid[y][x] === 0) {
                if (!visited.has(`${x}-${y}`)) {
                    return false;
                }
            }
        }
    }

    return true;
}

export function findStartPosition(level: { grid: number[][] }) {
    const grid = level.grid;

    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[0].length; x++) {
            if (grid[y][x] === 0) {
                return { x, y };
            }
        }
    }

    return { x: 0, y: 0 };
}