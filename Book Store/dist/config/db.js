"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const URI = "mongodb://localhost/booksDB";
const lifeURI = "mongodb+srv://Sammy:sammysam@cluster0.aqlrqqw.mongodb.net/bookStore?retryWrites=true&w=majority";
mongoose_1.default.connect(lifeURI);
mongoose_1.default.connection
    .on("open", () => {
    console.log("DataBase Connected");
})
    .once("error", (error) => {
    console.log(`Failed to Connect to the Database\n ${error}`);
});
