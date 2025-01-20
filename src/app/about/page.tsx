import { VideoBackground3 } from "@/components/common/VideoBackground";
import { CoreTeam, Departments } from "@/constants/teamdata";
import { DropdownCard } from "@/components/DropdownCard";
import Image from "next/image";

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
          Our Departments
        </h1>
        <div className="z-50 mt-20 w-full flex flex-col items-center gap-10 ">
          {Departments.map((dept) => (
            <div key={dept.name} className="w-2/3">
              <DropdownCard title={dept.name}>
                <p className="text-lg font-medium">{dept.description}</p>
                <div className="flex flex-col w-full justify-between items-center">
                  <figure className="w-full">
                    <figcaption className="text-3xl font-semibold my-5">
                      Heads
                    </figcaption>
                    <ul className="flex items-center justify-center gap-4">
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

                  <div className="w-full flex justify-between items-center">
                    <figure className="w-full">
                      <figcaption className="text-3xl font-semibold my-5">
                        Executives
                      </figcaption>
                      <ul className="flex flex-col gap-1">
                        {dept.Executives?.map((Exc) => (
                          <li key={Exc} className="mx-4 flex ">
                            <p className="text-2xl font-medium">{Exc}</p>
                          </li>
                        ))}
                      </ul>
                    </figure>

                    <figure className="w-full">
                      <figcaption className="text-3xl font-semibold my-5">
                        Volunteers
                      </figcaption>
                      <ul className="flex flex-col gap-1">
                        {dept.Volunteers?.map((Vol) => (
                          <li key={Vol} className="mx-4 flex ">
                            <p className="text-2xl font-medium">{Vol}</p>
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
