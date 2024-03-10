// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mongoose from "mongoose";
import CarModel from "../../../models/Car";
import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { body } = req;
    const { limit = 9, offset = 0, color, brand, sort } = body;

    let query = CarModel.find();

    if (color) {
      query = query.where("color").equals(color);
    }

    if (brand) {
      query = query.where("brand").equals(brand);
    }

    if (sort) {
      query = query.sort({
        [`${body.sort.field}`]: body.sort.sort === "ASC" ? 1 : -1,
      });
    }

    const totalCount = await CarModel.countDocuments(query.getFilter());
    const data = await query.skip(offset).limit(limit);

    res.status(200).json({ data, totalCount });
  } else {
    // Handle any other HTTP method
    res.status(200).json({ status: "ok" });
  }
}
