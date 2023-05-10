// import Stripe from "stripe";
// import { NextApiRequest, NextApiResponse } from "next";
// import { PrismaClient } from "@prisma/client";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/pages/api/auth/[...nextauth]";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
//   apiVersion: "2022-11-15",
// });

// const prisma = new PrismaClient();

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "GET") {
//     try {
//       const user = await getServerSession(req, res, authOptions);
//       if (!user) {
//         res.status(4043).json({ message: "User not logged in" });
//       }
//       const orders = await prisma.order.findMany({
//         where: { userId: user?.user?.id },
//         include: { products: true },
//       });
//       res.status(200).json({ orders });
//     } catch (error) {
//       res.status(500).json({ message: "Failed to fetch orders" });
//     }
//   } else {
//     res.setHeader("Allow", "GET");
//     res.status(405).end("Methods not allowed");
//   }
// }
