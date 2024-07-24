export interface simplifiedProduct {
  _id: string
  imageUrl: string
  price: number
  slug: string
  categoryName: string
  name: string
}

export interface fullProduct {
  _id: string
  images: any
  price: number
  slug: string
  categoryName: string
  name: string
  description: string
  priceId: string
}

export interface CartProduct {
  id: string
  name: string
  description: string
  price: number
  currency: string
  image: any
  priceId: string
}