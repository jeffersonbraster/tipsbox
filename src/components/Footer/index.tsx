const Footer = () => {
  return (
    <div className="bg-gray-700 p-4 bottom-0 ">
      <div className="container mx-auto text-center font-bold text-white">
        Projeto desenvolvido por{" "}
        <a
          className="hover:underline"
          href="https://www.jeffersonbrandao.com.br"
          target="_blank"
          rel="noreferrer"
        >
          Jefferson
        </a>{" "}
        /{" "}
        <a
          className="hover:underline"
          href="https://www.linkedin.com/in/jefferson-brandao-dev/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
};

export default Footer;
