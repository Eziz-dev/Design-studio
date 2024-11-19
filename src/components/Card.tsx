import { FCard } from "./FeatureCard.tsx";
import { FC } from "react";


const Card: FC<FCard> = ({ img, alt, heading, paragraph }) => {
  return (
    <div className="card bg-slate-200 mx-5 lg:mx-3 w-fit my-3 shadow-xl">
      <figure>
        <img src={img} alt={alt} />
      </figure>
      <div className="card-body">
        <h2 className="text-red-700 font-bold text-2xl">{heading}</h2>
        <p className="text-slate-600 py-4">{paragraph}</p>
      </div>
    </div>
  );
};

export default Card;
