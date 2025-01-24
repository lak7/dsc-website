import {
  VideoBackground4,
  VideoBackground6,
} from "@/components/common/VideoBackground";
import { Departments } from "@/constants/teamdata";
import { DropdownCard } from "@/components/DropdownCard";
import Image from "next/image";
import { AnimatedTestimonialsDemo } from "./Core";
import TeamGrid from "./Core2";

const page = () => {
  return (
    <div className="min-h-dvh bg-[#0A0A0F] text-white/90 overflow-y-auto font-light">
      <VideoBackground6 />

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="z-40 w-full">
            <div className="mt-24 px-2">
              <h1 className="special-font hero-heading text-blue-100 text-left">
                A<b>BO</b>UT <br /> US <br />
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Departments Section */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center mb-4 text-white">
            Our Departments
          </h2>
          <p className="text-gray-400 text-center mb-8 sm:mb-16 text-base sm:text-lg max-w-2xl mx-auto">
            Meet the teams that make innovation possible
          </p>

          <div className="grid gap-4 sm:gap-6 lg:gap-8">
            {Departments.map((dept) => (
              <div
                key={dept.name}
                className="w-full backdrop-blur-sm bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <DropdownCard title={dept.name}>
                  <p className="text-base sm:text-xl font-medium my-2 sm:my-3 text-gray-300">
                    {dept.description}
                  </p>
                  <div className="flex flex-col w-full justify-between items-center">
                    <figure className="w-full">
                      <figcaption className="text-2xl sm:text-3xl font-semibold my-4 sm:my-5 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                        Heads
                      </figcaption>
                      <ul
                        className={`grid grid-cols-1 sm:grid-cols-2 ${
                          dept.Heads.length > 2 ? "lg:grid-cols-3" : ""
                        } gap-4 sm:gap-6 lg:gap-8`}
                      >
                        {dept.Heads?.map((head) => (
                          <li
                            key={head}
                            className="flex flex-col items-center group"
                          >
                            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl w-full max-w-xs mx-auto">
                              <Image
                                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                                src="/image.png"
                                alt={`${head}-image`}
                                width={400}
                                height={450}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <p className="text-xl sm:text-2xl mt-3 sm:mt-4 font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                              {head}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </figure>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
                      <figure className="w-full p-4 sm:p-6 rounded-lg sm:rounded-xl bg-blue-950/20 border border-blue-500/20">
                        <figcaption className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                          Executives
                        </figcaption>
                        <ul className="space-y-2 sm:space-y-3">
                          {dept.Executives?.map((Exc) => (
                            <li
                              key={Exc}
                              className="text-base sm:text-lg text-gray-300 hover:text-white transition-colors"
                            >
                              {Exc}
                            </li>
                          ))}
                        </ul>
                      </figure>

                      <figure className="w-full p-4 sm:p-6 rounded-lg sm:rounded-xl bg-pink-950/20 border border-pink-500/20">
                        <figcaption className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
                          Volunteers
                        </figcaption>
                        <ul className="space-y-2 sm:space-y-3">
                          {dept.Volunteers?.map((Vol) => (
                            <li
                              key={Vol}
                              className="text-base sm:text-lg text-gray-300 hover:text-white transition-colors"
                            >
                              {Vol}
                            </li>
                          ))}
                        </ul>
                      </figure>
                    </div>
                  </div>
                </DropdownCard>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
