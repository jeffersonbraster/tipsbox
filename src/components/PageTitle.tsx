import Head from "next/head";

type HeadProps = {
  title: string;
};

const PageTitle = ({ title }: HeadProps) => {
  return (
    <Head>
      <title>Tips - {title}</title>
    </Head>
  );
};

export default PageTitle;
