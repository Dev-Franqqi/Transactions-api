import { Router } from "express";
import TransactionModel from "../model/transaction";
import { Response, Request } from "express";

interface Reqbody {
  email: string;
  transactionType: string;
  transactionDetail: string;
  transactionAmount: string;
}

const route = Router();

route.post("/create", async (req: Request, res: Response) => {
  const { email, transactionType, transactionDetail, transactionAmount } =
    req.body as Reqbody;
  try {
    const transaction = await TransactionModel.create({
      email,
      transactionType,
      transactionDetail,
      transactionAmount,
    });
    res.status(200).json({ success: "Transaction successful" });
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
});

route.delete("/delete/:id", async (req: Request, res: Response) => {
  const id = req.params.id; 
  try {
    const transaction = await TransactionModel.findOneAndDelete({ _id: id });
    if (!transaction) {
      return res.status(404).json({ message: "Transaction invoice not found" });
    }
    res.status(200).json({ message: "Invoice has been deleted" });
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
});


route.get("/transaction/:email", async (req: Request, res: Response) => {
    const email = req.params.email

    try {
        const transactions = await TransactionModel.find({ email: email })
        if (!transactions) {
            res.status(404).json({"message":"You have no transactions yet"})
        }
        res.status(200).json(transactions)
    }
    catch (error: any) {
        res.status(400).json({"message":error.message})
    }
})

export default route;
