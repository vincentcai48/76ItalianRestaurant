const express = require("express")
const router = express.Router();

router.get('/alert',(req,res)=>{
    res.json({
        "alert": true,
        "alerttext": "Coronavirus Updates: Open for takeout only",
    })
    res.end();
})

module.exports = router;