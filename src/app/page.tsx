import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImageWrapper from "@/components/ImageWrapper";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col justify-between">
      <Header />
      <ImageWrapper />
      <Hero />
      <Footer />
    </main>
  )
}
