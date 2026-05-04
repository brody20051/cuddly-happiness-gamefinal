# 🏁 Drag Racing Sim

> A reaction-based drag racing game where players launch against an AI opponent using precise timing.

---

## 👤 Author

**Brody**
GitHub: https://github.com/brody20051

---

## 🧠 User Story

* *As a player*
* *I want to react to a drag racing light tree and launch a car*
* *So that I can test my reaction time and beat an AI opponent*

---

## 📖 Narrative

This application is a **drag racing reaction simulator** that allows users to compete against an AI opponent. The player must wait for the green light and launch as quickly as possible to win.

I chose this project because it combines **timing, animation, and interaction**, making it more engaging than a basic static app. I expanded a simple reaction game into a more complete experience by adding:

* AI opponent racing logic
* Car animations
* Login system with session storage
* JSON-based AI difficulty data using fetch
* Dynamic UI updates and race results

During development, I focused on keeping the code **clean, modular, and readable**, while adding features incrementally.

---

## ⚙️ Features

* Reaction-based gameplay (drag tree)
* AI opponent with randomized reaction times
* Car animations and race track
* Login system (session-based)
* JSON data loaded via Fetch API
* Race results (win/lose)
* Console-based JSON output of race data
* Responsive layout using Bootstrap

---

## 📦 Project Structure

```bash id="treeblock"
.
├── index.html
├── README.md
├── scripts
│   ├── game.js
│   ├── storage.js
│   └── data.json
├── styles
│   └── game.css
├── images
│   ├── car.png
│   ├── car2.png
│   ├── dragstrip.jpg
│   └── wireframe.png
```

---

## 💻 Code Highlight

```javascript
const raceData = {
  user: currentUser,
  reactionTime: reaction,
  time: new Date().toISOString()
};

console.log("Race Data:", JSON.stringify(raceData, null, 2));
```

### What it does

This code creates a JSON object containing the player’s name, reaction time, and timestamp, then logs it to the console.

### Why it matters

It demonstrates how user interaction data can be structured and prepared for storage, APIs, or analytics.

### How it works

* Captures current user session data
* Uses `performance.now()` for precise timing
* Converts the object into readable JSON format

---

## 🔌 Attribution

* Bootstrap 5: https://getbootstrap.com
* Bootstrap Icons: https://icons.getbootstrap.com
* Google Fonts: https://fonts.google.com
* AI Assistance: ChatGPT (used for debugging, structure, and feature implementation guidance)

---

## ✅ Validation

Replace with your deployed app URL:

* HTML Validator:
  https://validator.w3.org/nu/?doc=https://brody20051.github.io/cuddly-happiness-gamefinal/

* WAVE Accessibility Report:
  https://wave.webaim.org/report#/https://brody20051.github.io/cuddly-happiness-gamefinal/

Both results are clean with no major errors.

---

## 🚀 Deployment

This app is deployed using:

* GitHub Pages (frontend hosting)
* Google Cloud Platform VM with NGINX (production deployment)

Both deployment links are included in the repository **About section**.

---

## 🔮 Future Improvements

👉 GitHub Milestone: Sprint 99

Planned features:

* Sound effects (engine + launch)
* Gear shifting / driving controls
* Reaction history leaderboard
* Improved AI difficulty system
* Visual effects (smoke, camera shake)
* Mobile UI enhancements

Known issues:

* AI timing randomness may feel inconsistent
* No persistent leaderboard yet

---

## 🧪 Notes

* Uses ES Modules for clean JavaScript structure
* No inline CSS or JS
* Session storage used for login state
* Fetch API used for dynamic AI data

* ## 🔮 Future Improvements

Milestone: Sprint 99  
https://github.com/brody20051/cuddly-happiness-gamefinal/milestone/1

Includes:
- Sound effects
- AI improvements
- Leaderboard system

---

🔥 This project demonstrates interactive front-end development with real-time user input, animation, and structured data handling.
