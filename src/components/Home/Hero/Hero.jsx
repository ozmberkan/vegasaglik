import React from "react";
import { MdOutlineLocalHospital } from "react-icons/md";

const Hero = () => {
  return (
    <div className="w-full   flex items-center justify-center p-24 gap-5">
      <div className="w-1/2 h-full flex flex-col gap-y-5 items-start justify-center">
        <h1 className="text-[100px] tracking-tighter leading-tight  drop-shadow-xl font-black flex flex-col">
          <span className="text-gray-800">Sağlığınız İçin </span>
          <span className="text-sky-500">Uzman Bakım</span>
        </h1>
        <p className="w-2/3  text-gray-500">
          Deneyimli doktorlarımız ve modern tıbbi ekipmanlarımızla size en iyi
          sağlık hizmetini sunuyoruz. Sağlığınız bizim önceliğimiz.
        </p>
        <div>
          <button className="rounded-lg bg-sky-500 text-white px-4 py-3 ">
            Hemen Randevu Alın
          </button>
        </div>
      </div>
      <div className="w-1/2  h-[500px]  bg-hero bg-cover rounded-xl drop-shadow-2xl relative">
        <div className="absolute -bottom-5 -left-5 p-4 bg-white rounded-xl flex-col flex ">
          <h2>Dr. Ahmet Erkul</h2>
          <span className="text-xs text-gray-400">Dahiliye Doktoru</span>
        </div>

        <div className="absolute -top-5 -right-5 bg-white p-5 rounded-xl border">
          <MdOutlineLocalHospital
            size={50}
            className="rotate-12 text-sky-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
