import React from "react";
import Image from "next/image";
import { Brand } from "@/types/brand";
import { motion } from "framer-motion";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, href, name, imageLight, id } = brand;

  return (
    <motion.a
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
      transition={{ duration: 1, delay: id * 0.1 }}
      viewport={{ once: true }}
      href={href}
      className="mx-w-full relative block h-[135px] w-[135px]"
      aria-label={name}
    >
      <Image
        className="opacity-100 transition-opacity duration-300 hover:opacity-100 dark:hidden"
        src={image}
        alt={name}
        layout="fill"
        objectFit="contain"
        priority={true}
      />
      <Image
        className="hidden opacity-50 transition-opacity duration-300 hover:opacity-100 dark:block"
        src={imageLight}
        alt={name}
        layout="fill"
        objectFit="contain"
        priority={true}
      />
    </motion.a>
  );
};

export default SingleBrand;