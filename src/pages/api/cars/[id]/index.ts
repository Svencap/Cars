// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import CarModel from "@/models/Car";
import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  // Handle any other HTTP method
  if (req.method === "GET") {
    try {
      const data = await CarModel.findOne({ readbleId: Number(id) });
      if (data) {
        console.log(data);
        res.status(200).json({ data });
      } else {
        res.status(400).json({ status: "now found" })
      }
    } catch (error) {
      res.status(404).json({ status: "now found" });
    }
  }
  res.status(200).json({ status: "ok" });
}
