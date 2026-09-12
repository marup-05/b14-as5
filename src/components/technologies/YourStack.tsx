import React from "react";
import type { Itechnology } from "../../types/technology";
import { FaTimes } from "react-icons/fa";

interface YourStackProps {
  selectedTechnologies: Itechnology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm mt-8">
      <div className="card-body">
        <h2 className="text-xl font-bold">Your Stack</h2>

        <p className="text-sm text-gray-400">
          {selectedTechnologies.length === 0
            ? "No technologies selected yet."
            : `${selectedTechnologies.length} Technology Selected`}
        </p>

        {/* Conditional Rendering */}
        {selectedTechnologies.length === 0 ? (
          <div className="border border-dashed border-gray-200 rounded-lg p-8 text-center mt-3">
            <p className="text-sm text-gray-400">Your stack is empty.</p>
          </div>
        ) : (
          <div className="space-y-3 mt-3">
            {selectedTechnologies.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center justify-between border border-base-200 rounded-lg p-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-8 h-8"
                  />

                  <div>
                    <h3 className="font-medium">{technology.name}</h3>

                    <p className="text-xs text-gray-400">
                      {technology.category}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onRemove(technology.id)}
                  className="text-gray-400"
                >
                  <FaTimes />
                </button>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={onRemoveAll}
          className="btn btn-outline btn-error w-full mt-5"
        >
          Remove All
        </button>
      </div>
    </div>
  );
};

export default YourStack;
