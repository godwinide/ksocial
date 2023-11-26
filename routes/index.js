const router = require("express").Router();


router.get("/", (req, res) => {
    try {
        return res.render("index", { req, layout: "layout" });
    } catch (err) {
        console.log(err)
    }
});


module.exports = router;