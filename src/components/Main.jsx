import Hero from "./Hero";
import Robots from "./Robots";
import Testimonials from "./Testimonials";

const Main = () => {
  return (
    <main className="max-w-4xl mx-auto">
      <Hero />

      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <Robots />

      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <Testimonials />

      <hr className="mx-auto bg-black dark:bg-white w-1/2" />
    </main>
  );
};

export default Main;
