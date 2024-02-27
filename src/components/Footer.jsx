const Footer = () => {
  return (
    <footer id="footer" className="bg-violet-700 text-white text-xl">
      <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
        <address>
          <h2>Robotza Robotics-Powered Products, Inc.</h2>
          123 Imaginary Street
          <br />
          Fantasy City, Wonderland 12345-5555
          <br />
          Email:{" "}
          <a href="mailto:inquiries@robotza.com">inquiries@robotza.com</a>
          <br />
          Phone: <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
        <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
          <a href="#robots" className="hover:opacity-90">
            Our Robots
          </a>
          <a href="#testimonials" className="hover:opacity-90">
            Testimonials
          </a>
          <a href="#contact" className="hover:opacity-90">
            Contact Us
          </a>
        </nav>
        <div className="flex flex-col sm:gap-2">
          <p className="text-right">
            Copyright &copy; <span id="year">2024</span>
          </p>
          <p className="text-right">All rights reserved.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
