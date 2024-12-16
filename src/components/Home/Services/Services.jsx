import React from "react";
import { services } from "~/data/data";

const Services = () => {
  return (
    <section className="py-12 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-sky-500 font-semibold tracking-wide uppercase">
            Hizmetlerimiz
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Kapsamlı Sağlık Hizmetleri
          </p>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
            Uzman kadromuz ve modern ekipmanlarımızla size en iyi sağlık
            hizmetini sunuyoruz.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex items-center bg-sky-500 rounded-xl"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-12 rounded-xl bg-sky-500 text-white">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-white">
                    {service.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
