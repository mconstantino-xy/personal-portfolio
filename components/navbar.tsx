
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b py-4">
      <Link href="/" className="text-xl font-bold">
        My Portfolio
      </Link>

      <div className="flex gap-6 text-sm font-medium">
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/Education">Education</Link>
        <Link href="/Hobbies">Hobbies</Link>
        <Link href="/Contact">Contact</Link>
      </div>
    </nav>
  );
}
