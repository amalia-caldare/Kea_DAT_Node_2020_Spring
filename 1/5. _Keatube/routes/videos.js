const router = require("express").Router();

// todo what data should be inside of each video object
const videos = [];

router.get("/test", (req, res) => {
    return res.send({ message: "Does the router work?" });
});

module.exports = router; 