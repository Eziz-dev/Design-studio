interface Card {
  number: string;
  heading: string;
}

const HiwCard = ({ number, heading }: Card) => {
  return (
    <div className="card bg-white mx-1 shadow-xl mb-6 lg:mb-16">
      <div className="card-body">
        <div className="flex justify-center items-center rounded-full bg-red-200 w-14 h-14 text-center text-xl font-bold text-red-600">
          {number}
        </div>
        <h2 className="card-title text-red-700 pt-2 ">{heading}</h2>
        <p className="text-gray-500 italic py-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          blanditiis fuga illo nam quia tenetur vel! Delectus doloremque
          expedita explicabo inventore iure modi, molestiae voluptatum.
          Consequuntur ducimus ipsa odio totam.
        </p>
        <div className="card-actions justify-start">
          <button className="border-red-700 border-2 rounded-lg px-7 py-1.5 text-red-700 font-bold hover:bg-red-200">
            more
          </button>
        </div>
      </div>
    </div>
  );
};

export default HiwCard;
