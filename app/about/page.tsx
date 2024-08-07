"use client";
import AboutHero from "@/components/AboutHero";
// import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const content = [
  {
    title: "Challenge Core Assumptions",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white font-medium text-lg">
        Challenge Core Assumptions
      </div>
    ),
  },
  {
    title: "Learning Through Doing",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      // <div className="h-full w-full  flex items-center justify-center text-white">
      //   <Image
      //     src="/assets/linear.webp"
      //     width={200}
      //     height={300}
      //     className="h-full w-full object-cover"
      //     alt="linear board demo"
      //   />
      // </div>
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--yellow-500))] flex items-center justify-center text-white font-medium text-lg">
        Learning Through Doing
      </div>
    ),
  },
  {
    title: "Focus and Determination",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white font-medium text-lg">
        Focus and Determination
      </div>
    ),
  },
  {
    title: "Listen Smart",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white font-medium text-lg">
        Listen Smart
      </div>
    ),
  },
];

const page = () => {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto">
      <AboutHero />
      <section className="py-16 mb-20 bg-black w-[100vw]">
        <div className="container mx-auto px-4 sm:px-10 py-28 flex flex-col items-center">
          <div className="text-center max-w-5xl pb-20 text-white px-3 mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4">Our Team</h3>
            <p className="text-4xl md:text-6xl font-medium">
              Our journey is dedicated to helping Christians and Christian
              creatives give their visions a visual voice.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mx-auto">
            <div className="mt-12 rounded-full flex flex-col items-center justify-center max-w-6xl px-4">
              <div className="mb-4 flex flex-col items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
                  alt="Member"
                  className="object-cover w-96 h-96 rounded-full"
                />
                <h3 className="text-3xl font-normal my-2 text-white">
                  Kunoritse Emilsson
                </h3>
                <h3 className="text-4xl font-medium text-white mb-6">Founder/Lead Designer</h3>
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl text-white text-center">
                Kunoritse Emilsson is the lead designer and founder of Vimerge
                Studios. Hailing from Delta State, Nigeria, Emilsson has always
                had a passion for both God and design, specializing in brand
                identity and strategy. He views design through the lens of God
                as the ultimate creator and author of creativity.
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl text-white text-center mt-8">
                With over six years of experience in design, Emilsson&apos;s
                expertise and dedication have earned him a reputation for
                excellence. As a freelance designer and Fiverr Level 2 seller,
                he has received outstanding reviews from fellow Christians who
                trust him to bring their God-given visions to life through
                design. Emilsson&apos;s work is not just about creating visuals
                but about crafting narratives that resonate deeply and
                communicate powerfully.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-16 justify-between mt-40 max-w-7xl">
            <div className="col-span-1">
              <div className="mb-4 flex flex-col items-center justify-center text-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
                  alt="Member"
                  className="object-cover w-80 h-80 sm:w-72 sm:h-72 rounded-full"
                />
                <h3 className="text-2xl font-normal my-4 text-white">
                  Senior Designer
                </h3>
                <h3 className="text-4xl font-medium text-white">Disi Festus</h3>
              </div>
            </div>
            <div className="col-span-1">
              <div className="mb-4 flex flex-col items-center justify-center text-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
                  alt="Member"
                  className="object-cover w-80 h-80 sm:w-72 sm:h-72 rounded-full"
                />
                 <h3 className="text-2xl font-normal my-4 text-white">
                  Senior Designer
                </h3>
                <h3 className="text-4xl font-medium text-white">Disi Festus</h3>
              </div>
            </div>
            <div className="col-span-1">
              <div className="mb-4 flex flex-col items-center justify-center text-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
                  alt="Member"
                  className="object-cover w-80 h-80 sm:w-72 sm:h-72 rounded-full"
                />
                 <h3 className="text-2xl font-normal my-4 text-white">
                  Senior Designer
                </h3>
                <h3 className="text-4xl font-medium text-white">Disi Festus</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
