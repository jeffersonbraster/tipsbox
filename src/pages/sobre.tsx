import type { NextPage } from "next";
import Link from "next/link";

const Sobre: NextPage = () => {
  return (
    <div>
      <h1>Sobre</h1>

      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
};

export default Sobre;
