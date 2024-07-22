import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"

export const sanityClient = createClient({
  projectId: "x9xsz52m",
  dataset: "production",
  apiVersion: "22-07-2024",
  useCdn: true
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}
