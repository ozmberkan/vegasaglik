import React from "react";
import { doctors } from "~/data/data";

const Doctors = () => {
  return (
    <div className="h-[700px] p-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-sky-500 font-semibold tracking-wide uppercase">
            Uzman Kadromuz
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Deneyimli Doktorlarımız
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Alanında uzman doktorlarımızla size en iyi sağlık hizmetini
            sunuyoruz.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <img
                className="h-72 w-full object-cover"
                src={doctor.image}
                alt={doctor.name}
                width={400}
                height={400}
              />
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {doctor.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{doctor.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
