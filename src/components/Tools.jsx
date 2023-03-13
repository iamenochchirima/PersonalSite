import React from "react";
import { tools } from "@/constants";

const Tools = () => {
  return (
    <div className="px-5 md:px-10">
      <h1 className="text-center text-white font-bold py-5 px-5 text-2xl">
        Tools and services I am currently skilled in and working with:
      </h1>
      <div className="grid grid-cols-5 mt-3 sm:grid-cols-5 xs:grid-cols-3">
        {tools.map((tool) => {
          return (
            <div
              key={tool.id}
              className="p-4 items-center rounded text-center m-2 bg-gray-900"
            >
              <center>
                {" "}
                <span className="text-2xl">{tool.icon}</span>
              </center>
              <span>{tool.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tools;
