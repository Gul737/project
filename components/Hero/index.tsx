"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2 pl-20">
              <h4 className="mb-4 pr-16 text-2xl font-bold text-black dark:text-white ">
                The Smart way to run your sales
              </h4>
              <p className="mb-4 pr-16 text-1xl text-black dark:text-white">Powerful yet simple mobile CRM for modern teams</p>
              <ul className="mb-4 pr-16 text-1xl font-bold text-black dark:text-white">
                <li className="mb-5">⚡Manage all leads from your phone</li>
                <li className="mb-5">⚡Manage follow-ups easily</li>
                <li className="mb-5">⚡Share trackable pages , quotation</li>
                <li className="mb-5">⚡Automate your entire sales</li>
                <li className="mb-5">⚡Super simple custom leadforms</li>
                <li className="mb-5">⚡Automated Lead distribution</li>
              </ul>

              <div className="mt-10">
                <div className="flex px-4 lg:items-center">
                  <div className="relative aspect-[120/40] h-[55px]">
                        <Image
                          className="pr-8 android-app dark:hidden"
                          src="/images/hero/android-app-download.png"
                          alt="Hero"
                          fill
                        />
                      </div>
                      <div className="relative aspect-[120/40] h-[55px]">
                        <Image
                          className="pr-8 ios-app dark:hidden"
                          src="/images/hero/ios-app-dn.png"
                          alt="Hero"
                          fill
                        />
                  </div> 
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap gap-1">
                      <button
                        aria-label="get started button"
                        className="flex rounded-full bg-black px-8.5 py-1.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-black"
                      >
                        Book demo
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="animate_right hidden md:w-2/2 lg:block pr-35">
                <div className=" relative aspect-[500/444] w-full h-[500px]">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/Housingcom-min.png"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/Housingcom-min.png"
                    alt="Hero"
                    fill
                  />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
