"use client";
 
import Link from "next/link";
import Image from "next/image";

// Reusable skill card
function SkillCard({ skill }) {
  return (
    <div className="bg-gradient-to-b from-neutral-900 to-black  rounded-2xl shadow-md border border-neutral-800 w-64 flex flex-col items-center p-4 relative">
      {/* Octagon Icon */}
 
        <Image src="/assets/landingphoto/Polygon 17.png" alt="Octagon" width={150} height={150} />
    


      {/* Title */}
      <div className="mt-4 text-center">
        <h3 className="font-bold text-white text-sm">
          {skill.title.toUpperCase()}
        </h3>
        <p className="text-neutral-400 text-xs mt-1">BY- {skill.author}</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-3">
        <Link
          href={`/skills/${skill.id}`}
          className="px-3 py-1 bg-blue-600 text-xs font-semibold rounded-md hover:bg-blue-700"
        >
          LEARN
        </Link>
        <button className="px-3 py-1 bg-blue-600 text-xs font-semibold rounded-md hover:bg-blue-700">
          SAVE
        </button>
      </div>
    </div>
  );
}

// Special "See More" card
function SeeMoreCard() {
  return (
    <div className="bg-gradient-to-b from-neutral-900 to-black rounded-2xl shadow-md border border-neutral-800 w-64 flex flex-col items-center justify-center relative">
      <div className="w-20 h-20 flex items-center justify-center bg-black rounded-full border border-neutral-700">
        <span className="text-4xl font-bold">›</span>
      </div>
      <p className="font-bold text-lg mt-2">SEE MORE</p>
    </div>
  );
}

export default function SkillsToExplore() {
//   const [skills, setSkills] = useState([]);
  const skills= [
    {
      "id": 1,
      "title": "Prompt Engineering",
      "author": "Priyanshu N."
    },
    {
      "id": 2,
      "title": "Web Development",
      "author": "Pankaj Singh"
    },
    {
      "id": 3,
      "title": "Data Analysis",
      "author": "Ravi Kumar"
    },
    {
        "id": 4,
        "title": "Data Analysis",
        "author": "Ravi Kumar"
      }
  ]
  

  // Fetch skills data from backend
//   useEffect(() => {
//     async function fetchSkills() {
//       try {
//         const res = await fetch("/api/skills"); // Your backend endpoint
//         const data = await res.json();
//         setSkills(data);
//       } catch (err) {
//         console.error("Failed to fetch skills", err);
//       }
//     }
//     fetchSkills();
//   }, []);

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        SKILLS TO EXPLORE
      </h2>

      <div className="flex   gap-4">
     
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
        <SeeMoreCard />
      </div>
    </section>
  );
}
