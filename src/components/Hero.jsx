import RobotHumanImg from "../assets/img/RobotHuman.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height"
    >
      <article className="sm:w-1/2">
        <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
          We Boldly Go{" "}
          <span className="text-indigo-700 dark:text-indigo-300">
            To New Frontiers...
          </span>
        </h2>
        <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
          We are building robots to pioneer the next century today. From homes
          to workplaces, advancing innovation...
        </p>
        <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
          Think Robotza.
        </p>
      </article>
      <img src={RobotHumanImg} alt="Robot Human" className="w-1/2" />
    </section>
  );
};

export default Hero;
