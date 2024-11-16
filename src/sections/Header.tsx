import Button from "../components/Button.tsx";

const Header = () => {
  return (
    <section className="flex flex-wrap bg-gradient-to-r from-purple-500 to-white">
      <img src="/src/assets/01.png" className="w-full lg:w-1/2" alt="logo" />
      <div className="w-full lg:w-1/2 px-5 lg:pl-16">
        <div className="bg-purple-900 w-1/5 h-2 rounded-full"></div>
        <h1 className="w-1/2 font-medium text-8xl text-purple-900 pt-5">
          Design Studio
        </h1>
        <p className="text-black py-5 lg:pr-32 mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          distinctio, eos, et facere hic inventore, magni molestias non
          perspiciatis provident quis sequi tenetur ut vero voluptatem. Aliquam
          praesentium quia temporibus!
        </p>
        <Button name={"contact us"} />
      </div>
    </section>
  );
};

export default Header;
