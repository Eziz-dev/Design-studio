import Button from "../components/Button.tsx";

const Header = () => {
  return (
    <section className="flex flex-wrap bg-gradient-to-r from-purple-500 to-white">
      <img src="/src/assets/01.png" className="w-full h-full lg:w-1/2" alt="logo" />
      <div className="w-full lg:w-1/2 px-5 lg:pl-16">
        <div className="bg-purple-900 w-1/5 h-2 rounded-full"></div>
        <h1 className="w-1/2 font-medium text-5xl lg:text-8xl text-purple-900 pt-5">
          Design Studio
        </h1>
        <p className="text-slate-800 py-5 mb-5">
          Welcome to our design studio, where creativity and innovation converge
          to bring your visions to life. Our team of talented designers is
          dedicated to transforming your ideas into stunning visual realities,
          whether it's through graphic design, interior decor, or branding. We
          pride ourselves on our collaborative approach, working closely with
          you to understand your needs and exceed your expectations.Explore the
          possibilities with us and let your imagination take flight. At our
          studio, your vision is our inspiration.
        </p>
        <Button name={"contact us"} />
      </div>
    </section>
  );
};

export default Header;
