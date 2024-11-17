import HiwCard from "../components/HIWCard.tsx";

const HowItWorks = () => {
  return (
    <section className="flex flex-wrap bg-gradient-to-r from-[#c6c8f8] to-[#f7e3ef]">
      <h1 className="text-3xl lg:text-6xl w-full text-center font-bold text-pink-600 mt-10 mx-auto">
        How it works
      </h1>
      <p className="w-full text-lg lg:text-2xl text-gray-600 text-center px-5 lg:px-0 mx-auto my-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est illo,
        maxime. Et!
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 mx-4 lg:mx-7">
        <HiwCard number="1" heading="Share your designs" />
        <HiwCard number="2" heading="Development"/>
        <HiwCard number="3" heading="Provide feedback"/>
        <HiwCard number="4" heading="Launch website"/>
      </div>
    </section>
  );
};

export default HowItWorks;
