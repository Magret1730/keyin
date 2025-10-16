const express = require('express');
const path = require('path');
const { getStreak } = require('./utils/utilities');

const app = express();
const PORT = process.env.PORT || 3000;

// In-memory storage for mood entries
const moodHistory = [];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//  NOTE
// 1. Sometimes it takes a while for the buttons to respond after clicking them.
    // Please be patient, the buttons are working.
// 2. I couldn't style the 'options' and 'li' elements as I wanted, because I couldn't figure
    // out how to select them properly in CSS. I tried various ways but none worked as expected.

// Get Home Route
app.get('/', (req, res) => {
  const streak = getStreak(moodHistory);

  let message = '';
  if (moodHistory.length === 0) {
    message = "No entries yet — start by adding your first mood!";
  } else {
    const lastMood = moodHistory[moodHistory.length - 1].mood;
    if (["Happy", "Excited"].includes(lastMood)) {
      message = `😊 You’re on a ${streak}-day positive streak!`;
    } else if (lastMood === "Sad") {
      message = "😔 You seem down lately. Take it easy and do something you love today.";
    } else if (lastMood === "Stressed") {
      message = "😣 Remember to breathe — everything will be okay.";
    } else if (lastMood === "Okay") {
      message = "🙂 Hope your day gets even better!";
    } else {
      message = "Keep tracking your moods — it helps you understand yourself better!";
    }
  }

  res.render('index', {
    currentDate: new Date().toDateString(),
    message,
  });
});

// Mood Entry Form (GET)
app.get('/mood', (req, res) => {
  res.render('mood');
});

// Mood Entry Submission (POST)
app.post('/mood', (req, res) => {
  const mood = req.body.mood;
  if (mood) {
    moodHistory.push({ mood, date: new Date().toDateString() });
  }

  res.redirect('/');
});

// Get Summary Page
app.get('/summary', (req, res) => {
  const streak = getStreak(moodHistory);
  const lastFive = moodHistory.slice(-5).reverse();

  res.render('summary', {
    streak,
    lastFive,
  });
});


app.listen(PORT, () => {
  console.log(`Mood Tracker running at http://localhost:${PORT}`);
});
