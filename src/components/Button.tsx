type ButtonProps = {
  name: string;
  className?: string;
}

const Button = ({ name }: ButtonProps) => {
  return (
    <button className="text-white bg-purple-800 hover:bg-purple-900 rounded-lg px-5 py-2 mb-10">
      {name}
    </button>
  );
};

export default Button;
