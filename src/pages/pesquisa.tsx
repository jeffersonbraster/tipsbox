import type { NextPage } from "next";
import { useState } from "react";
import PageTitle from "../components/PageTitle";

type data = {
  showCoupon: boolean;
  Cupom: string;
  Promo: string;
};

type Form = {
  name: string;
  email: string;
  phone: string;
  nota: number;
};

const Pesquisa: NextPage = () => {
  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    phone: "",
    nota: -1,
  });

  const notas = [0, 1, 2, 3, 4, 5];

  const [success, setSuccess] = useState(false);
  const [retorno, setRetorno] = useState<data>();

  const save = async () => {
    try {
      const res = await fetch("/api/save", {
        method: "POST",
        body: JSON.stringify(form),
      });

      const data = await res.json();

      setForm({
        name: "",
        email: "",
        phone: "",
        nota: -1,
      });
      setSuccess(true);
      setRetorno(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const key = e.target.name;
    setForm((old) => ({
      ...old,
      [key]: value,
    }));
  };

  return (
    <div className="pt-6">
      <PageTitle title="Pesquisa" />
      <h1 className="text-center font-bold my-4 text-2xl">
        Críticas e sugestões
      </h1>
      <p className="text-center mb-6">
        O estabelecimento X sempre preza pela qualidade no atendimento aos seus
        clientes.
        <br /> Por isso, estamos sempre abertos a ouvir a sua opnião, para
        continuarmos melhorando.
      </p>

      {!success && (
        <div className="text-center mx-auto">
          <label className="font-bold" htmlFor="name">
            Seu nome:
          </label>
          <input
            className="p-4 block bg-blue-100 shadow my-2 rounded mx-auto"
            type="text"
            id="name"
            placeholder="Seu nome"
            onChange={onChange}
            name="name"
            value={form.name}
          />

          <label className="font-bold" htmlFor="email">
            Seu E-mail:
          </label>
          <input
            className="p-4 block bg-blue-100 shadow my-2 rounded mx-auto"
            type="email"
            id="email"
            placeholder="Seu E-mail"
            onChange={onChange}
            name="email"
            value={form.email}
          />

          <label className="font-bold" htmlFor="phone">
            Celular:
          </label>
          <input
            className="p-4 block bg-blue-100 shadow my-2 rounded mx-auto"
            type="text"
            id="phone"
            placeholder="Seu celular"
            onChange={onChange}
            name="phone"
            value={form.phone}
          />

          <label className="font-bold">Nota:</label>
          <div className="flex py-6 w-32 m-auto">
            {notas.map((nota) => {
              return (
                <label
                  key={nota}
                  htmlFor={nota.toString()}
                  className="container"
                >
                  {nota} <br />
                  <input
                    type="radio"
                    name="nota"
                    value={nota}
                    id="nota"
                    onChange={onChange}
                  />
                </label>
              );
            })}
          </div>

          <button
            className="bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow my-10"
            onClick={save}
          >
            Enviar
          </button>
        </div>
      )}

      {success && (
        <div className="mx-auto">
          <p className="text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3">
            Obrigado por contribuir com sua sugestão ou crítica, foi muito
            importante.
          </p>
          {retorno?.showCoupon && (
            <div className="text-center border p-4">
              Seu Codigo promocional: <br />
              <span className="font-bold text-2xl">{retorno?.Cupom}</span>
            </div>
          )}

          {retorno?.showCoupon && (
            <div className="text-center border p-4 mb-4">
              <span className="font-bold">{retorno?.Promo}</span>
              <br />
              <span className="italic">
                Tire um print ou foto desta tela e apresente ao funcionário da
                loja.
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Pesquisa;
