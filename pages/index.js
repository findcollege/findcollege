import Link from "next/link";

const Landing = () => {
  return (
    <h1>
      <Link href="/api/docs">
        <a>Check API</a>
      </Link>
    </h1>
  );
};

export default Landing;
