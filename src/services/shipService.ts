import { Ship } from "@/src/models/shipModel";
import new_ship from "@/static/fixed_responses/postShip.json";
import { Types } from "mongoose";

const createShip = async (accountOwnerId: Types.ObjectId) => {
    try {
        const ship = new Ship({ ...new_ship, ShipOwnerId: accountOwnerId });
        await ship.save();
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`error creating inventory" ${error.message}`);
        }
        throw new Error("error creating inventory that is not of instance Error");
    }
};

export { createShip };