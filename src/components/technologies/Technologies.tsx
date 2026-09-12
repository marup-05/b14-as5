import React, { use, useState } from "react";
import type { Itechnology } from "../../types/technology";
import AvailableTechnologies from "./AvailableTechnologies";
import YourStack from "./YourStack";
import { toast } from "react-toastify";

interface TechnologiesProps {
  technologiesPromise: Promise<Itechnology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Itechnology[]
  >([]);

  console.log(technologies);

  return (
    <div>
      <div className="mb-5 pl-10">
        <h1 className="text-2xl md:text-3xl font-bold">
          Explore the <span className="text-pink-600">Technologies</span>
        </h1>

        <p className="mt-2 text-gray-500 text-1xl">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-3">
          <AvailableTechnologies
            technologies={technologies}
            selectedTechnologies={selectedTechnologies}
            onAdd={(technology) => {
              setSelectedTechnologies([...selectedTechnologies, technology]);

              toast.success(`${technology.name} added to your stack!`);
            }}
          />
        </div>

        <div className="col-span-1">
          <YourStack
            selectedTechnologies={selectedTechnologies}
            onRemove={(id) => {
              setSelectedTechnologies(
                selectedTechnologies.filter(
                  (technology) => technology.id !== id,
                ),
              );
            }}
            onRemoveAll={() => {
              setSelectedTechnologies([]);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
