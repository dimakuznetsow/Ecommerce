'use client'
import { ReactNode } from 'react'
import { createContext } from 'react';
import useSWR from 'swr';
import Stripe from 'stripe'
import { ContextType } from "@/types/ContextType";


export const DataContext = createContext({});

export default function DataProvider({ children }: { children: ReactNode }) {
    const { data: products, error } = useSWR("/api/stripe/", async () => {
        const response = await fetch("/api/stripe/");
        const { apiKey } = await response.json();

        const stripe = new Stripe(apiKey, {
            apiVersion: '2022-11-15',
        });

        const products = await stripe.products.list();

        const fetchedCategories = await Promise.all(products.data.map(async (product) => {
            const prices = await stripe.prices.list({ product: product.id });
            return {
                id: product.id,
                name: product.name,
                unit_amount: prices.data[0].unit_amount,
                image: product.images[0],
                currency: prices.data[0].currency,
                description: product.description,
                metadata: product.metadata
            };
        }));

        return fetchedCategories;
    });

    const loading = !products && !error;

    return (
        <DataContext.Provider value={{ products, loading }}>
            {children}
        </DataContext.Provider>
    );
}
