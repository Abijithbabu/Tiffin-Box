import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ViewMenu = ({ }) => {
  return (
    <div className="relative flex flex-col gap-5 w-full justify-center items-center">
      <div className="relative bg-[rgba(114,109,109,0.35)] backdrop-blur-lg rounded-full w-14 h-14 flex justify-center items-center">
        <Link href="https://www.instagram.com/bavettesteakhouse/">
          <span className="sr-only">Instagram</span>
          <Icons.instagram />
        </Link>
      </div>
      <div className="relative bg-[rgba(114,109,109,0.35)] backdrop-blur-lg rounded-full w-14 h-14 flex justify-center items-center">
        <Link href="https://www.facebook.com/bavettesteakhouse/">
          <span className="sr-only">Facebook</span>
          <Icons.facebook />
        </Link>
      </div>
      <div className="relative bg-[rgba(114,109,109,0.35)] backdrop-blur-lg rounded-full w-14 h-14 flex justify-center items-center">
        <Link href="https://www.tripadvisor.com/Restaurant_Review-g186337-d23660134-Reviews-or30-Bavette_Steak_House_Liverpool-Liverpool_Merseyside_England.html">
          <span className="sr-only">Twitter</span>
          <Icons.twitter className=""/>
        </Link>
      </div>
    </div>
  );
};

export default ViewMenu;
