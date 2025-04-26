
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Mail, Eye, EyeOff, User, Users } from "lucide-react";

const LawyerSignupForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-xl font-bold text-dal-navy mb-6">Lawyer Registration</h3>
      
      <form className="space-y-4">
        <div>
          <Label htmlFor="lawyerFullName" className="dal-label">Full Name</Label>
          <div className="relative">
            <Input 
              id="lawyerFullName" 
              placeholder="Enter your full name" 
              className="dal-input pl-10" 
            />
            <User className="absolute left-3 top-3 h-5 w-5 text-dal-grey" />
          </div>
        </div>
        
        <div>
          <Label htmlFor="lawyerMobileNumber" className="dal-label">Mobile Number</Label>
          <div className="flex gap-2">
            <Input 
              id="lawyerMobileNumber" 
              type="tel" 
              placeholder="Enter your mobile number" 
              className="dal-input" 
            />
            <Button type="button" variant="outline" className="shrink-0">
              Get OTP
            </Button>
          </div>
        </div>
        
        <div>
          <Label htmlFor="lawyerOtp" className="dal-label">OTP Verification</Label>
          <Input 
            id="lawyerOtp" 
            placeholder="Enter OTP" 
            className="dal-input" 
          />
        </div>
        
        <div>
          <Label htmlFor="lawyerEmail" className="dal-label">Email Address</Label>
          <div className="relative">
            <Input 
              id="lawyerEmail" 
              type="email" 
              placeholder="Enter your email address" 
              className="dal-input pl-10" 
              required 
            />
            <Mail className="absolute left-3 top-3 h-5 w-5 text-dal-grey" />
          </div>
        </div>
        
        <div>
          <Label htmlFor="barNumber" className="dal-label">Bar Council Registration Number</Label>
          <Input 
            id="barNumber" 
            placeholder="Enter your bar council registration number" 
            className="dal-input" 
            required 
          />
        </div>
        
        <div>
          <Label htmlFor="practicingCourts" className="dal-label">Practicing Courts</Label>
          <Select>
            <SelectTrigger className="dal-input">
              <SelectValue placeholder="Select practicing courts" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="district">District Court</SelectItem>
              <SelectItem value="high">High Court</SelectItem>
              <SelectItem value="supreme">Supreme Court</SelectItem>
              <SelectItem value="multiple">Multiple Courts</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="specialization" className="dal-label">Specialization Areas</Label>
          <Select>
            <SelectTrigger className="dal-input">
              <SelectValue placeholder="Select specialization areas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="criminal">Criminal Law</SelectItem>
              <SelectItem value="civil">Civil Law</SelectItem>
              <SelectItem value="corporate">Corporate Law</SelectItem>
              <SelectItem value="family">Family Law</SelectItem>
              <SelectItem value="property">Property Law</SelectItem>
              <SelectItem value="tax">Tax Law</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-dal-grey mt-1">You can select multiple specializations after registration</p>
        </div>
        
        <div>
          <Label htmlFor="experience" className="dal-label">Years of Experience</Label>
          <Select>
            <SelectTrigger className="dal-input">
              <SelectValue placeholder="Select years of experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-2">0-2 years</SelectItem>
              <SelectItem value="3-5">3-5 years</SelectItem>
              <SelectItem value="6-10">6-10 years</SelectItem>
              <SelectItem value="11-15">11-15 years</SelectItem>
              <SelectItem value="15+">15+ years</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="consultationFee" className="dal-label">Consultation Fee (₹) (Optional)</Label>
          <Input 
            id="consultationFee" 
            type="number" 
            placeholder="Enter your consultation fee" 
            className="dal-input" 
          />
          <p className="text-xs text-dal-grey mt-1">You can update this later</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="lawyerCity" className="dal-label">City</Label>
            <Select>
              <SelectTrigger className="dal-input">
                <SelectValue placeholder="Select your city" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="kolkata">Kolkata</SelectItem>
                <SelectItem value="chennai">Chennai</SelectItem>
                <SelectItem value="hyderabad">Hyderabad</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="lawyerState" className="dal-label">State</Label>
            <Select>
              <SelectTrigger className="dal-input">
                <SelectValue placeholder="Select your state" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="maharashtra">Maharashtra</SelectItem>
                <SelectItem value="karnataka">Karnataka</SelectItem>
                <SelectItem value="westbengal">West Bengal</SelectItem>
                <SelectItem value="tamilnadu">Tamil Nadu</SelectItem>
                <SelectItem value="telangana">Telangana</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div>
          <Label htmlFor="lawyerPassword" className="dal-label">Password</Label>
          <div className="relative">
            <Input 
              id="lawyerPassword" 
              type={showPassword ? "text" : "password"} 
              placeholder="Create a password" 
              className="dal-input" 
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)} 
              className="absolute right-3 top-3"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-dal-grey" />
              ) : (
                <Eye className="h-5 w-5 text-dal-grey" />
              )}
            </button>
          </div>
        </div>
        
        <div>
          <Label htmlFor="lawyerConfirmPassword" className="dal-label">Confirm Password</Label>
          <div className="relative">
            <Input 
              id="lawyerConfirmPassword" 
              type={showConfirmPassword ? "text" : "password"} 
              placeholder="Confirm your password" 
              className="dal-input" 
            />
            <button 
              type="button" 
              onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
              className="absolute right-3 top-3"
            >
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5 text-dal-grey" />
              ) : (
                <Eye className="h-5 w-5 text-dal-grey" />
              )}
            </button>
          </div>
        </div>
        
        <div>
          <Label htmlFor="idProof" className="dal-label">Upload Bar Council ID Proof</Label>
          <Input 
            id="idProof" 
            type="file" 
            accept="image/*" 
            className="dal-input cursor-pointer" 
          />
          <p className="text-xs text-dal-grey mt-1">Upload a clear image of your Bar Council ID</p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox id="lawyerTerms" />
          <label
            htmlFor="lawyerTerms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to the <a href="#" className="text-dal-navy underline">Terms of Service</a> and <a href="#" className="text-dal-navy underline">Privacy Policy</a>
          </label>
        </div>
        
        <Button type="submit" className="dal-btn-primary">
          Register as Lawyer
        </Button>
        
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <button type="button" className="dal-social-btn">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span>Google</span>
          </button>
          <button type="button" className="dal-social-btn">
            <Linkedin className="h-5 w-5 text-blue-600" />
            <span>LinkedIn</span>
          </button>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="#" className="font-medium text-dal-navy hover:underline">
              Login here
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LawyerSignupForm;
