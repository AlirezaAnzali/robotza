import logo from "../assets/img/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleDark } from "../store/dark-slice";
import { toggleMobileMenu } from "../store/mobileMenu-slice";

const Header = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.dark.isDarkMode);
  const isMobileMenuOpen = useSelector(
    (state) => state.mobileMenu.isMobileMenuOpen
  );
  const location = useLocation();

  const isLandingPage = location.pathname === "/";

  return (
    <header className="bg-violet-700 text-white sticky top-0 z-10">
      <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          {isLandingPage ? (
            <a href="#hero" className="flex items-center gap-2">
              <img src={logo} alt="Robotza Logo" className="w-7" /> Robotza
            </a>
          ) : (
            <Link to="/#hero" className="flex items-center gap-2">
              <img src={logo} alt="Robotza Logo" className="w-7" /> Robotza
            </Link>
          )}
        </h1>
        <div>
          <button
            id="theme-toggle-button"
            type="button"
            className="fixed bottom-6 right-6 w-12 h-12 dark:bg-violet-800 bg-violet-500 rounded-full flex justify-center items-center "
            aria-label="Toggle Dark Mode"
            onClick={() => dispatch(toggleDark())}
          >
            <span className="text-2xl">{darkMode ? "☀️" : "🌙"}</span>
          </button>
          {isMobileMenuOpen ? (
            <button
              id="hamburger-button"
              className="text-3xl md:hidden cursor-pointer relative w-8 h-8 toggle-btn"
              onClick={() => dispatch(toggleMobileMenu())}
            >
              <div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"></div>
            </button>
          ) : (
            <button
              id="hamburger-button"
              className="text-3xl md:hidden cursor-pointer relative w-8 h-8"
              onClick={() => dispatch(toggleMobileMenu())}
            >
              <div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"></div>
            </button>
          )}
          <nav className="hidden md:block space-x-8 text-xl" aria-label="Main">
            {isLandingPage ? (
              <>
                <a href="#robots" className="hover:opacity-90">
                  Our Robots
                </a>
                <a href="#testimonials" className="hover:opacity-90">
                  Testimonials
                </a>
                <a href="#contact" className="hover:opacity-90">
                  Contact
                </a>
              </>
            ) : null}
            {isLandingPage ? (
              <Link to="/buy" className="hover:opacity-90">
                Buy Now
              </Link>
            ) : (
              <Link to="/" className="hover:opacity-90">
                Back to Home
              </Link>
            )}
          </nav>
        </div>
      </section>
      {isMobileMenuOpen && (
        <section
          className="absolute top-68 bg-indigo-100 dark:bg-black text-slate-700 dark:text-white w-full text-4xl flex flex-col justify-center origin-top animate-open-menu"
          id="mobile-menu"
          onClick={() => dispatch(toggleMobileMenu())}
        >
          <nav
            className="flex flex-col min-h-screen items-center py-8"
            aria-label="mobile"
          >
            {isLandingPage ? (
              <a
                href="#hero"
                className="w-full text-center my-6 hover:opacity-90"
              >
                Home
              </a>
            ) : null}
            {isLandingPage ? (
              <a
                href="#robots"
                className="w-full text-center my-6 hover:opacity-90"
              >
                Our Robots
              </a>
            ) : null}
            {isLandingPage ? (
              <a
                href="#testimonials"
                className="w-full text-center my-6 hover:opacity-90"
              >
                Testimonials
              </a>
            ) : null}
            {isLandingPage ? (
              <a
                href="#contact"
                className="w-full text-center my-6 hover:opacity-90"
              >
                Contact Us
              </a>
            ) : null}
            {isLandingPage ? (
              <Link
                to="/buy"
                className="w-full text-center my-6 hover:opacity-90"
              >
                Buy
              </Link>
            ) : (
              <Link to="/" className="w-full text-center my-6 hover:opacity-90">
                Back to Home
              </Link>
            )}
            <a
              href="#footer"
              className="w-full text-center my-6 hover:opacity-90"
            >
              Legal
            </a>
          </nav>
        </section>
      )}
    </header>
  );
};

export default Header;
