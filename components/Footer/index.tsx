"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-dark dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390">
          {/* <!-- Footer Top --> */}
          <div className="bg-blue-500 py-10 lg:py-10 px-4 md:px-12 2xl:px-0">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-1/2 lg:w-1/4"
              >

                <p className="mb-5 pr-16 text-2xl text-1xl font-bold text-white dark:text-white">
                Ready to get started?
                </p>

                <p className="mb-5 pr-16 text-1xl text-1xl text-white dark:text-white">
                Download the app now
                </p>
              </motion.div>

              <div className="flex w-full flex-col gap-4 md:flex-row md:justify-between md:gap-0 lg:w-3/3 xl:w-6/12">
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                    <a href="index.html" className="relative">
                  <Image
                    width={170}
                    height={80}
                    src="/images/Hero/android-app-download.png"
                    alt="Logo"
                    className="dark:hidden"
                  />
                  <Image
                    width={170}
                    height={80}
                    src="/images/Hero/android-app-download.png"
                    alt="Logo"
                    className="hidden dark:block"
                  />
                </a>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                    <a href="index.html" className="relative">
                  <Image
                    width={170}
                    height={80}
                    src="/images/Hero/ios-app-dn.png"
                    alt="Logo"
                    className="dark:hidden"
                  />
                  <Image
                    width={170}
                    height={80}
                    src="/images/Hero/ios-app-dn.png"
                    alt="Logo"
                    className="hidden dark:block"
                  />
                </a>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                   <form >
                    <div className="flex flex-wrap gap-1">
                      <button
                        aria-label="get started button"
                        className="flex rounded-full bg-black px-8.5 py-4.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-black"
                      >
                        Book demo
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="bg-[#0b204f] py-15 lg:py-15">
            <div className="flex flex-wrap gap-8 lg:justify-center lg:gap-0">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-5/6 lg:w-5/6 mx-auto"
              >
                <div className="mb-4 pr-16 text-center text-1xl font-bold dark:text-[#8a9bb7]">
                  <div className="mb-5">Need Help?</div>
                  <div className="mb-5">
                    <form>
                      <div className="flex justify-center gap-1">
                        <button
                          aria-label="get started button"
                          className="flex rounded-full bg-white px-8.5 py-4.5 text-blue duration-300 ease-in-out hover:bg-whiteho dark:bg-btndark dark:hover:bg-white"
                        >
                          Live Chat
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="mb-5 dark:text-[#8a9bb7]">Contact Us</div>
                  <div className="flex justify-center gap-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
