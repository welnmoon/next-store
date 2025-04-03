import Link from "next/link";
import Navbar from "./Navbar";

const Footer = () => {
  return (
    <footer className="p-5 bg-white shadow-md px-6 py-4 flex gap-4 items-center">
      <Link href="/">
        <h1 className="text-4xl font-bold text-red-700">Sulpak</h1>
      </Link>
      <Navbar />
    </footer>
  );
};

export default Footer;
