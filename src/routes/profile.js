const express = require("express");
const fileRoute = express.Router();

fileRoute.get("/items", async (req, res) => {
    let items = [
        {
            name: "surface laptop",
            image: "https://www.componentcontrol.com/system/comfy/cms/files/files/000/000/531/original/smlogosize.png",
            price: 1000.99
        },
        {
            name: "surface go",
            image: "https://www.componentcontrol.com/system/comfy/cms/files/files/000/000/531/original/smlogosize.png",
            price: 909.99
        },
        {
            name: "surface studio",
            image: "https://www.componentcontrol.com/system/comfy/cms/files/files/000/000/531/original/smlogosize.png",
            price: 2500.99
        },
        {
            name: "surface pro",
            image: "https://www.componentcontrol.com/system/comfy/cms/files/files/000/000/531/original/smlogosize.png",
            price: 1500.99
        }
    ];
    res.json(items);
})

module.exports = fileRoute;