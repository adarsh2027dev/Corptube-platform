// pages/index.js
"use client";

import React from "react"; 
import SkillsToExplore from "../Components/SkillsToExplore";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Sidebar from "./Sidebar";

// Sample array of posts
const posts = [
  {
    id: 1,
    title: "Coming Soon",
    image: "/assets/landingphoto/Rectangle 40.png",
    link: "/posts/coming-soon",
  },
  {
    id: 2,
    title: "Background Motion",
    image: "/assets/landingphoto/Rectangle 153.png",
    link: "/posts/background-motion",
  },
  {
    id: 3,
    title: "Think Just Start",
    image: "/assets/landingphoto/Rectangle 154.png",
    link: "/posts/think-start",
  },
  {
    id: 4,
    title: "Wednesday",
    image: "/assets/landingphoto/Rectangle 155.png",
    link: "/posts/wednesday",
  },
  {
    id: 5,
    title: "Creating Significance",
    image: "/assets/landingphoto/Rectangle 156.png",
    link: "/posts/creating-significance",
  },
  {
    id: 6,
    title: "Social Media Design",
    image: "/assets/landingphoto/Rectangle 158.png",
    link: "/posts/social-media-design",
  },
];


const project = {
  id: 1,
  logo: "/assets/landingphoto/Ellipse 4.png",
  name: "GUSPTECH",
  stage: "Early Stage (MVP Developed, Seeking Beta Users)",
  role: "TECHNICAL CO-FOUNDER",
  description: `GUSPTECH is building a mobile-first platform that helps Gen Z and Millennials 
  invest smarter through AI-driven insights and community-based investing. 
  We’ve validated the idea with 200+ survey responses and have a working MVP. 
  Now we’re looking for a passionate technical co-founder who can take charge of 
  scaling the product, building a robust backend, and leading the dev team. 
  If you’re excited about fintech, AI, and democratizing wealth creation, let's connect!`,
};

const HomePage = () => {

  const [dropdowns, setDropdowns] = useState({
    international: false,
    national: false,
    stock: false,
  });

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className=" bg-gray-900">
 
    <Sidebar />
      <main className="min-h-screen w-[96%] ml-[4%] bg-black text-white p-6">
      {/* BUSINESS NEWS */}
      <section>
        <h2 className="text-xl font-bold text-blue-400 mb-4">BUSINESS NEWS</h2>

        {/* Dropdowns */}
        <div className="space-y-3">
          <button
            onClick={() => toggleDropdown("international")}
            className="w-full flex justify-between items-center border border-blue-400 px-4 py-2 rounded-md"
          >
            INTERNATIONAL NEWS
            <span>{dropdowns.international ? "▲" : "▼"}</span>
          </button>

          <button
            onClick={() => toggleDropdown("national")}
            className="w-full flex justify-between items-center border border-blue-400 px-4 py-2 rounded-md"
          >
            NATIONAL NEWS
            <span>{dropdowns.national ? "▲" : "▼"}</span>
          </button>

          <button
            onClick={() => toggleDropdown("stock")}
            className="w-full flex justify-between items-center border border-blue-400 px-4 py-2 rounded-md"
          >
            STOCK NEWS
            <span>{dropdowns.stock ? "▲" : "▼"}</span>
          </button>
        </div>
      </section>

      {/* POSTS TO EXPLORE */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-blue-400 mb-6">POSTS TO EXPLORE</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              href={post.link}
              key={post.id}
              className="rounded-xl overflow-hidden bg-gray-900 hover:scale-105 transition-transform shadow-lg"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={500}
                className="w-full h-144 object-cover"
              />
            </Link>
          ))}
        </div>
      </section>
        {/* SKILLS TO EXPLORE */}
        <section className="mt-10">
        <SkillsToExplore />
      </section>
        {/* POSTS TO EXPLORE */}
        <section className="mt-10">
        <h2 className="text-xl font-bold text-blue-400 mb-6">POSTS TO EXPLORE</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              href={post.link}
              key={post.id}
              className="rounded-xl overflow-hidden bg-gray-900 hover:scale-105 transition-transform shadow-lg"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={500}
                className="w-full h-144 object-cover"
              />
            </Link>
          ))}
        </div>
      </section>
       {/* PROJECTS TO EXPLORE */}
       <section className="mt-16">
        <h2 className="text-xl font-bold text-blue-400 mb-6">PROJECTS TO EXPLORE</h2>

        <div className="flex items-start gap-6 bg-black border border-blue-400 rounded-2xl p-6 shadow-lg">
          {/* Logo + Buttons */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center border border-blue-400">
              <Image
                src={project.logo}
                alt={project.name}
                width={50}
                height={50}
              />
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <button className="px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-sm">
                INTERACT
              </button>
              <button className="px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-sm">
                SUPPORT
              </button>
              <button className="px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-sm">
                SAVE
              </button>
            </div>
          </div>

          {/* Project Content */}
          <div className="flex-1">
            <h3 className="text-lg font-bold">{project.name}</h3>
            <p className="text-sm font-semibold mt-1">
              Stage: {project.stage}
            </p>
            <p className="text-sm font-semibold">
              ROLE OFFERED: {project.role}
            </p>
            <p className="text-sm mt-4 leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </div>
        </div>

        {/* See More Projects Button */}
        <div className="flex justify-center mt-8">
          <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-gray-900 border border-blue-400 hover:bg-blue-800 text-lg font-bold shadow-md">
            SEE MORE PROJECTS
            <span className="text-2xl">›</span>
          </button>
        </div>
      </section>
    </main>

    </div>
  );
};

export default HomePage;
