import Footer from "../Footer";
import Header from "../Header";

type props = {
  children: React.ReactChildren | React.ReactChild;
};

const Layout = ({ children }: props) => {
  return (
    <div>
      <Header />
      <div className="container mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
