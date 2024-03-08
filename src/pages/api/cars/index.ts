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
  // { filters: { limit: 3, offset: 0 } }
  if (req.method === "POST") {
    const { body } = req;
    console.log(body)
    const getLimit = body.limit;
    const getOffset = body.offset;
    const data = await CarModel.find().skip(getOffset).limit(getLimit);
    const totalCount = await CarModel.countDocuments();
    res.status(200).json({ data, totalCount });
  } else {
    // Handle any other HTTP method
    res.status(200).json({ status: "ok" });
  }
}
