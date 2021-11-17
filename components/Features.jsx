import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const CTAButton = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <Link href="/api">
          <a className="flex mx-auto w-44 mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
            Go to the app
          </a>
        </Link>
      </div>
    );
  }
  return (
    <button
      onClick={() => signIn()}
      className="flex mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg"
    >
      Login to start
    </button>
  );
};

const Features = () => {
  const sentences = [
    "AI-based recommendations",
    "Online standardized test",
    "Based on CollegeBoard data",
    "Automated debt calculation",
    "SAT-based questions",
    "Keyless API access",
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
            Our benefits
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Our platform offers incredible features, which will allow you to
            choose the best college for you.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {sentences.map((sentence, key) => (
            <div key={key} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">{sentence}</span>
              </div>
            </div>
          ))}
        </div>
        <CTAButton />
      </div>
    </section>
  );
};

export default Features;
