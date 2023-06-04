import { toCreateAccount, toDatabaseAccount } from "@/src/helpers/customHelpers";
import { createAccount } from "@/src/services/loginService";
import { RequestHandler } from "express";

// eslint-disable-next-line @typescript-eslint/no-misused-promises
const createAccountController: RequestHandler = async (req, res) => {
    const createAccountData = toCreateAccount(req.body);
    const databaseAccount = toDatabaseAccount(createAccountData);

    const account = await createAccount(databaseAccount);

    res.json(account);
};

export { createAccountController };
