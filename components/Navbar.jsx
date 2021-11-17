import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

const Button = () => {
  const { data: session } = useSession()
  return (
    <button onClick={() => session ? signOut() : signIn()} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      {session ? "Logout" : "Login"}
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  );
};

const Navbar = () => {
  const links = [
    { label: "Home", path: "/" },
    { label: "Search your college", path: "/api/test" },
    { label: "API", path: "/api/docs" },
  ];
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src="/logo.png" alt="logo" width="40px" height="40px" />
          <span className="ml-3 text-xl">FindCollege</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {links.map((item, key) => (
            <Link key={key} href={item.path}>
              <a className="mr-5 hover:text-gray-900">{item.label}</a>
            </Link>
          ))}
        </nav>
        <Button />
      </div>
    </header>
  );
};

export default Navbar;
