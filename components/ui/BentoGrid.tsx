"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import GridGlobe from "./GridGlobe";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
import MagicBorderBtn from "./MagicBorderBtn";
import { MdContentCopy } from "react-icons/md";
import { TbChecks } from "react-icons/tb";
import Image from "next/image";

import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaGit,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiMysql,
  SiFirebase,
  SiTailwindcss,
  SiMongodb,
  SiPython,
} from "react-icons/si";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = [
    { id: 1, name: "ReactJS", designation: "4 years", icon: <FaReact /> },
    {
      id: 2,
      name: "Typescript",
      designation: "1.5 years",
      icon: <SiTypescript />,
    },
    { id: 3, name: "JavaScript", designation: "5 years", icon: <FaJs /> },
    { id: 4, name: "Firebase", designation: "2 year", icon: <SiFirebase /> },
    { id: 5, name: "PHP", designation: "4 years", icon: <FaPhp /> },
  ];

  const middleLists = [
    { id: 6, name: "Python", designation: "2.5 years", icon: <SiPython /> },
    { id: 7, name: "NextJS", designation: "1 year", icon: <SiNextdotjs /> },
    { id: 8, name: "NodeJS", designation: "3 years", icon: <FaNodeJs /> },
    {
      id: 9,
      name: "TailwindCSS",
      designation: "1 year",
      icon: <SiTailwindcss />,
    },
    { id: 10, name: "Git", designation: "4 years", icon: <FaGit /> },
  ];

  const rightLists = [
    { id: 11, name: "Java", designation: "3 years", icon: <FaJava /> },
    { id: 12, name: "HTML", designation: "4 years", icon: <FaHtml5 /> },
    { id: 13, name: "CSS", designation: "4 years", icon: <FaCss3Alt /> },
    { id: 14, name: "MySQL", designation: "2 years", icon: <SiMysql /> },
    { id: 15, name: "MongoDB", designation: "1 year", icon: <SiMongodb /> },
  ];
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "shajeed0@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt="Grid image"
              fill
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt="Spare image"
              fill
              className="object-cover object-center"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation></BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-6"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c3c3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
          {id === 2 && <GridGlobe />}
          {id === 3 && (
            <div className="flex justify-center w-full relative">
              <div className="grid grid-cols-5 gap-2 lg:gap-6 mt-6 pb-6 justify-items-center">
                {[...leftLists, ...middleLists, ...rightLists].map(
                  (item, i) => (
                    <span
                      key={i}
                      className="py-1 px-2 w-14 h-14 text-2xl rounded-lg text-center bg-[#10132E] flex items-center justify-center"
                    >
                      {item.icon}
                    </span>
                  )
                )}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
              <MagicBorderBtn
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={copied ? <TbChecks /> : <MdContentCopy />}
                position="left"
                handleClick={handleCopy}
                otherClasses="`bg-[#161a31]`"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
