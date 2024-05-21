"use client";
import appwriteService from "@/appwrite/config";
import { Models } from "appwrite";
import Link from "next/link";
import { useEffect, useState } from "react";
import Avatar from "./Avatar";

const ProfileCard = () => {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
    null
  );

  useEffect(() => {
    (async () => {
      const userData = await appwriteService.getCurrentUser();
      if (userData) {
        setUser(userData);
      }
    })();
  }, []);

  return (
    user && (
      <>
        <div className="flex flex-wrap gap-y-6">
          <div className="flex items-center w-full gap-x-4">
            <div className="w-20 shrink-0">
              <Avatar img="https://img.freepik.com/vecteurs-premium/dessin-anime-mignon-bebe-ornithorynque-posant_188253-3359.jpg?w=826" />
            </div>
            <div className="relative">
              <p className="w-full mb-1 text-xl font-bold">{user.name}</p>
              <div className="text-[12px] p-0.5 inline-block rounded-md bg-gradient-to-tr from-primary to-secondary">
                <button className="px-2 font-bold bg-white rounded-md">
                  ADMIN
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-full px-8 py-8 bg-gray-200/70 rounded-xl gap-y-4">
            <div className="relative w-full">
              <p className="text-sm text-gray-700">Display Name</p>
              <p className="font-semibold">{user.name}</p>
            </div>
            <div className="relative w-full">
              <p className="text-sm text-gray-700">Email Id</p>
              <p className="font-semibold">{user.email}</p>
            </div>
            <div className="relative w-full">
              <p className="text-sm text-gray-700">Phone Number</p>
              <p className="font-semibold">06 66 64 94 57</p>
            </div>
            <div className="relative w-full">
              <p className="text-sm text-gray-700">Password</p>
              <p className="font-semibold">********</p>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <Link
              href={"/logout"}
              className="inline-block px-6 py-3 duration-150 bg-gray-200/70 rounded-xl hover:bg-gray-100"
            >
              Logout
            </Link>
          </div>
        </div>
      </>
    )
  );
};

export default ProfileCard;
