"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myViews = exports.searchBooks = exports.getOneBook = exports.getAllbooks = exports.postBook = void 0;
const bookModel_1 = __importDefault(require("../model/bookModel"));
const cloudinary_1 = __importDefault(require("../config/cloudinary"));
const postBook = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cloudImg = yield cloudinary_1.default.uploader.upload(request === null || request === void 0 ? void 0 : request.file.path);
        const { author, title, category, summary, views } = request.body;
        const isbn1 = Math.floor(Math.random() * 10000);
        const isbn2 = Math.floor(Math.random() * 10000);
        const isbn3 = Math.floor(Math.random() * 10000);
        const isbn4 = Math.floor(Math.random() * 10000);
        const newBook = yield bookModel_1.default.create({
            author,
            title,
            category,
            summary,
            views,
            ISBN: `${isbn1}-${isbn2}-${isbn3}-${isbn4}`,
            coverImage: cloudImg.secure_url,
            authorImage: author.charAt(0).toUpperCase(),
        });
        return response.status(201).json({
            message: "Data Uploaded Sucessfully",
            data: newBook,
        });
    }
    catch (error) {
        return response.status(400).json({
            message: "An Error Occoured",
            data: error,
        });
    }
});
exports.postBook = postBook;
const getAllbooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield bookModel_1.default.find();
        return res.status(200).json({
            message: "all books found",
            data: book,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "book not found",
        });
    }
});
exports.getAllbooks = getAllbooks;
const getOneBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getOne = yield bookModel_1.default.findById(req.params.id);
        return res.status(201).json({
            message: "Succesfully gotten data",
            data: getOne,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error,
        });
    }
});
exports.getOneBook = getOneBook;
const searchBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryData = req.query;
        const makeSearch = yield bookModel_1.default.find(queryData);
        return res.status(200).json({ message: "Data Found", data: makeSearch });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error,
        });
    }
});
exports.searchBooks = searchBooks;
const myViews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newView = yield bookModel_1.default.findByIdAndUpdate(req.params.id, {
            $push: { views: req.body.ip },
        }, { new: true });
        return res.status(200).json({
            data: newView,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured",
            data: error,
        });
    }
});
exports.myViews = myViews;
