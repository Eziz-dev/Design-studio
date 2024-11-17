import { FC } from "react";

interface FCard {
  img: string;
  alt: string;
  heading: string;
  paragraph: string;
}

const FeatureCard: FC<FCard> = ({ img, alt, heading, paragraph }) => {
  return (
    <div className="card bg-white mx-5 lg:mx-3 w-fit my-3 shadow-xl">
      <figure>
        <img src={img} alt={alt} />
      </figure>
      <div className="card-body">
        <h2 className="text-red-700 font-bold text-2xl uppercase">{heading}</h2>
        <p className="text-slate-600 py-4">{paragraph}</p>
        <div className="card-actions justify-center">
          <button className="border-red-700 border-2 rounded-lg px-7 py-1.5 text-red-700 font-bold hover:bg-red-200">
            more
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
