"use client";

import Login from "@/components/authComponents/Login";
import ProfileCard from "@/components/authComponents/ProfileCard";
import useAuth from "@/context/useAuth";

const Home = () => {
  const { authStatus } = useAuth();
  return (
    <div className="w-full px-8 mx-auto max-w-7xl">
      <div className="flex flex-wrap mt-32 -mx-2 gap-y-8">
        <div className="flex flex-wrap items-center justify-center w-full px-2 sm:w-1/2">
          <div className="relative flex flex-wrap justify-center w-full text-center">
            <div className="w-full max-w-[100px]">
              <img src="/favicon.ico" alt="Logo" />
            </div>
            <div className="w-full">
              <h1 className="mb-4 text-3xl font-bold text-white">
                Trello App developed with NextJS 14 and{" "}
                <span className="text-primary">Appwrite</span>
              </h1>
              <p className="text-white/60">
                Integration of secure user authentication using Appwrite, an
                open-source backend server.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-end w-full px-2 sm:w-1/2">
          {authStatus ? (
            <div className="max-w-md">
              <ProfileCard />
            </div>
          ) : (
            <Login />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
