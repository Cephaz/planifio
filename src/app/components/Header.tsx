import Link from "next/link";

export default function Header() {
  return (
    <header className="flex gap-4 justify-between py-4 text-gray-600">
        <div className="flex items-center gap-10">
          <Link href={"/"} className="text-green-600 font-bold text-2xl">
            Planifio
          </Link>
          <nav className="flex gap-4">
            <Link href={"/features"}>Features</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Pricing</Link>
          </nav>
        </div>
        <nav className="flex items-center gap-4">
          <Link href={"/login"}>Login</Link>
          <Link href={"/signup"} className="bg-green-600 text-white py-2 px-4 rounded-full">Signup</Link>
        </nav>
      </header>
  );
}
