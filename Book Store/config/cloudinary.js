"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: "samolorunda",
    api_key: "871341554644239",
    api_secret: "Mt_S1riHhh5g9plWHVdpiHyyv58",
    secure: true,
});
exports.default = cloudinary_1.v2;
