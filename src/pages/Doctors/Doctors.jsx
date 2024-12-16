import React from "react";
import { doctors } from "~/data/data";

const Doctors = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-left">Doktorlarımız</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="overflow-hidden border p-3 rounded-xl shadow-xl flex flex-col gap-3 "
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              width={400}
              height={400}
              className="w-full h-64 object-cover rounded-xl"
            />
            <div className="">
              <h1 className="font-semibold">{doctor.name}</h1>
              <span>{doctor.specialty}</span>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">
                <strong>Eğitim:</strong> {doctor.education}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                <strong>Deneyim:</strong> {doctor.experience}
              </p>
              <p className="text-sm">{doctor.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
