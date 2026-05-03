export function slide(start, direction, level) {
    let { x, y } = start;
    const path = [];

    const grid = level.grid;

    while (true) {
        let nextX = x;
        let nextY = y;

        if (direction === "UP") nextY--;
        if (direction === "DOWN") nextY++;
        if (direction === "LEFT") nextX--;
        if (direction === "RIGHT") nextX++;

        // 🛑 boundary + wall safety check
        if (
            nextY < 0 ||
            nextY >= grid.length ||
            nextX < 0 ||
            nextX >= grid[0].length ||
            grid[nextY][nextX] === 1
        ) {
            break;
        }

        x = nextX;
        y = nextY;

        path.push({ x, y });
    }

    return {
        end: { x, y },
        path,
    };
}