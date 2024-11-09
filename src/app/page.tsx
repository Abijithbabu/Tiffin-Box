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
    <main className="relative h-full w-full bg-[#090909] font-jakarta text-white">
      <div className="flex h-full w-full flex-col items-center justify-center md:px-20 lg:px-28 2xl:px-40">
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
      <div className="fixed right-20 top-1/2 hidden -translate-y-1/2 transform md:flex lg:right-28 2xl:right-40">
        <ViewMenu />
      </div>
      <div className="fixed left-20 top-1/2 hidden -translate-y-1/2 transform md:flex lg:left-28 2xl:left-40">
        <Scrollbar />
      </div>
    </main>
  );
}
