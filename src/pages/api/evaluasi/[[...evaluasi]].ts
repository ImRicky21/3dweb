import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const response = await axios.get(
        "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
      );
      console.log(response.data.result);
      res.status(200).json(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }
}
