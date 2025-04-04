import React from "react";
import MagicBorderBtn from "./ui/MagicBorderBtn";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          precense to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:shajeed0@gmail.com">
          <MagicBorderBtn
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {new Date().getFullYear()} Shajeed
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-5">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              {info.id === 2 ? (
                <FaXTwitter width={20} height={20} />
              ) : (
                <Image
                  src={info.img}
                  alt="Social media icon"
                  width={20}
                  height={20}
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
