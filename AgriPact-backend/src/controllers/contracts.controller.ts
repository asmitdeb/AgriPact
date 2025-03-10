import { Request, Response } from "express";
import prisma from "../lib/prisma";


export const getContracts = async (req: Request, res: Response) => {
    try {
        const { id } = req.user;
        const contracts = await prisma.contract.findMany({
            where: {
                OR: [
                    {
                        createdBy: id
                    },
                    {
                        createdFor: id
                    }
                ]
            }
        });
        res.status(200).json({ contracts });
    } catch (error) {
        console.log("Error getting contracts:", error);
        res.status(500).json({ error: "Failed to get contracts." });
    }
};