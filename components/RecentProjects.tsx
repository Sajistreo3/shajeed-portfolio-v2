"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { Icon } from "@iconify/react";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Link from "next/link";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((item) => (
          <div
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[23rem] h-[20rem] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  {/* Background image */}
                  <Image
                    src="/bg.png"
                    alt="bgimg"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Main web image with tilt, scaling, and rounded corners */}
                <Image
                  src={item.img}
                  alt="cover"
                  width={800}
                  height={450}
                  className="z-10 absolute bottom-0 transform rotate-[5deg] scale-95 rounded-3xl shadow-lg"
                  style={{ maxWidth: "90%", borderRadius: "1.5rem" }}
                  priority
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black-100 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Icon
                        icon={icon}
                        className="p-2"
                        width={37}
                        height={37}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <Link target="_blank" href={item.link}>
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple cursor-pointer">
                      Check Live Site
                    </p>
                  </Link>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
