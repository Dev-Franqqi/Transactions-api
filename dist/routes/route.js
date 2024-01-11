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
const express_1 = require("express");
const transaction_1 = __importDefault(require("../model/transaction"));
const route = (0, express_1.Router)();
route.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, transactionType, transactionDetail, transactionAmount } = req.body;
    try {
        const transaction = yield transaction_1.default.create({
            email,
            transactionType,
            transactionDetail,
            transactionAmount,
        });
        res.status(200).json({ success: "Transaction successful" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}));
route.delete("/delete/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const transaction = yield transaction_1.default.findOneAndDelete({ _id: id });
        if (!transaction) {
            return res.status(404).json({ message: "Transaction invoice not found" });
        }
        res.status(200).json({ message: "Invoice has been deleted" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}));
route.get("/transaction/:email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.params.email;
    try {
        const transactions = yield transaction_1.default.find({ email: email });
        if (!transactions) {
            res.status(404).json({ "message": "You have no transactions yet" });
        }
        res.status(200).json(transactions);
    }
    catch (error) {
        res.status(400).json({ "message": error.message });
    }
}));
exports.default = route;
