import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts"

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <>
      <Hero/>
      <NewProducts/>
    </>
  );
}
