
import Image from 'next/image'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <div  className="main h-full w-full ">
        
      
      <section className="sidebar w-[4%] fixed top-0 left-0 h-screen bg-gray-900 ml-2 ">
        <div className="sidebar-content h-full flex flex-col justify-between">
          
          {/* Logo Section */}
          <div className="logo border-2 border-gray-500 border-t-0 flex justify-center items-center p-1 pb-2.5 pt-3">
            
            <Image 
                src="/assets/Ellipse 45.png" 
                alt="Company Logo" 
                width={50}          
                height={50}        
                // Use object-contain or object-cover if needed
                className="logo-img w-[100%]" 
            />
          </div>
          
          {/* Middle Icons Section */}
          <div className="mid-icons border-2 border-gray-500 border-t-0 flex flex-col items-center gap-6 pt-9 pb-12 px-2">
            {/* The set of icons */}
            <Image
               src="/assets/Polygon 28.png"
               alt='profile Img'
               width={50}
               height={50}
               className='ml-2'
             />
            <Image
             src="/assets/2 7.png"
             alt="Icon 1" 
             width={40}
             height={40}
             />
            <Image
              src="/assets/3 4.png"
              alt="Icon 2"
              width={40}
              height={40} />
            <Image 
             src="/assets/7 4.png" 
             alt="Icon 3" 
             width={40}
             height={40}/>
            <Image
             src="/assets/4 4.png"
             alt="Icon 4" 
             width={40}
             height={40}/>
            <Image 
              src="/assets/5 4.png"
              alt="Icon 5"
              width={41}
              height={40} />
            <Image 
              src="/assets/8 3.png" 
              alt="Icon 6" 
              width={40}
              height={40}/>
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
  )
}