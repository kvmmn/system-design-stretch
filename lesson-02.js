"use strict";

// Lesson 2: Asynchronous JavaScript and the Event Loop.
// Standalone programs and observations go in this file as code and comments.

// ===== Provided program (task step 2): predict before you run =====
// Write your predicted output order as a comment BELOW, before running this
// file with node. Then run it, mark each line of your prediction right or
// wrong, and correct the wrong ones with one sentence each explaining why.

console.log("doors open");
setTimeout(() => console.log("encore"), 1000);
setTimeout(() => console.log("soundcheck"), 0);
console.log("main act");
setTimeout(() => console.log("intermission"), 500);
console.log("lights down");

// Your prediction:
// 1. doors open    -> right
// 2. main act      -> right
// 3. lights down   -> right
// 4. soundcheck    -> right
// 5. intermission  -> right
// 6. encore        -> right

// Task 3
// The blocking loop occupied the call stack and the single JavaScript thread.
// While it was running, event handlers and rendering could not happen.

// ===== Provided program (task step 4): trace the call stack =====
// Trace this as a written call stack diagram in comments, listing every push
// and pop in order. Then cause an error inside the innermost function and
// confirm the stack trace in the console matches your diagram, innermost
// first. Keep it commented out while you work on step 2.

// function prepare(artist) {
//   return "Now playing " + format(artist);
// }
// function format(artist) {
//   return artist.name.toUpperCase();
// }
// console.log(prepare({ name: "Asake" }));

// Task 4 call stack:
// 1. Push the global execution context.
// 2. console.log() is called; evaluate its argument.
// 3. Push prepare().
// 4. prepare() calls format(); push format().
// 5. format() reads artist.name and calls toUpperCase().
// 6. toUpperCase() returns; pop toUpperCase().
// 7. format() returns; pop format().
// 8. prepare() returns; pop prepare().
// 9. console.log() prints; pop console.log().
// 10. The global execution context remains until the script finishes.

// Task 4 result: The error appeared first in format(), then prepare(), then
// the global call site. The error was:
// TypeError: Cannot read properties of undefined (reading 'toUpperCase')

// Task 5: The page showed "Loading artists..." while the data was waiting.
// After two seconds, the cards rendered and the loading message cleared.

// Task 6: Count from 10 down to 0, then stop the interval.
let count = 10;

const countdown = setInterval(() => {
  console.log(count);
  count -= 1;

  if (count < 0) {
    clearInterval(countdown);
  }
}, 1000);

// The countdown logged 10 through 0 and then stopped.
// No further countdown messages appeared because clearInterval() removed the interval.

// Task 7:
// JavaScript is single-threaded, so it runs only one piece of code at a time on the call stack.
// When many tasks are waiting, such as timers or network requests,
// browser facilities handle the waiting outside the call stack.
// This keeps the stack free, so the page does not freeze.
// When a waiting task finishes, its callback is placed in the task queue or microtask queue.
// The event loop watches the call stack. When the stack is empty,
// it moves the next callback from a queue onto the stack so it can run.
// This is how JavaScript can manage a thousand waiting tasks:
// the tasks wait outside the main thread, and their callbacks run one at a time when the stack is available.
