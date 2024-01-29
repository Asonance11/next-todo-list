import { auth } from "@/auth";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

const Navlinks = async () => {
  const session = await auth();
  const user = session?.user;

  return (
    <ul className="flex items-center gap-4">
      {user ? (
        <>
          <li className="border-2 border-black text-black p-2">
            <LogoutButton />
          </li>
          {/* <li className="text-gray-600">{user.username}</li> */}
        </>
      ) : (
        <>
          <li className="border-2 border-black text-black p-2">
            <Link href="/signin" className="">
              Sign in
            </Link>
          </li>

          <li className="border-2 border-black text-black p-2">
            <Link href="/register" className="">
              Register
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default Navlinks;
