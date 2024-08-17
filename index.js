let express = require("express");
let cors = require("cors");

let app = express();
app.use(cors());

let port = 3000;
app.listen(port, () => {
  console.log("Server running on port " + port);
});

// Define a route for the home page
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Simple Web Page</title>
      <style>
        body { font-family: Arial, sans-serif; text-align: center; padding-top: 50px; }
        h1 { color: #333; }
      </style>
    </head>
    <body>
      <h1>Welcome to My Simple Web Page</h1>
      <p>This is a simple web page built with Express.js</p>
    </body>
    </html>
  `);
}); 

app.get("/", (req, res) => {
  res.send("Hello I'm soldier Boy");
});

/*// Serve static files (like CSS, images, etc.) from the "public" directory
app.use(express.static("public"));

// Define a route for the home page
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Simple Web Page</title>
      <style>
        body { font-family: Arial, sans-serif; text-align: center; padding-top: 50px; }
        h1 { color: #333; }
      </style>
    </head>
    <body>
      <h1>Welcome to My Simple Web Page</h1>
      <p>This is a simple web page built with Express.js</p>
    </body>
    </html>
  `);
}); */
