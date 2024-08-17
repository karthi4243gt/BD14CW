let express = require("express");
let app = express();

let port = 3000;
app.listen(port, () => {
  console.log("Server running on port " + port);
});

function generateCertificate(firstName, lastName, courseName) {
  let result =
    "This certification is awarded to " +
    firstName +
    " " +
    lastName +
    " for completing course " +
    courseName;
  return result;
}

app.get("/certificate", (request, response) => {
  let firstName = request.query.firstName;
  let lastName = request.query.lastName;
  let courseName = request.query.courseName;
  response.send(generateCertificate(firstName, lastName, courseName));
});
