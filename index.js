// Import the required modules
import express from "express";

// Create a new Express app
const app = express();
const url = "https://raw.githubusercontent.com/fdnd-agency/ultitv/main/api/game/943.json";
const stats =
  "https://raw.githubusercontent.com/fdnd-agency/ultitv/main/api/game/943/statistics.json";

// const url = "https://github.com/fdnd-agency/ultitv/blob/main/api/game/943.json";

// Set EJS as the template engine and specify the views directory
app.set("view engine", "ejs");
app.set("views", "./views");

// Serve static files from the public directory
app.use(express.static("public"));

// Create a route for the index page
app.get("/", function (request, response) {
  fetchJson(url).then((data) => {
    response.render("index", data);
    console.log(data);
  });
});

app.get("/", function (request, response) {
  fetchJson(stats).then((data) => {
    response.render("index", data);
    console.log(data);
  });
});

// Set the port number and start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Application available on: http://localhost:${port}`);
});

async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error);
  console.log(url);
}
