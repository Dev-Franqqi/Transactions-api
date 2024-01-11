import { Schema, model } from "mongoose";
import { Document } from "mongoose";

interface ITransaction extends Document {
  email: string;
  transactionType: string;
  transactionDetail: string;
  transactionAmount: number;
}

const TransactionSchema: Schema<ITransaction> = new Schema<ITransaction>({
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

TransactionSchema.statics.createTransaction = async function (
  email,
  transactionType,
  transactionDetail,
  transactionAmount
) {
  if (!email || !transactionType || !transactionDetail || !transactionAmount) {
    throw new Error("Fill in all fields");
  }

  const transaction = await this.create({
    email,
    transactionType,
    transactionDetail,
    transactionAmount,
  });

  return transaction;
};

// Fix the export statement
const TransactionModel = model<ITransaction>("transaction", TransactionSchema);
export default TransactionModel;
