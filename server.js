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
        customerName: "asdf",
        phoneNumber: "2123051742",
        customerEmail: "mdb2160@cumc.columbia.edu",
        customerID: "1",
    },
    {
        customerName: "James A Rowe",
        phoneNumber: "17174337699",
        customerEmail: "jamesrowe@outlook.com",
        customerID: "2",
    },
    {
        customerName: "James A Rowe",
        phoneNumber: "17174337699",
        customerEmail: "jamesrowe@outlook.com",
        customerID: "4",
    },
    {
        customerName: "James A Rowe",
        phoneNumber: "17174337699",
        customerEmail: "jamesrowe@outlook.com",
        customerID: "5",
    },
    {
        customerName: "James A Rowe",
        phoneNumber: "17174337699",
        customerEmail: "jamesrowe@outlook.com",
        customerID: "6",
    },
];

var waitlist = [
    {
        customerName: "Link",
        customerEmail: "link@email.com",
        phoneNumber: "123-456-7890",
        customerID: "1234",
    },
];
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
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
    var newReservation = req.body;

    console.log(newReservation);
    reservations.push(newReservation);
    res.json(newReservation);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
