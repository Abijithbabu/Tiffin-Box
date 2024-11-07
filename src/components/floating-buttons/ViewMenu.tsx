import { Icons } from "@/components/Icon";
import Link from "next/link";

const ViewMenu = ({ }) => {
  return (
    <div className="relative flex flex-col gap-5 w-full justify-center items-center">
      <div className="relative bg-[rgba(114,109,109,0.35)] backdrop-blur-lg rounded-full w-14 h-14 flex justify-center items-center">
        <Link href="#">
          <span className="sr-only">Instagram</span>
          <Icons.instagram />
        </Link>
      </div>
      <div className="relative bg-[rgba(114,109,109,0.35)] backdrop-blur-lg rounded-full w-14 h-14 flex justify-center items-center">
        <Link href="#">
          <span className="sr-only">Facebook</span>
          <Icons.facebook />
        </Link>
      </div>
      <div className="relative bg-[rgba(114,109,109,0.35)] backdrop-blur-lg rounded-full w-14 h-14 flex justify-center items-center">
        <Link href="#">
          <span className="sr-only">Twitter</span>
          <Icons.twitter className="" />
        </Link>
      </div>
    </div>
  );
};

export default ViewMenu;
