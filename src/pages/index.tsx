import type { NextPage } from "next";
import Link from "next/link";
import useSWR from "swr";
import PageTitle from "../components/PageTitle";

const fetcher = (args: any) => fetch(args).then((res) => res.json());

const Home: NextPage = () => {
  const { data, error } = useSWR("/api/get-promo", fetcher);

  return (
    <div>
      <PageTitle title="Bem-Vindo" />
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

      {!data && <p className="mt-12 text-center">Carregando..</p>}
      {!error && data && data.showCoupon && (
        <p className="mt-12 text-center">{data.message}</p>
      )}
    </div>
  );
};

export default Home;
