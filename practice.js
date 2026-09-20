// practice.js — your JavaScript scratchpad.
// Change anything here, save the file, then run it again to see what happens.
// Breaking it is the point. You can always ask me to help fix it.

// ---------------------------------------------------------------
// 1. Variables — named boxes that hold a value.
// ---------------------------------------------------------------
// `const` = the box can't be pointed at something else later.
// `let`   = the box CAN be reassigned later.
const name = "shizue";
let lessonsFinished = 3;

// Template literals: backticks ` ` let you drop variables in with ${ }
console.log(`Hi ${name}! You've finished ${lessonsFinished} lessons.`);

// ---------------------------------------------------------------
// 2. Functions — a reusable set of instructions.
// ---------------------------------------------------------------
// This one takes an input (a "parameter") and hands back a result.
function double(number) {
  return number * 2;
}

console.log("double(7) is", double(7));

// ---------------------------------------------------------------
// 3. Arrays — an ordered list of things.
// ---------------------------------------------------------------
const topics = ["variables", "functions", "arrays", "loops", "objects"];

console.log(`There are ${topics.length} topics in the list.`);
console.log("The first one is:", topics[0]); // counting starts at 0, not 1

// ---------------------------------------------------------------
// 4. Loops — do something once for each item.
// ---------------------------------------------------------------
for (const topic of topics) {
  console.log(`  - I am learning about ${topic}`);
}

// ---------------------------------------------------------------
// 5. Objects — a labelled bundle of related values.
// ---------------------------------------------------------------
const learner = {
  username: name,
  language: "JavaScript",
  streakDays: 1,
};

console.log(`${learner.username} is learning ${learner.language}.`);

// ---------------------------------------------------------------
// YOUR TURN
// ---------------------------------------------------------------
// Try these one at a time, saving and re-running after each:
//   a) Change lessonsFinished to a different number.
//   b) Add your own topic to the `topics` array.
//   c) Write a function called `triple` that multiplies by 3, then log it.
//   d) Add a new property to `learner`, like favoriteTopic.
