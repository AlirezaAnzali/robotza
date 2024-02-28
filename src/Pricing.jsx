import Header from "./components/Header";
import Footer from "./components/Footer";
import Buy from "./components/Buy";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-indigo-100 dark:bg-black dark:text-white">
      <Header />
      <Buy />
      <Footer />
    </div>
  );
};

export default Pricing;
