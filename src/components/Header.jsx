const Header = (toggleTheme) => {
  return (
    <header className="bg-violet-700 text-white sticky top-0 z-10">
      <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          <a href="#hero">🤖 Robotza</a>
        </h1>
        <div>
          <button
            id="theme-toggle-button"
            type="button"
            className="fixed bottom-6 right-6 w-12 h-12 bg-gray-300 rounded-full text-black"
            aria-label="Toggle Dark Mode"
            onClick={toggleTheme}
          >
            <span className="text-2xl">&#9728;</span>
          </button>
          <button
            id="hamburger-button"
            className="text-3xl md:hidden cursor-pointer relative w-8 h-8"
          >
            <div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"></div>
          </button>
          <nav className="hidden md:block space-x-8 text-xl" aria-label="Main">
            <a href="#robots" className="hover:opacity-90">
              Our Robots
            </a>
            <a href="#testimonials" className="hover:opacity-90">
              Testimonials
            </a>
            <a href="#contact" className="hover:opacity-90">
              Contact
            </a>
          </nav>
        </div>
      </section>
      <section
        className="absolute top-68 bg-black w-full text-4xl hidden flex-col justify-center origin-top animate-open-menu"
        id="mobile-menu"
      >
        <nav
          className="flex flex-col min-h-screen items-center py-8"
          aria-label="mobile"
        >
          <a href="#hero" className="w-full text-center my-6 hover:opacity-90">
            Home
          </a>
          <a
            href="#robots"
            className="w-full text-center my-6 hover:opacity-90"
          >
            Our Robots
          </a>
          <a
            href="#testimonials"
            className="w-full text-center my-6 hover:opacity-90"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="w-full text-center my-6 hover:opacity-90"
          >
            Contact Us
          </a>
          <a
            href="#footer"
            className="w-full text-center my-6 hover:opacity-90"
          >
            Legal
          </a>
        </nav>
      </section>
    </header>
  );
};

export default Header;
