// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// =============================================================
var reservations = [
    {
        name: "yoda",
        phone: "444-444-4444",
        email: "Jedi_Master@gmail.com",
        id: 900,
    },
];
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// Displays all characters
app.get("/api/reservations", function (req, res) {
    return res.json(reservations);
});

// Create New Reservations- takes in JSON input
app.post("/api/reservations", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    console.log(newReservation);
    reservations.push(newReservation);
    res.json(newReservation);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
