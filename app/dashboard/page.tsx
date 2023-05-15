// import { prisma } from "@/util/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import formatPrice from "@/util/PriceFormat";
import Image from "next/image";
import { format, formatDistanceToNow } from 'date-fns';
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

export const revalidate = 0

const fetchOrders = async () => {
    const user = await getServerSession(authOptions);
    if (!user) {
        return null
    }

    const orders = await prisma.order.findMany({
        where: { userId: user?.user?.id, status: "complete" },
        include: { products: true },
    })
    return orders

}

async function Dashboard() {
    const orders = await fetchOrders();


    if (orders === null) {
        return <div>You need to be logged in to view orders</div>
    }
    if (orders.length === 0) {
        return <div>No orders yet</div>
    }
    return (
        <div className="">
            <h1 className="font-bold">Orders:</h1>
            <div className="font-medium">
                {orders.map((order) => {

                    const createdDate: Date = new Date(order.createdDate);
                    const now: Date = new Date();

                    let formattedDate: string;

                    if (now.getTime() - createdDate.getTime() < 2 * 60 * 60 * 1000) {
                        formattedDate = formatDistanceToNow(createdDate, { addSuffix: true });
                    } else {
                        formattedDate = format(createdDate, "HH:mm");
                    }
                    return (
                        <div key={order.id} className="rounded-sm p-8 my-4  space-y-2 bg-base-200">
                            <h2 className="font-medium">Order number: {order.id}</h2>
                            <p>Time: {formattedDate}</p>
                            <p className="py-2">Status:
                                <span className={`${order.status === "complete" ? "bg-green-600" : "bg-orange-400"} text-white py-1 px-2 mx-2 text-sm rounded-xl text-center`}>
                                    {order.status}
                                </span>
                            </p>
                            <p className="font-medium ">Total: {formatPrice(order.amount)}</p>
                            <div className="flex gap-8">
                                {order.products.map((product) => (
                                    <div className="py-2" key={product.id}>
                                        <h2 className="py-2">{product.name}</h2>
                                        <div className="flex items-center gap-4">
                                            <Image
                                                priority={true}
                                                src={product.image!}
                                                alt={product.name}
                                                width={72}
                                                height={72}
                                            />
                                        </div>
                                        <p>{formatPrice(product.unit_amount)}</p>
                                        <p>Quantity: {product.quantity}</p>

                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Dashboard