import type { NextPage } from "next";
import Link from "next/link";

const Contato: NextPage = () => {
  return (
    <div>
      <h1>Contato</h1>

      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
};

export default Contato;
