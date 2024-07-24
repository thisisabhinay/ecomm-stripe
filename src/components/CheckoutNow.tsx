"use client"

import { Button } from "@/components/ui/button"
import { useShoppingCart } from "use-shopping-cart"
import { urlFor } from "@/lib/sanity"
import { CartProduct } from "@/interface"

export default function CheckoutNow({
  currency,
  description,
  image,
  name,
  price,
  priceId
}: CartProduct) {
  const { checkoutSingleItem } = useShoppingCart()

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId)
  }

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: priceId
  }

  return (
    <Button
      variant="outline"
      onClick={() => {
        buyNow(product.price_id)
      }}
    >
      Checkout Now
    </Button>
  )
}
