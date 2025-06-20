import React from "react";

const SkillIcon = ({ name, logo }) => {
  return (
    <div className="bg-slate-800 rounded-xl shadow-md p-4 flex flex-col items-center justify-center h-full">
      <img
        src={logo}
        alt={`${name} logo`}
        className="w-8 h-8 object-contain mb-2"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/48"; // fallback icon
        }}
      />
      <p className="text-sm font-semibold text-white">{name}</p>
    </div>
  );
};

export default SkillIcon;
