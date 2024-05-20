"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white">
              Reach your leads in seconds
              </h2>
              <p>
              We sync and organize all your leads from all your lead sources so you can reach them faster in any way your leads prefer, be it over WhatsApp, email, or message. Get instantly notified whenever a new lead is received.
              </p>
              <ul className="flex ">
                <div className="mt-7.5 flex items-center gap-5">
                  <div className="w-3/4">
                    <li className="mb-0.5 text-1x text-metatitle1 text-black dark:text-white">
                    <FontAwesomeIcon icon={faCheckSquare} style={{ color: '#87CEEB' }} className='pr-1' /> Never miss another lead with instant lead alerts on your phone
                    </li>
                  </div>
                </div>
                <div className="mt-7.5 flex items-center gap-5">
                  <div className="w-3/4">
                    <li className="mb-0.5 text-1x text-metatitle1 text-black dark:text-white">
                    <FontAwesomeIcon icon={faCheckSquare} style={{ color: '#87CEEB' }} className='pr-1' /> Create/Manage/Assign Tasks 
                    </li>
                  </div>
                </div>
              </ul>
              <ul className="flex">
                <div className="mt-7.5 flex items-center gap-5">
                  <div className="w-3/4">
                    <li className="mb-0.5 text-1x text-metatitle1 text-black dark:text-white">
                    <FontAwesomeIcon icon={faCheckSquare} style={{ color: '#87CEEB' }} className='pr-1' /> Share trackable images,files and pages from the app
                    </li>
                  </div>
                </div>
                <div className="mt-7.5 flex items-center gap-5">
                  <div className="w-3/4">
                    <li className="mb-0.5 text-1x text-metatitle1 text-black dark:text-white">
                    <FontAwesomeIcon icon={faCheckSquare} style={{ color: '#87CEEB' }} className='pr-1' /> Lead customers to whatsapp, call, email in seconds
                    </li>
                  </div>
                </div>
              </ul>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[57/100] md:block md:w-3/2 h-[600px]"
            >
              <Image
                src="./images/about/Screenshot_2.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="./images/about/Screenshot_2.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
        {/* <!-- ===== About Start ===== --> */}
        <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[57/100] md:block md:w-3/2 h-[600px]"
            >
              <Image
                src="/images/about/net-resizeimage.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/net-resizeimage.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white">
                Manage your team on the go
              </h2>
              <p>
                With 3Sigma Mobile CRM you can Manage your team Effortlessely . Get precise reports, Funnels and call metrics. With 3Sigma you can Manage your team and colloborate with them.
              </p>
              <ul className="flex ">
                <div className="mt-7.5 flex items-center gap-5">
                  <div className="w-3/4">
                    <li className="mb-0.5 text-1x text-metatitle1 text-black dark:text-white">
                    <FontAwesomeIcon icon={faCheckSquare} style={{ color: '#87CEEB' }} className='pr-1' /> Create teams and View reports
                    </li>
                  </div>
                </div>
                <div className="mt-7.5 flex items-center gap-5">
                  <div className="w-3/4">
                    <li className="mb-0.5 text-1x text-metatitle1 text-black dark:text-white">
                    <FontAwesomeIcon icon={faCheckSquare} style={{ color: '#87CEEB' }} className='pr-1' /> Team Live Location and Check-ins
                    </li>
                  </div>
                </div>
              </ul>
              <ul className="flex">
                <div className="mt-7.5 flex items-center gap-5">
                  <div className="w-3/4">
                    <li className="mb-0.5 text-1x text-metatitle1 text-black dark:text-white">
                    <FontAwesomeIcon icon={faCheckSquare} style={{ color: '#87CEEB' }} className='pr-1' />View Sales funnels/call/follow-ups
                    </li>
                  </div>
                </div>
                <div className="mt-7.5 flex items-center gap-5">
                  <div className="w-3/4">
                    <li className="mb-0.5 text-1x text-metatitle1 text-black dark:text-white">
                    <FontAwesomeIcon icon={faCheckSquare} style={{ color: '#87CEEB' }} className='pr-1' /> Assign sales targets and view Achievement
                    </li>
                  </div>
                </div>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[57/100] md:block md:w-3/2 h-[600px]"
            >
              <Image
                src="/images/about/Frame.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/Frame.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white">
                Automate everything
              </h2>
              <ul className="flex ">
                <div className="mt-7.5 flex items-center gap-5">
                  <div className="w-3/4">
                    <li className="mb-0.5 text-1x text-metatitle1 text-black dark:text-white">
                    <FontAwesomeIcon icon={faCheckSquare} style={{ color: '#87CEEB' }} className='pr-1' /> Send Automated Whatsapp API messages
                    </li>
                  </div>
                </div>
                <div className="mt-7.5 flex items-center gap-5">
                  <div className="w-3/4">
                    <li className="mb-0.5 text-1x text-metatitle1 text-black dark:text-white">
                    <FontAwesomeIcon icon={faCheckSquare} style={{ color: '#87CEEB' }} className='pr-1' /> Trigger any workflow
                    </li>
                  </div>
                </div>
              </ul>
              <ul className="flex">
                <div className="mt-7.5 flex items-center gap-5">
                  <div className="w-3/4">
                    <li className="mb-0.5 text-1x text-metatitle1 text-black dark:text-white">
                    <FontAwesomeIcon icon={faCheckSquare} style={{ color: '#87CEEB' }} className='pr-1' /> Send automated E-mails
                    </li>
                  </div>
                </div>
                <div className="mt-7.5 flex items-center gap-5">
                  <div className="w-3/4">
                    <li className="mb-0.5 text-1x text-metatitle1 text-black dark:text-white">
                    <FontAwesomeIcon icon={faCheckSquare} style={{ color: '#87CEEB' }} className='pr-1' /> Time based workflows
                    </li>
                  </div>
                </div>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white">
              It works even better with Team
              </h2>
              <p>
              Stop sharing leads manually to your team members. With powerful lead distribution methods you can distribute leads however and to whoever you want ensuring maximum efficiency .
              </p>
              <ul className="flex ">
                <div className="mt-7.5 flex items-center gap-5">
                  <div className="w-3/4">
                    <li className="mb-0.5 text-1x text-metatitle1 text-black dark:text-white">
                    <FontAwesomeIcon icon={faCheckSquare} style={{ color: '#87CEEB' }} className='pr-1' /> Automatically Distribute leads to your team
                    </li>
                  </div>
                </div>
                <div className="mt-7.5 flex items-center gap-5">
                  <div className="w-3/4">
                    <li className="mb-0.5 text-1x text-metatitle1 text-black dark:text-white">
                    <FontAwesomeIcon icon={faCheckSquare} style={{ color: '#87CEEB' }} className='pr-1' /> Flexible lead distribution, adapts to your business 
                    </li>
                  </div>
                </div>
              </ul>
              <ul className="flex">
                <div className="mt-7.5 flex items-center gap-5">
                  <div className="w-3/4">
                    <li className="mb-0.5 text-1x text-metatitle1 text-black dark:text-white">
                    <FontAwesomeIcon icon={faCheckSquare} style={{ color: '#87CEEB' }} className='pr-1' /> Stop lead leakage
                    </li>
                  </div>
                </div>
                <div className="mt-7.5 flex items-center gap-5">
                  <div className="w-3/4">
                    <li className="mb-0.5 text-1x text-metatitle1 text-black dark:text-white">
                    <FontAwesomeIcon icon={faCheckSquare} style={{ color: '#87CEEB' }} className='pr-1' /> Powerfull reporting coming soon!
                    </li>
                  </div>
                </div>
              </ul>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[57/100] md:block md:w-3/2 h-[600px]"
            >
              <Image
                src="./images/about/gtrx.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="./images/about/gtrx.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
