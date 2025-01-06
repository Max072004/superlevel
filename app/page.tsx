import Hero from "./Components/Hero";
import CardsSection from "./Components/CardsSection";
import QuoteSection from "./Components/QuoteSection";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="h-full items-center overflow-hidden justify-center flex flex-col text-white bg-[#131313] w-full bggrad">
      <Hero />
      <CardsSection />
      <QuoteSection />
      <Footer />
    </div>
  );
}




