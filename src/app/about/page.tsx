import { VideoBackground3 } from "@/components/common/VideoBackground";
import { CoreTeam, Departments } from "@/constants/teamdata";
import { DropdownCard } from "@/components/DropdownCard";
import Image from "next/image";
import { AnimatedTestimonialsDemo } from "./Core";

const page = () => {
  return (
    <div className="h-dvh bg-black text-white/90 overflow-y-auto font-light">
      <VideoBackground3 />

      {/* Main Content */}
      <main className="relative mt-4 sm:mt-8 z-10 min-h-screen flex flex-col px-4 sm:px-10">
        <div className="max-w-4xl px-4 ">
          <div className="z-40 size-full">
            <div className="mt-24 px- ">
              <h1 className="special-font hero-heading text-blue-100 text-left ">
                A<b>BO</b>UT <br /> PA<b>G</b>E <br />
              </h1>
            </div>
          </div>
        </div>
        <h1 className="text-7xl font-bold z-10 px-5 mt-20 text-center ">
          Meet Our Core
        </h1>
        <div>
          <AnimatedTestimonialsDemo />
        </div>

        <h1 className="text-7xl font-bold z-10 px-5 mt-20 text-center ">
          Our Departments
        </h1>
        <div className="z-50 mt-20 w-full flex flex-col items-center gap-10 mb-10 ">
          {Departments.map((dept) => (
            <div
              key={dept.name}
              className="w-3/4 duration-300 lg:w-full bg-gray-900"
            >
              <DropdownCard title={dept.name}>
                <p className="text-xl font-medium my-3 italic">
                  Role : {dept.description}
                </p>
                <div className="flex flex-col w-full justify-between items-center">
                  <figure className="w-full">
                    <figcaption className="text-3xl font-semibold my-5 text-yellow-400">
                      Heads
                    </figcaption>
                    <ul
                      className={`flex items-center justify-center gap-5  ${
                        dept.Heads.length > 2
                          ? "flex-col lg:flex-row"
                          : "flex-col md:flex-row"
                      } `}
                    >
                      {dept.Heads?.map((head) => (
                        <li
                          key={head}
                          className="mx-4 flex flex-col items-center"
                        >
                          <Image
                            className="rounded-xl"
                            src="/image.png"
                            alt={`${head}-image`}
                            width={400}
                            height={450}
                          />
                          <p className="text-2xl my-3 font-medium">{head}</p>
                        </li>
                      ))}
                    </ul>
                  </figure>

                  <div className="w-full flex flex-col md:flex-row justify-between items-start gap-y-5 text-center">
                    <figure className="w-full">
                      <figcaption className="text-3xl font-semibold my-5 text-blue-500">
                        Executives
                      </figcaption>
                      <ul className="flex flex-col gap-1">
                        {dept.Executives?.map((Exc) => (
                          <li key={Exc} className="mx-4 flex">
                            <p className="text-2xl w-full font-medium text-center ">
                              {Exc}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </figure>

                    <figure className="w-full">
                      <figcaption className="text-3xl font-semibold my-5 text-pink-500">
                        Volunteers
                      </figcaption>
                      <ul className="flex flex-col gap-1">
                        {dept.Volunteers?.map((Vol) => (
                          <li key={Vol} className="mx-4 flex ">
                            <p className="text-2xl font-medium w-full text-center ">
                              {Vol}
                            </p>
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
      </main>
    </div>
  );
};

export default page;
