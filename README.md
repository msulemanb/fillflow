# 🎮 FillFlow

A smooth, swipe-based maze puzzle game built with Expo and React Native.

FillFlow challenges players to slide through a maze, filling every path with color using continuous motion. One swipe moves the player until hitting a wall—creating a satisfying and strategic gameplay experience.

---

## ✨ Features

* 🎯 Slide-until-wall movement mechanic
* 🎨 Smooth paint trail filling
* 🧩 Grid-based maze puzzles
* ⚡ High-performance animations using Reanimated
* 👆 Gesture-based controls (swipe in 4 directions)
* 📱 Built with Expo for fast development

---

## 🧠 Gameplay

* Swipe in any direction (up, down, left, right)
* The player slides until hitting a wall
* Tiles are painted as the player moves
* You can move over already painted tiles
* Goal: Fill the entire maze

---

## 🛠️ Tech Stack

* React Native
* Expo
* React Native Reanimated
* React Native Gesture Handler
* Expo Router

---

## 📁 Project Structure

```
/app
  _layout.tsx        # Root layout (navigation + providers)
  index.tsx          # Main game screen

/src
  /components
    Grid.tsx         # Renders the board
    Cell.tsx         # Individual tile
    Player.tsx       # Animated player

  /game
    useGame.ts       # Game state & logic
    movement.ts      # Slide-until-wall logic
    constants.ts     # Cell types
    types.ts         # Type definitions

  /utils
    maze.ts          # Maze generation (planned)
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/fillflow.git
cd fillflow
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the app

```bash
npx expo start
```

* Press `a` for Android
* Press `i` for iOS
* Or scan QR with Expo Go

---

## ⚙️ Important Setup

### Reanimated Configuration

Make sure `babel.config.js` includes:

```js
plugins: ['react-native-reanimated/plugin']
```

Then restart:

```bash
npx expo start -c
```

---

## 🎯 Roadmap

### MVP

* [x] Grid rendering
* [x] Swipe detection
* [x] Sliding movement
* [x] Paint trail

### Next

* [ ] Maze generation (DFS / backtracking)
* [ ] Level progression
* [ ] Animations polish
* [ ] Sound & haptics
* [ ] UI improvements

### Future Ideas

* [ ] Undo moves
* [ ] Level editor
* [ ] Daily challenges
* [ ] Themes / skins

---

## 🧪 Development Approach

This project focuses on:

* Clean separation of logic and UI
* Smooth animations over complex visuals
* Iterative development (MVP → polish)

---

## 📸 Screenshots

> Coming soon...

---

## 🤝 Contributing

Contributions, ideas, and feedback are welcome.

---

## 📄 License

MIT License

---

## 👤 Author

Built by Suleman 🚀
