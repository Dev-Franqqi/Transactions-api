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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TransactionSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
    },
    transactionType: {
        type: String,
        required: true,
    },
    transactionDetail: {
        type: String,
        required: true,
    },
    transactionAmount: {
        type: Number,
        required: true,
    },
});
TransactionSchema.statics.createTransaction = function (email, transactionType, transactionDetail, transactionAmount) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!email || !transactionType || !transactionDetail || !transactionAmount) {
            throw new Error("Fill in all fields");
        }
        const transaction = yield this.create({
            email,
            transactionType,
            transactionDetail,
            transactionAmount,
        });
        return transaction;
    });
};
// Fix the export statement
const TransactionModel = (0, mongoose_1.model)("transaction", TransactionSchema);
exports.default = TransactionModel;
