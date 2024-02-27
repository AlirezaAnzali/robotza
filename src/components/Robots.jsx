import HelperRobotImg from "../assets/img/affor.png";
import RoboWomanImg from "../assets/img/RoboWoman.png";
import RoboManImg from "../assets/img/RoboMan.png";

const Robots = () => {
  return (
    <section
      id="robots"
      className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
    >
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
        Our Robots
      </h2>
      <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
        <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl">
          <img src={HelperRobotImg} alt="Helper robot" className="w-1/2 mb-6" />
          <h3 className="text-3xl text-center text-slate-900 dark:text-white">
            RoboBuddy
          </h3>
          <p className="hidden sm:block text-3xl text-center text-slate-500 dark:text-slate-400">
            $
          </p>
          <p className="sm:hidden text-2xl mt-2 text-center text-slate-500 dark:text-slate-400">
            Affordable Helper
          </p>
        </li>
        <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl">
          <img src={RoboWomanImg} alt="Robot Woman" className="w-1/2 mb-6" />
          <h3 className="text-3xl text-center text-slate-900 dark:text-white">
            TechnoBot
          </h3>
          <p className="hidden sm:block text-3xl text-center text-slate-500 dark:text-slate-400">
            $$
          </p>
          <p className="sm:hidden text-2xl mt-2 text-center text-slate-500 dark:text-slate-400">
            Best Selling Robot!
          </p>
        </li>
        <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl">
          <img src={RoboManImg} alt="Robot man" className="w-1/2 mb-6" />
          <h3 className="text-3xl text-center text-slate-900 dark:text-white">
            SteelPal
          </h3>
          <p className="hidden sm:block text-3xl text-center text-slate-500 dark:text-slate-400">
            $$$
          </p>
          <p className="sm:hidden text-2xl mt-2 text-center text-slate-500 dark:text-slate-400">
            Luxury Technology
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Robots;
