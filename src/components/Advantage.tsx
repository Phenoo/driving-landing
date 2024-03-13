import React from "react";

const Advantage = () => {
  return (
    <div className="min-h-screen hero">
      <div className=" min-h-screen p-4 bg-black/80 text-white w-full h-full py-16 flex flex-col justify-center">
        <div className="max-w-6xl  w-full  mx-auto h-full grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
          <div className="space-y-4">
            <h4 className="text-xl md:text-3xl lg:text-5xl font-semibold">
              The GM Training Advantage
            </h4>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              suscipit expedita magnam perspiciatis officiis corrupti
            </p>
            <br />
            <div>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div>
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold">
                      Proper training solutions
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nam labore exercitationem totam impedit possimus esse.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div>
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold">
                      Overview & Specifications of the ability
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nam labore exercitationem totam impedit possimus esse.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div>
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold">
                      Quality Instructors and Trainers
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nam labore exercitationem totam impedit possimus esse.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
