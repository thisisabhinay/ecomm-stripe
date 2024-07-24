"use client"

import { ReactNode } from "react"
import { CartProvider as USCProvider} from "use-shopping-cart"

export interface CartProviderProp {
  children: ReactNode
}

export default function CartProvider({ children }: CartProviderProp) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="http://localhost:3000/purchase/success"
      cancelUrl="http://localhost:3000/purchase/error"
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  )
}