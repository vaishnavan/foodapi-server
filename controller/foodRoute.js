const express = require("express");
const Food = require("../model/food");
const router = express();

// adding a food item
router.post("/additem", (req, res) => {
    const { shopname, imgurl, rating, desc, preptime, reviewCount, price } = req.body;
    const food = new Food({
        shopname,
        imgurl,
        rating,
        desc,
        preptime,
        reviewCount,
        price
    })
    food.save()
    .then((data) => {
        res.status(200).json({
            status:"success",
            data:data
        })
    })
    .catch((err) => {
        res.status(404).json(err);
    })
})

// retriving a food item
router.get("/allitem", (req, res) => {
    Food.find()
    .then((data) => {
        res.status(200).json({
            status:"success",
            data:data
        })
    })
    .catch((err) => {
        res.status(404).json(err);
    })
})


module.exports = router;
