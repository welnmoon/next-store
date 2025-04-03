import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const currentPath = useRouter();
  const linkStyle = (path: string) => {
    return currentPath.pathname === path
      ? "px-4 py-2 rounded-md transition-colors text-red-500 "
      : "px-4 py-2 rounded-md transition-colors hover:text-red-400";
  };
  return (
    <nav className="">
      <Link href="/store" className={linkStyle("/store")}>
        Store
      </Link>
      <Link href="/goods" className={linkStyle("/goods")}>
        Goods
      </Link>
      <Link href="/about" className={linkStyle("/about")}>
        About us
      </Link>
    </nav>
  );
};

export default Navbar;
