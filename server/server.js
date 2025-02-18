require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');

console.log("DB_USERNAME:", process.env.DB_USERNAME);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_HOST:", process.env.DB_HOST);

const app = express();
const PORT = process.env.PORT || 6543;

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.get("/tickets", async (req, res) => {              //GET TICKETS
    const { Ticket } = require("./models");
    const tickets = await Ticket.findAll();
    res.json(tickets);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
