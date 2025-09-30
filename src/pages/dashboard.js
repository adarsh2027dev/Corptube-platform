import Image from 'next/image';
import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';

// local content view


const SkillsUploadView = () => (
    
    <div className="p-2 ">
        <p className="text-xl text-gray-300 mb-8">This is where you can add skills, proficiency levels, and details.</p>
        
    </div>
);

const ContentUploadView = () => (
    <div className="p-2 ">
        <p className="text-xl text-gray-300 mb-8">This section allows you to upload media content like images and videos.</p>
    </div>
);

const ProjectsUploadView = () => (
    <div className="p-2 ">
        <p className="text-xl text-gray-300 mb-8">Define your projects, including descriptions, links, and cover images.</p>
    </div>
);

// main dashboard component

const Dashboard = () => {
    // Removed useMemo since tabLabelToMessage is no longer used
    const [activeTab, setActiveTab] = useState('skills')

    // Function to determine which content component to render
    const renderContent = () => {
        switch (activeTab) {
            case 'skills':
                return <SkillsUploadView />;
            case 'content':
                return <ContentUploadView />;
            case 'projects':
                return <ProjectsUploadView />;
            default:
                return <p className="mt-6 text-center text-3xl font-bold text-white/90">Select a tab to view content.</p>;
        }
    }
    return (
        <div className="w-full min-h-screen bg-black text-white">
            <Sidebar/>
        
            <div className="w-full min-h-screen bg-black text-white">
                {/* Fixed Header */}
                <header className=" top-0 left-0 right-0 z-40">
                    {/* Header PADDING CONTAINER */}
                    <div className="pl-[7%] pr-6.5 pt-6">
                        
                        {/* 1. MAIN FLEX ROW: Profile Image + Main Info Box */}
                        <div className="flex items-center gap-6"> 
                            
                            {/* LEFT ELEMENT: PROFILE IMAGE (The Polygon Shape) */}
                          <div className="w-55 h-55  relative ml-3">
                              <Image 
                                  // 🐛 CHANGE: Use a valid source path. This is a placeholder.
                                  src="/assets/Polygon 21.png" 
                                  alt="User Profile" 
                                  width={220} // 52 * 4 = 208px
                                  height={220} // 52 * 4 = 208px
                                  className="object-cover w-full "
                              />
                          </div>

                            {/* RIGHT ELEMENT: MAIN PURPLE INFO BOX */}
                            {/* This container has flex-col/flex-row for internal responsiveness and uses justify-between inside */}
                            <div className="flex-1 min-w-0"> 
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between rounded-2xl bg-[#575FFE] p-6 gap-6">
                                    
                                    {/* Name and Category Text */}
                                    <div>
                                        <h1 className="text-6xl font-sans font-extrabold tracking-tight">Name</h1>
                                        <p className="text-white/90 text-2xl font-sans">(Category)</p>
                                    </div>

                                    {/* Stats and Actions Group */}
                                    <div className='flex flex-wrap items-center gap-6'> 
                                        {/* Stats Box (w-48 h-44 as safe equivalents) */}
                                        <div className="font-sans rounded-3xl bg-white w-48 h-44 flex flex-col justify-center items-center gap-3 p-3">
                                            <div className="rounded-2xl bg-[#575FFE] w-full h-1/2 flex flex-col justify-center items-center text-center cursor-pointer hover:bg-gray-600">
                                                <p className="text-3xl font-bold">1000</p>
                                                <p className="text-xs uppercase tracking-wider">Supporting</p>
                                            </div>
                                            <div className="rounded-2xl bg-[#575FFE] w-full h-1/2 flex flex-col justify-center items-center text-center cursor-pointer hover:bg-gray-600">
                                                <p className="text-3xl font-bold">1000</p>
                                                <p className="text-xs uppercase tracking-wider">Supporters</p>
                                            </div>
                                        </div>

                                        {/* Actions Box (w-48 h-44 as safe equivalents) */}
                                        <div className="rounded-3xl w-48 h-44 flex flex-col justify-center items-center gap-2 bg-white font-sans p-3">
                                            <button className="w-full h-1/3 uppercase rounded-full bg-[#575FFE] text-white text-xl px-4 py-2 font-semibold transition-transform duration-200 hover:scale-[1.025] hover:bg-gray-600">Support</button>
                                            <button className="w-full h-1/3 uppercase rounded-full bg-[#575FFE] text-white text-xl px-4 py-2 font-semibold transition-transform duration-200 hover:scale-[1.03] hover:bg-gray-600">Portfolio</button>
                                            <button className="w-full h-1/3 uppercase rounded-full bg-[#575FFE] text-white text-xl px-4 py-2 font-semibold transition-transform duration-200 hover:scale-[1.03] hover:bg-gray-600">Interact</button>
                                        </div>
                                    </div>
                                </div>
                            </div> {/* End Main Purple Info Box Container */}

                        </div> {/* End MAIN FLEX ROW */}
                    </div>

                    {/* Tabs Row (Unchanged) */}
                    <div className="sticky top-0 z-30 pl-[7%] pr-6 pb-4 pt-5">
                        <div className=" rounded-3xl bg-[#575FFE] flex items-center justify-around gap-16 px-4 py-2.5 font-sans">
                            <div className="flex-1">
                                <button
                                    onClick={() => setActiveTab('skills')}
                                    className={`w-full rounded-2xl border-3 border-white bg-[#575FFE] px-0.5 py-1.5 text-3xl font-extrabold tracking-wide hover:ring-1 ring-white/80 cursor-pointer transition-all duration-100 active:scale-[0.98] ${activeTab==='skills' ? 'ring-1 ring-[#575FFE] bg-white text-[#575FFE]' : ''}`}
                                >SKILLS</button>
                            </div>
                            <div className="flex-1">
                                <button
                                    onClick={() => setActiveTab('content')}
                                    className={`w-full rounded-2xl border-3 border-white bg-[#575FFE] px-0.5 py-1.5 text-3xl font-extrabold tracking-wide hover:ring-1 ring-white/80 cursor-pointer transition-all duration-100 active:scale-[0.98] ${activeTab==='content' ? 'ring-1 ring-[#575FFE] bg-white text-[#575FFE]' : ''}`}
                                >CONTENT</button>
                            </div>
                            <div className="flex-1">
                                <button
                                    onClick={() => setActiveTab('projects')}
                                    className={`w-full rounded-2xl border-3 border-white bg-[#575FFE] px-0.5 py-1.5 text-3xl font-extrabold tracking-wide hover:ring-1 ring-white/80 cursor-pointer transition-all duration-100 active:scale-[0.98] ${activeTab==='projects' ? 'ring-1 ring-[#575FFE] bg-white text-[#575FFE]' : ''}`}
                                >PROJECTS</button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main body with spacing for fixed header */}
                {/* NOTE: You need to verify and adjust pt-[300px] or higher to clear the header height */}
                <main className="pl-[6%] pr-6 pt-4 pb-10 min-h-screen bg-[#141414]">
                    <div key={activeTab} className="fade-in-up">
                        {renderContent()}
                    </div>
                </main>
                
            </div>
        </div>
    )
}

export default Dashboard




