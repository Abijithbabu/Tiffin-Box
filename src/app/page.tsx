import Special from "@/app/(section)/(special)/Special";
import Hero from "@/app/(section)/Hero";
import Reviews from "@/app/(section)/Reviews";
import ViewMenu from "@/components/floating-buttons/ViewMenu";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutUs from "./(section)/AboutUs";
import OnlineOrder from "./(section)/OnlineOrder";
import BookTable from "./(section)/BookTable";
import WhyTiffinBox from "./(section)/WhyTiffinBox";
import Chef from "./(section)/Chef";
import Locations from "./(section)/Locations";
import Community from "./(section)/Community";
import Scrollbar from "@/components/Scrollbar";

export default function HomePage() {
  return (
    <main className="relative h-full w-full font-jakarta bg-[#090909] text-white">
      <div className="flex h-full w-full flex-col items-center justify-center md:px-40">
        <Navbar />
        <Hero />
        <AboutUs />
        <Special />
        <OnlineOrder />
        <BookTable />
        <WhyTiffinBox />
        <Chef />
        <Reviews />
        <Locations />
        <Community />
      </div>
      <Footer />
      <div className="fixed top-1/2 right-40 transform -translate-y-1/2 hidden md:flex">
        <ViewMenu />
      </div>
      <div className="fixed top-1/2 left-40 transform -translate-y-1/2 hidden md:flex">
        <Scrollbar />
      </div>
    </main>
  );
}
