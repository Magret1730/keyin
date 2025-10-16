/**
 * Calculates the number of consecutive positive mood entries,
 * starting from the most recent and going backwards.
 * A positive mood is either "Happy" or "Excited".
 * 
 * @param {string[]} moodHistory - An array of mood entries, with the most recent first.
 * @returns {number} The count of consecutive positive moods.
 */
function getStreak(moodHistory) {
  let streak = 0;
  const positiveMoods = ["Happy", "Excited"];

  for (let i = moodHistory.length - 1; i >= 0; i--) {
    const entry = moodHistory[i];
    if (positiveMoods.includes(entry.mood)) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}
  
module.exports = { getStreak };
