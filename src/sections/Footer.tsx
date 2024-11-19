import { loremText } from "../constants";
import Button from "../components/Button.tsx";

const Footer = () => {
  return (
    <footer className="container-xl mx-auto flex flex-col md:flex-row items-center justify-center flex-wrap bg-white">
      <div className="lg:w-1/2 rounded-xl">
        <img src="/src/assets/04.jpg" alt="4" className="rounded-xl p-5" />
        <h3 className="text-2xl font-bold text-purple-700 px-5 py-2">
          Brand, experiences and radical collaboration
        </h3>
        <p className="text-slate-600 px-5 py-4">{loremText}{loremText}</p>
      </div>

      <div className="lg:w-1/2 items-center">
        <div className="bg-[#EDEBE7] px-7 py-4">
          <img
            src="/src/assets/d6b6d2d0-8aa5-4f9f-8758-94efba3bae55.webp"
            alt="color"
            width={100}
          />
          <h3 className="text-xl text-purple-700 font-bold py-3">
            Creating the world`s first community driven superbrand.
          </h3>
          <p className="text-slate-600 mb-4">
            {loremText}
            {loremText}
            {loremText}
          </p>
        </div>

        <div className="bg-[#EDEBE7] px-7 my-5">
          <h3 className="text-xl text-purple-700 font-bold py-5">Translating 100 years of service into a digital future</h3>
          <p className="text-slate-600 mb-16">{loremText}{loremText}</p>
          <Button name="contact us" className=""/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
