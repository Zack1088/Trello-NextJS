import ProfileCard from "@/components/authComponents/ProfileCard";
import Link from "next/link";

const ProfilePage = () => {
  return (
    <div className="flex flex-wrap w-full max-w-xl py-8 mx-auto gap-y-6">
      <h1 className="flex items-center w-full gap-x-4">
        <Link href={"../"}>
          <span className="inline-flex items-center justify-center w-10 h-10 bg-gray-200/70 hover:bg-gray-100 rounded-xl">
            &lt;
          </span>
        </Link>
        <span className="text-3xl font-bold">My Account!</span>
      </h1>
      <ProfileCard />
    </div>
  );
};

export default ProfilePage;
