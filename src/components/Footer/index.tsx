const Footer = () => {
  return (
    <div className="bg-gray-700 p-4">
      <div className="container mx-auto text-center font-bold text-white">
        Projeto desenvolvido por{" "}
        <a className="hover:underline" href="jeffersonbrandao.com.br">
          Jefferson
        </a>{" "}
        /{" "}
        <a
          className="hover:underline"
          href="https://www.linkedin.com/in/jefferson-brandao-dev/"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
};

export default Footer;
