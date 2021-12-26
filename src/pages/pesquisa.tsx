import type { NextPage } from "next";
import Link from "next/link";

const Pesquisa: NextPage = () => {
  return (
    <div>
      <h1>Pesquisa</h1>

      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
};

export default Pesquisa;
