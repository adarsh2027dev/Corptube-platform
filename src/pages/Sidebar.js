"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/me", {
          method: "GET",
          credentials: "include", // ✅ ensures cookies are sent
        });

        if (res.ok) {
          const user = await res.json();
          console.log("User data:", user);
          setUserImage(user?.profilePhoto || null);
        } else {
          console.warn("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="main h-full w-full">
      <section className="sidebar w-[4%] fixed top-0 left-0 h-screen bg-gray-900 ml-2 ">
        <div className="sidebar-content h-full flex flex-col justify-between">
          {/* Logo Section */}
          <div className="logo border-2 border-gray-500 border-t-0 flex justify-center items-center p-1 pb-2.5 pt-3">
            <Link href="/" className="cursor-pointer">
              <Image
                src="/assets/Ellipse 45.png"
                alt="Company Logo"
                width={50}
                height={50}
                className="logo-img w-[100%]"
              />
            </Link>
          </div>

          {/* Middle Icons Section */}
          <div className="mid-icons border-2 border-gray-500 border-t-0 flex flex-col items-center gap-6 pt-9 pb-12 px-2">
            {/* ✅ Polygon user profile image */}
            <div className="relative w-[60px] h-[60px]">
              {userImage ? (
                <Image
                  src={userImage}
                  alt="User Profile"
                  fill
                  className="object-cover clip-polygon"
                />
              ) : (
                <Image
                  src="/assets/default-user.png"
                  alt="Default User"
                  fill
                  className="object-cover clip-polygon"
                />
              )}
            </div>

            {/* Other static icons */}
            <Image src="/assets/2 7.png" alt="Icon 1" width={40} height={40} />
            <Image src="/assets/3 4.png" alt="Icon 2" width={40} height={40} />
            <Image src="/assets/7 4.png" alt="Icon 3" width={40} height={40} />
            <Image src="/assets/4 4.png" alt="Icon 4" width={40} height={40} />
            <Image src="/assets/5 4.png" alt="Icon 5" width={41} height={40} />
            <Image src="/assets/8 3.png" alt="Icon 6" width={40} height={40} />
          </div>

          {/* Settings Icon Section */}
          <div className="setting-icon border-2 border-gray-500 border-t-0 border-b-0 flex justify-center py-28">
            <Link href="/Settings" className="cursor-pointer">
              <Image
                className="w-[2.6rem]"
                src="/assets/6 5.png"
                alt="Settings Icon"
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
