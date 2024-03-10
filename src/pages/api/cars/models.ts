// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mongoose from "mongoose";
import CarModel from "../../../models/Car";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Handle any other HTTP method
  if (req.method === "GET") {
    const data = await CarModel.where("brand").select(["brand", "readbleId"]);
    res.status(200).json({ data });
  }
  res.status(200).json({ status: "ok" });
}
