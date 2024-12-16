import { Calendar, Edit } from "lucide-react";
import React from "react";
import { useUser } from "~/hooks/useUser";

const Profile = () => {
  const user = useUser();

  return (
    <div className="px-24 py-5 grid grid-cols-3 w-full gap-5">
      <div className="col-span-1 row-span-1  border h-[300px] rounded-lg overflow-hidden">
        <div className="flex justify-between items-center pb-3 border-b p-3 bg-sky-100 text-gray-700">
          <h1 className="font-semibold">Kişisel Bilgiler</h1>
          <button>
            <Edit size={15} />
          </button>
        </div>
        <div className="p-3 flex flex-col gap-3">
          <span className="text-gray-800 font-semibold text-sm">
            {user.displayName}
          </span>
          <span className="text-gray-500 text-sm">{user.email}</span>
          <span className="text-gray-500 text-sm">{user.tckn}</span>
        </div>
      </div>
      <div className="col-span-2 row-span-1 rounded-lg overflow-hidden flex flex-col gap-3 border h-[300px]">
        <div className="flex justify-between items-center pb-3 border-b p-3 bg-sky-100 text-gray-700">
          <h1 className="font-semibold">Sağlık Geçmişi Özeti</h1>
        </div>
        <div className="p-3">
          <p>
            Burada kullanıcının sağlık geçmişi özeti yer alacak. Bu bölüm,
            gerçek bir uygulamada kullanıcının tıbbi kayıtlarına göre
            doldurulmalıdır.
          </p>
        </div>
      </div>
      <div className="col-span-3  border h-[300px] rounded-lg overflow-hidden ">
        <div className="flex justify-between items-center pb-3 border-b p-3 bg-sky-100 text-gray-700">
          <h1 className="font-semibold">Yaklaşan Randevular</h1>
        </div>
        <div className="p-3 flex flex-col gap-3">
          <div className="w-full border rounded-lg px-4 py-2 flex justify-between items-center">
            <div className="flex items-center gap-x-2">
              <span className="pr-2 border-r">
                {" "}
                <Calendar />
              </span>
              <div className=" flex flex-col items-start justify-start">
                <h1 className="text-sm">Dr. Ahmet Erkul</h1>
                <span className="text-gray-500 text-xs">Dahiliye</span>
              </div>
            </div>
            <div>20.12.2024 - 20:00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
