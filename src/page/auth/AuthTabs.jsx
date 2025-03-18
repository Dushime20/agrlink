import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const AuthTabs = () => {
  const [authMode, setAuthMode] = useState("login");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
      <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold md:6xl">Welcome</h1>
            
        </div>
        <p className="font-medium text-center p-6"> Fill in text to get started Agrilink Rwanda app</p>
      
        <Tabs defaultValue="login" className="w-full">
          {/* Tab List */}
          <TabsList className="flex w-full justify-between text-green-700  p-1 rounded-lg">
            <TabsTrigger
              value="login"
              className="w-1/2 "
              onClick={() => setAuthMode("login")}
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="w-1/2 "
              onClick={() => setAuthMode("signup")}
            >
              Sign Up
            </TabsTrigger>
          </TabsList>

          {/* Login Form */}
          <TabsContent value="login">
            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-gray-700">Email</label>
                <Input type="email" placeholder="Enter your email" required />
              </div>

              <div>
                <label className="block text-gray-700">Password</label>
                <Input type="password" placeholder="Enter your password" required />
              </div>

              <Button className="w-full bg-green-600 text-white">Login</Button>
            </form>
          </TabsContent>

          {/* Signup Form */}
          <TabsContent value="signup">
            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-gray-700">Full Name</label>
                <Input type="text" placeholder="Enter your full name" required />
              </div>

              <div>
                <label className="block text-gray-700">Email</label>
                <Input type="email" placeholder="Enter your email" required />
              </div>

              <div>
                <label className="block text-gray-700">Password</label>
                <Input type="password" placeholder="Create a password" required />
              </div>

              <div>
                <label className="block text-gray-700">Confirm Password</label>
                <Input type="password" placeholder="Confirm your password" required />
              </div>

              <Button className="w-full bg-green-600 text-white">Sign Up</Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthTabs;
