
import React from 'react';
import DALLogo from './DALLogo';

const SignupHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center mb-8">
      <DALLogo className="mb-4" />
      <h2 className="text-dal-grey text-center text-lg mb-8">
        Find Your Lawyer | Grow Your Legal Practice
      </h2>
    </div>
  );
};

export default SignupHeader;
