"use client";

import { toast } from "sonner";
import { login } from "../lib/actions";
import Link from "next/link";

export default function LoginForm() {
  const signin = async (formData: FormData) => {
    const response = await login(formData);

    if (response?.error) {
      return toast.error(response.error);
    }

    return toast.success("Successfully logged in");
  };

  return (
    <section className="max-w-md mt-8 relative flex flex-col px-5 py-10 rounded-md m-auto border-gray-200 shadow-lg border-2">
      <div className="my-5">
        <h1 className="text-3xl font-bold">Welcome Back</h1>
      </div>
      <form action={signin} className="text-black flex flex-col gap-4">
        <div className="block relative">
          <label
            htmlFor="username"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
          />
        </div>
        <div className="block relative">
          <label
            htmlFor="password"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
          />
        </div>
        <div className="text-sm text-center">
          New Here?{" "}
          <Link href={"/signin"} className="text-sm text-black hover:underline">
            Sign up here!
          </Link>
        </div>
        <button
          type="submit"
          className="w-max m-auto px-6 py-2 rounded text-black border-2 border-black text-sm font-normal"
        >
          Sign in
        </button>
      </form>
    </section>
  );
}
