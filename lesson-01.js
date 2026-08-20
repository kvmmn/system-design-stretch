"use strict";

// Lesson 1: The Client and Server Model.
// Your standalone code and written observations for this lesson live here,
// as code and comments. The site work happens in the stretch-records folder.
//
// Step 4: The single page load made 82 requests. Three of them were
// index.html, styles.css, and script.js.
//
// Step 6: artists.json changed; script.js did not. The data and rendering rule
// are separate, so adding an artist does not require changing the code.
//
// Step 7: Uncaught (in promise) SyntaxError: Unexpected token ']', ..."42" }
// ] is not valid JSON.
//
// Step 8: build one artist object, JSON.stringify() it, log the text,
// JSON.parse() it back, and log one property of the result.

const artist = {
  name: "Gustav Mahler",
  genre: "Classical",
  total: "28:10",
};

const artistText = JSON.stringify(artist);
console.log(artistText);

const parsedArtist = JSON.parse(artistText);
console.log(parsedArtist.name);
//
// STRETCH, step 9: describe your page as a system. Name the client, name the
// server, and state what the request asked for and what the response carried.

// Step 9: The client is the browser running index.html and script.js.
// The server is Live Server. The request asked for artists.json, and the
// response carried the JSON text containing the artist data.
