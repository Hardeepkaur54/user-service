const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

app.use("/user", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`User service running on port ${PORT}`);
});

