const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height"
    >
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
        Testimonials
      </h2>
      <figure className="my-12">
        <blockquote className="bg-violet-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
          <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['“'] after:content-['”'] before:font-serif before:absolute before:-top-0 before:-left-0 after:font-serif after:absolute after:-bottom-20 after:-right-0 before:text-9xl after:text-9xl before:text-white after:text-white before:transform after:transform before:translate-x-2 after:-translate-x-2 before:translate-y-2 after:-translate-y-2 before:opacity-25 after:opacity-25">
            Robotza has always been there for me. Their RoboBuddy robot arrived
            in a wooden crate as expected. Life-long customer! A++ shopping
            experience.
          </p>
        </blockquote>
        <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
          &#8212;Wile E. Coyote, Genius
        </figcaption>
      </figure>
      <figure className="my-12">
        <blockquote className="bg-violet-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
          <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['“'] after:content-['”'] before:font-serif before:absolute before:-top-0 before:-left-0 after:font-serif after:absolute after:-bottom-20 after:-right-0 before:text-9xl after:text-9xl before:text-white after:text-white before:transform after:transform before:translate-x-2 after:-translate-x-2 before:translate-y-2 after:-translate-y-2 before:opacity-25 after:opacity-25">
            The Robotza's TechnoBot has outsmarted my efforts with the the
            Nova-Core Disruptor time and time again.{" "}
            <span className="italic">This fills me with frustration!</span>{" "}
            Nonetheless, K-9 and I have granted Robotza the contract for
            interstellar robotics, impressed by their innovation and robust
            engineering.
          </p>
        </blockquote>
        <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
          &#8212;Marvin The Martian &amp; K-9
        </figcaption>
      </figure>
      <figure className="my-12">
        <blockquote className="bg-violet-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
          <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['“'] after:content-['”'] before:font-serif before:absolute before:-top-0 before:-left-0 after:font-serif after:absolute after:-bottom-20 after:-right-0 before:text-9xl after:text-9xl before:text-white after:text-white before:transform after:transform before:translate-x-2 after:-translate-x-2 before:translate-y-2 after:-translate-y-2 before:opacity-25 after:opacity-25">
            I knew I not only wanted &#8212;{" "}
            <span className="italic">I needed</span> &#8212; Robotza's SteelPal
            Robot for my adventure in the unknown. Robotza delivered in one day!
            Nothing says <q className="italic">Take me to your leader</q> like
            Robotza's SteelPal Robot! 💯
          </p>
        </blockquote>
        <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
          &#8212;Buzz Lightyear
        </figcaption>
      </figure>
    </section>
  );
};

export default Testimonials;
