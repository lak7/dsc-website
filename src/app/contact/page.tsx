import VideoBackground from '@/components/common/VideoBackground'
import React from 'react'


const page = () => {
    return (
        <div className="h-dvh bg-black text-white/90 overflow-hidden font-light">
          <VideoBackground />
    
          {/* Main Content */}
          <main className="relative mt-4 sm:mt-8 z-10 min-h-screen flex flex-col items-center justify-center px-4">
            <div
              
              className="max-w-4xl mx-auto text-center px-4"
            >
              <div className="absolute left-0 top-0 z-40 size-full">
                <div className="mt-24 px-5 sm:px-10">
                  <h1 className="special-font hero-heading text-blue-100 text-left ">
                    C<b>ON</b>TACT <br /> PA<b>G</b>E <br />
                  </h1>
                </div>
              </div>
            </div>
          </main>
        </div>
      );
}

export default page
