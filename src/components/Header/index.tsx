import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="bg-gray-200 p-4 shadow-md">
        <div className="container mx-auto">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link href="/" passHref>
              <a>
                <Image
                  className="mx-auto"
                  src="/logo_box.png"
                  alt="Logo box"
                  width={150}
                  height={150}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 p-4 shadow-md text-center">
        <Link href="/">
          <a className="px-2 hover:underline">Home</a>
        </Link>

        <Link href="/sobre">
          <a className="px-2 hover:underline">Sobre</a>
        </Link>

        <Link href="/contato">
          <a className="px-2 hover:underline">Contato</a>
        </Link>

        <Link href="/pesquisa">
          <a className="px-2 hover:underline">Pesquisa</a>
        </Link>
      </div>
    </>
  );
};

export default Header;
