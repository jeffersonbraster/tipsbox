import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <p className="mt-12 text-center">
        O estabelecimento X sempre preza pela qualidade no atendimento aos seus
        clientes.
        <br /> Por isso, estamos sempre abertos a ouvir a sua opnião, para
        continuarmos melhorando.
      </p>

      <div className="text-center my-12">
        <Link href="/pesquisa">
          <a className="bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow">
            Dar opnião/sugestão
          </a>
        </Link>
      </div>

      <p className="mt-12 text-center">Mensagem do desconto.</p>
    </div>
  );
};

export default Home;
