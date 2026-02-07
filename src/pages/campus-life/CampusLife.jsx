import React from "react";
import CampusLifeActivities from "../../Component/CampusLife/CampusLifeActivities";


const CampusLife = () => {
  return (
    <div>
      <div className="bg-red-700">
        <img
        className="w-full"
          src="https://i.ibb.co.com/tMb27jjL/The-Importance-of-Time-Management-for-Workplace-Leaders.png"
          alt=""
        />
      </div>
      <CampusLifeActivities></CampusLifeActivities>
    </div>
  );
};

export default CampusLife;
