import React from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Itechnology } from "../../types/technology";
import { FaRegStar } from "react-icons/fa";

interface AvailableTechnologiesProps {
  technologies: Itechnology[];
  selectedTechnologies: Itechnology[];

  setSelectedTechnologies: Dispatch<SetStateAction<Itechnology[]>>;

  onAdd: (technology: Itechnology) => void;
}

const AvailableTechnologies = ({
  technologies,
  selectedTechnologies,
  setSelectedTechnologies,
  onAdd,
}: AvailableTechnologiesProps) => {
  console.log(technologies, "technology from available technology");

  return (
    <div className="pl-10 grid grid-cols-3 gap-5 mt-7">
      {technologies.map((technology: Itechnology) => {
        const isAdded = selectedTechnologies.some(
          (selectedTechnology) => selectedTechnology.id === technology.id,
        );

        return (
          <div
            key={technology.id}
            className={`card bg-base-100 border shadow-sm ${
              isAdded ? "border-pink-500" : "border-base-200"
            }`}
          >
            <div className="card-body">
              <div className="flex justify-between items-center">
                <img src={technology.icon} alt="" className="w-8 h-8" />

                <div className="badge badge-info">{technology.badge}</div>
              </div>

              <h2 className="card-title">{technology.name}</h2>

              <p>{technology.description}</p>

              <div className="flex justify-between items-center text-sm">
                <span className="badge badge-ghost">{technology.category}</span>

                <span>{technology.difficulty}</span>

                <div className="flex items-center gap-1">
                  <FaRegStar />
                  <span>{technology.rating}</span>
                </div>
              </div>

              <div className="card-actions">
                <button
                  onClick={() => {
                    setSelectedTechnologies([
                      ...selectedTechnologies,
                      technology,
                    ]);

                    onAdd(technology);
                  }}
                  disabled={isAdded}
                  className={`btn w-full ${
                    isAdded
                      ? "btn-disabled border-pink-200 text-pink-500"
                      : "btn-neutral"
                  }`}
                >
                  {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AvailableTechnologies;
