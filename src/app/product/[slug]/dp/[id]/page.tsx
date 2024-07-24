import ImageGallery from "@/components/ImageGallery"
import {sanityClient} from "@/lib/sanity"
import { fullProduct } from "@/interface"
import { Button } from "@/components/ui/button"
import AddToBag from "@/components/AddToBag"
import CheckoutNow from "@/components/CheckoutNow"
import { Star } from "lucide-react"

export interface ProductPageProps {
  params: {
    id: string,
    slug: string
  }
}

async function getData(id: string) {
  const query = `
    *[_type == "product" && _id == "${id}"][0] {
      _id,
      images,
      price,
      name,
      description,
      "slug": slug.current,
      "categoryName": category->name,
      "priceId": price_id
    } 
  `
  return await sanityClient.fetch(query)
}

export default async function ProductPage({ params }: Readonly<ProductPageProps>) {
  const data: fullProduct = await getData(params.id)

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="grid gap-8 md:grid-cols-2">
        <ImageGallery images={data.images} />

        <div className="md:py-8">
          <div className="mb-2 md:mb-3">
            <span className="mb-0.5 inline-block text-gray-500">
              {data.categoryName}
            </span>
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
              {data.name}
            </h2>
          </div>

          <div className="mb-6 flex items-center gap-3 md:mb-10">
            <Button className="rounded-full gap-x-2">
              <span className="text-sm">4.2</span>
              <Star className="h-5 w-5" />
            </Button>

            <span className="text-sm text-gray-500 transition duration-100">
              56 Ratings
            </span>
          </div>

          <div className="mb-4">
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-gray-800 md:text-2xl">
                ${data.price}
              </span>
              <span className="mb-0.5 text-red-500 line-through">
                ${data.price + 30}
              </span>
            </div>

            <span className="text-sm text-gray-500">
              Incl. Vat plus shipping
            </span>
          </div>

          <div className="mb-6 flex items-center gap-2 text-gray-500">
            <span className="text-sm">2-4 Day Shipping</span>
          </div>

          <div className="flex gap-2.5">
            <AddToBag
              currency="USD"
              id={data.priceId}
              description={data.description}
              image={data.images[0]}
              name={data.name}
              price={data.price}
              key={data._id}
              priceId={data.priceId}
            />
            <CheckoutNow
              currency="USD"
              id={data.id}
              description={data.description}
              image={data.images[0]}
              name={data.name}
              price={data.price}
              key={data._id}
              priceId={data.priceId}
            />
          </div>

          <p className="mt-12 text-base text-gray-500 tracking-wide">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  )
}
