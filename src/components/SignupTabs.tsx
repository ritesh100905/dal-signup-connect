
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserSignupForm from './UserSignupForm';
import LawyerSignupForm from './LawyerSignupForm';

const SignupTabs: React.FC = () => {
  return (
    <Tabs defaultValue="user" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger 
          value="user" 
          className="py-3 data-[state=active]:bg-dal-navy data-[state=active]:text-white"
        >
          User Registration
        </TabsTrigger>
        <TabsTrigger 
          value="lawyer" 
          className="py-3 data-[state=active]:bg-dal-navy data-[state=active]:text-white"
        >
          Lawyer Registration
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="user" className="mt-0">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <UserSignupForm />
          </div>
          <div className="w-full md:w-1/3 bg-dal-lightgrey rounded-lg p-6">
            <h3 className="text-dal-navy font-bold text-lg mb-4">Benefits for Users</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-dal-navy text-white p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                <span>Find verified lawyers easily</span>
              </li>
              <li className="flex items-start">
                <span className="bg-dal-navy text-white p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                <span>Compare fees and expertise</span>
              </li>
              <li className="flex items-start">
                <span className="bg-dal-navy text-white p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                <span>Book consultations online</span>
              </li>
              <li className="flex items-start">
                <span className="bg-dal-navy text-white p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                <span>Read verified reviews</span>
              </li>
            </ul>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="lawyer" className="mt-0">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <LawyerSignupForm />
          </div>
          <div className="w-full md:w-1/3 bg-dal-lightgrey rounded-lg p-6">
            <h3 className="text-dal-navy font-bold text-lg mb-4">Benefits for Lawyers</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-dal-navy text-white p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                <span>Grow your legal practice online</span>
              </li>
              <li className="flex items-start">
                <span className="bg-dal-navy text-white p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                <span>Receive targeted client inquiries</span>
              </li>
              <li className="flex items-start">
                <span className="bg-dal-navy text-white p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                <span>Manage appointments efficiently</span>
              </li>
              <li className="flex items-start">
                <span className="bg-dal-navy text-white p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                <span>Build your professional reputation</span>
              </li>
            </ul>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default SignupTabs;
