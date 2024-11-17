import Button from "../components/Button.tsx";

const WhatWeDo = () => {
  return (
    <section className="flex flex-wrap bg-white items-center justify-center text-center">
      <div className="lg:basis-1/3">
        <h1 className="text-3xl lg:text-5xl font-bold text-red-600 mt-10">What we do</h1>
        <p className="text-start text-slate-600 p-9">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          dolorum est et, ipsa obcaecati officia perferendis praesentium totam
          vel! Aspernatur assumenda cupiditate facere labore nam nemo temporibus
          ullam unde veritatis!
        </p>
          <div className="flex ml-9">
              <Button name="read more" />
          </div>
      </div>
      <div className="lg:basis-2/3 my-5">
        <img src="/src/assets/02.png" alt="second image" />
      </div>
    </section>
  );
};

export default WhatWeDo;
