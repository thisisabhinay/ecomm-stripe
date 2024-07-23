import Link from "next/link"
import { simplifiedProduct } from "@/interface"
import { sanityClient } from "@/lib/sanity"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

async function getData() {
  const query = `
    *[_type == 'product'][0...4] | order(_createdAt asc)  {
      _id, 
      price, 
      name,
      "slug": slug.current,
      "categoryName": category->name,
      "imageUrl": images[0].asset->url
    }
  `
  return await sanityClient.fetch(query)
}

export default async function NewProducts() {
  const data: simplifiedProduct[] = await getData()

  function getHref(product: simplifiedProduct) {
    return `/product/${product.slug}/dp/${product._id}`
  }
  
  return (
    <div className="bg-white">
      <div className="mx-auto py-16 sm:py-24 max-w-screen-sm lg:max-w-screen-xl">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Newest products
          </h2>

          <Link className="text-primary flex items-center gap-x-1" href="/all">
            See All
            <span className="inline-block ml-1">
              <ArrowRight />
            </span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Link href={getHref(product)}>
                  <Image
                    src={product.imageUrl}
                    alt="Product image"
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                    width={300}
                    height={300}
                  />
                </Link>
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={getHref(product)}>{product.name}</Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.categoryName}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
