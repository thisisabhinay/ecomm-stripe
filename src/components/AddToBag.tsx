"use client"

import { useShoppingCart } from "use-shopping-cart"
import { Button } from "@/components/ui/button"
import { urlFor } from "@/lib/sanity"
import { CartProduct } from "@/interface"

export default function AddToBag({
  currency,
  description,
  image,
  name,
  price,
  priceId
}: CartProduct) {
  const { addItem, handleCartClick } = useShoppingCart()

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
      onClick={() => {
        addItem(product), handleCartClick()
      }}
    >
      Add To Bag
    </Button>
  )
}
