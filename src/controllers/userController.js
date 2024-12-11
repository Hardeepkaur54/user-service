const users = [];

const registerUser = (req, res) => {
    const { username, password } = req.body;
    users.push({ username, password });
    res.status(201).send({ message: "User registered successfully" });
};

const loginUser = (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
        res.status(200).send({ message: "Login successful" });
    } else {
        res.status(401).send({ message: "Invalid credentials" });
    }
};

module.exports = { registerUser, loginUser };

