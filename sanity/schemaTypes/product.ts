import category from "./category";

export default {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of product",
    },
    {
      name: "images",
      type: "array",
      title: "Product images",
      of: [{type: "image"}],
    },
    {
      name: "description",
      type: "text",
      title: "Product description",
    },
    {
      name: "slug",
      type: "slug",
      title: "Product slug",
      options: {
        source: "name",
      },
    },
    {
      name: "category",
      type: "reference",
      title: "Product Category",
      to: [{type: "category"}]
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },
  ],
}