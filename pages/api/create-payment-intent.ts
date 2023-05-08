import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { AddCartType } from "@/types/AddCart";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-11-15",
});

const calculateTotalPrice = (items: AddCartType[]) => {
  const totalPrice = items.reduce((acc, item) => {
    return acc + item.unit_amount! * item.quantity!;
  }, 899);
  return totalPrice;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // get user
  const session = await getServerSession(req, res, authOptions);
  if (!session?.user) {
    res.status(403).json({ message: "Not logged in" });
  }
  // get data from body
  const { items, payment_intent_id } = req.body;

  const orderData = {
    user: { connect: { id: session?.user?.id } },
    amount: calculateTotalPrice(items),
    currency: "usd",
    status: "pending",
    paymentIntentId: payment_intent_id,
    products: {
      create: items.map((item) => ({
        name: item.name,
        description: item.description,
        unit_amount: item.unit_amount,
        quantity: item.quantity,
      })),
    },
  };

  res.status(200).json({ session });
  console.log(res);
  return;
}
