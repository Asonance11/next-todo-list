import Link from "next/link";
import Navlinks from "./Navlinks";

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-gray-100 shadow-md p-4 xl:px-24 flex items-center justify-between">
      <Link href="/" className="text-3xl font-bold">
        Todoist
      </Link>

      <Navlinks />
    </nav>
  );
}
