
import React from 'react';

const DALLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="bg-dal-navy text-white font-bold py-2 px-3 rounded-lg">
        <span className="text-xl">DAL</span>
      </div>
      <div className="ml-2">
        <h1 className="font-bold text-dal-navy text-xl">Dhundho Apna Lawyer</h1>
      </div>
    </div>
  );
};

export default DALLogo;
