import FeatureCard from "../components/FeatureCard.tsx";
import {loremText} from "../constants";

const FeaturesAndServices = () => {

  return (
    <section className="flex flex-wrap bg-gradient-to-r from-purple-500 to-white justify-center text-center">
      <h1 className="w-full text-red-700 text-2xl lg:text-5xl font-bold my-10">
        Our Features & Services
      </h1>
      <div className="grid grid-rows-1 grid-cols-1 lg:grid-rows-2 lg:grid-cols-3 mx-5">
        <FeatureCard
          img="/src/assets/0301.jpg"
          alt="no coding"
          heading="no coding"
          paragraph={loremText}
        />
        <FeatureCard
          img="/src/assets/0302.jpg"
          alt="seo optimization"
          heading="seo optimization"
          paragraph={loremText}
        />
        <FeatureCard
          img="/src/assets/0303.jpg"
          alt="cloud solutions"
          heading="cloud solutions"
          paragraph={loremText}
        />
        <FeatureCard
          img="/src/assets/0304.jpg"
          alt="happy customers"
          heading="happy customers"
          paragraph={loremText}
        />
        <FeatureCard
          img="/src/assets/0305.jpg"
          alt="get set up fast"
          heading="get set up fast"
          paragraph={loremText}
        />
        <FeatureCard
          img="/src/assets/0306.jpg"
          alt="top rating"
          heading="top rating"
          paragraph={loremText}
        />
      </div>
    </section>
  );
};

export default FeaturesAndServices;
