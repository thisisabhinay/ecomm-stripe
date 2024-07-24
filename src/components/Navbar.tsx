"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "./ui/button"
import { ShoppingBag } from "lucide-react"
import { useShoppingCart } from "use-shopping-cart"

const navlinks = [
  { label: "Home", href: "/" },
  { label: "Men", href: "/Men" },
  { label: "Women", href: "/Women" },
  { label: "Teens", href: "/Teens" }
]

export default function Navbar() {
  const pathname =  usePathname()
  const { handleCartClick } = useShoppingCart()

  function getLinkStyle(href: string) {
    return `${pathname === href ? "text-primary" : "text-slate-600"} text-lg font-semibold transition duration-100 ease-in-out hover:text-primary`
  }

  return (
    <header className="mb-8 border-b border-solid border-gray-200">
      <div className="flex items-center justify-between mx-auto max-w-screen-sm px-4 sm:px-6 lg:max-w-screen-xl">
        <Link href={navlinks[0].href}>
          <h1 className="text-3xl font-bold">
            ECO<span className="text-primary">MM</span>
          </h1>
        </Link>

        <nav className="hidden lg:flex gap-12 2xl:ml-16">
          {navlinks.map((link, index) => (
            <Link
              className={getLinkStyle(link.href)}
              key={index}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex divide-x border-r sm:border-l">
          <Button
            variant={"outline"}
            className="flex flex-col gap-y-1.5 size-12 sm:size-20 md:size-24 rounded-none"
            onClick={() => handleCartClick()}
          >
            <ShoppingBag />
            <span className="hidden sm:block text-xs font-semibold text-slate-600">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  )
}
