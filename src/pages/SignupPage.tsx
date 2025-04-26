
import React from 'react';
import SignupHeader from '@/components/SignupHeader';
import SignupTabs from '@/components/SignupTabs';

const SignupPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <SignupHeader />
        <SignupTabs />
      </div>
    </div>
  );
};

export default SignupPage;
