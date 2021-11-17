import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const CTAButton = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <Link href="/api">
        <a class="m-2 flex-shrink-0 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg mt-10 sm:mt-0">
          Go to the app
        </a>
      </Link>
    );
  }
  return (
    <button
      onClick={() => signIn()}
      class="m-2 flex-shrink-0 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg mt-10 sm:mt-0"
    >
      Login to start
    </button>
  );
};

const Hero = () => {
  return (
    <section className="p-6">
      <h1 className="text-7xl text-black-700 font-extrabold text-center pl-6 pr-6 pt-6">
        We are the easiest way to find your
        <span className="leading-tight bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-400 to-green-100">
          {" "}
          perfect school
        </span>
      </h1>
      <p className="text-center mt-6 mr-24 ml-24 mb-6 text-2xl font-medium">
        Take a test or enter your SAT scores and get your top choices for
        college, forget the hassle of choosing, finding and paying for your
        school.
      </p>
      <div className="flex items-center justify-center">
        <CTAButton />
        <Link href="/api/test">
          <a class="m-2 flex-shrink-0 text-black bg-white border-0 py-2 px-8 focus:outline-none hover:bg-gray-200 rounded text-lg mt-10 sm:mt-0 border-gray-400">
            Learn more
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
