import { useState } from "react";

export default function App({addOns, setAddOns, billing, setBilling}) {
  
  const addOnOptions = [
    {
      id: 1,
      key: "onlineservice",
      name: "Online service",
      description: "Access to multiplayer games",
      price: {
        monthly: 1,
        yearly: 10,
      },
    },
    {
      id: 2,
      key: "largestorage",
      name: "Large storage",
      description: "Extra 1TB of cloud save",
      price: {
        monthly: 2,
        yearly: 20,
      },
    },
    {
      id: 3,
      key: "gamelibrary",
      name: "Game library",
      description: "Access to a vast library of games",
      price: {
        monthly: 2,
        yearly: 20,
      },
    },
  ];

  return (
    <div className="flex flex-col absolute top-25 right-15 bg-white rounded-lg p-7 pb-12 w-3/4 shadow-md">
      <h2 className="text-2xl font-bold">
        Pick Add Ons
      </h2>

      <p className="font-light">
        Add Ons help advance your gaming experience
      </p>

      <div className="mt-4">
        {addOnOptions.map((option) => (
          <div
            key={option.id}
            className={`flex items-center gap-3 w-full justify-around p-2 border rounded-lg mb-3 cursor-pointer ${
              addOns[option.key]
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300"
            }`}
          >
            <input
              type="checkbox"
              checked={addOns[option.key]}
              onChange={(e) =>
                setAddOns({
                  ...addOns,
                  [option.key]: e.target.checked,
                })
              }
              className="w-4 h-4"
            />

            <div className="ms-4 flex-1">
              <p>{option.name}</p>

              <p className="text-xs text-gray-500">
                {option.description}
              </p>
            </div>

            <p className="text-xs">
              +$
              {billing === "Monthly"
                ? option.price.monthly
                : option.price.yearly}
              /
              {billing === "Monthly"
                ? "mo"
                : "yr"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}