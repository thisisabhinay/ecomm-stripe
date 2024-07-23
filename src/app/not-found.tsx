import Link from "next/link"

export default function NotFound() {
  return (
    <div className="h-80 flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-gray-600">
        Oops! The page you are looking for could not be found.
      </p>
      <Link
        href={"/"}
        className="inline-block rounded px-4 py-2 font-semibold text-white bg-primary"
      >
        Go back to Home
      </Link>
    </div>
  )
}
