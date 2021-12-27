import type { NextPage } from "next";

const Pesquisa: NextPage = () => {
  return (
    <div className="pt-6">
      <h1 className="text-center font-bold my-4 text-2xl">
        Críticas e sugestões
      </h1>
      <p className="text-center mb-6">
        O estabelecimento X sempre preza pela qualidade no atendimento aos seus
        clientes.
        <br /> Por isso, estamos sempre abertos a ouvir a sua opnião, para
        continuarmos melhorando.
      </p>

      <div className="w-1/5 mx-auto">
        <label className="font-bold" htmlFor="name">
          Seu nome:
        </label>
        <input
          className="p-4 block bg-blue-100 shadow my-2 rounded"
          type="text"
          id="name"
        />
      </div>
    </div>
  );
};

export default Pesquisa;
