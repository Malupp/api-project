import express from "express"
import "express-async-errors"

const app = express();

app.get("/", (req, res) => {
    res.send("Changed message ");
})

export default app;
