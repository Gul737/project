"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";
import SectionHeader from "../Common/SectionHeader";

const Brands = () => {
  return (
    <section className="border border-x-0 border-y-stroke bg-gray py-11 dark:border-y-strokedark dark:bg-black">
        <div className="animate_top mx-auto mb-10 text-center">
          <SectionHeader
            headerInfo={{
              title: ` `,
              subtitle: 'Integrations',
              description: 'Hundreds of integrations available and customizable to fit your needs',
            }}
          />
        </div>
        <div className="container mx-auto px-35 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
            {brandData.map((brand) => (
              <div key={brand.id} className="flex justify-center">
                <div className="p-6 m-0 border border-gray-200 shadow-xl bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700">
                  <SingleBrand brand={brand} />
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default Brands;