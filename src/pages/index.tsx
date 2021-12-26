import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <h1>home</h1>

      <div>
        <Link href="/sobre">
          <a>Sobre</a>
        </Link>

        <Link href="/contato">
          <a>Contato</a>
        </Link>

        <Link href="/pesquisa">
          <a>Pesquisa</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
