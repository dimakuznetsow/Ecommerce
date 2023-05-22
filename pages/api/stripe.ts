import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { STRIPE_SECRET_KEY } = process.env;

  res.status(200).json({ apiKey: STRIPE_SECRET_KEY });
}
