import { AlertCircle, Calendar, Edit, FileWarning, Save } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "~/hooks/useUser";
import { getUser } from "~/redux/slices/userSlice";
import { ring } from "ldrs";
import { useForm } from "react-hook-form";
import { doc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { db } from "~/firebase/firebase";

const Profile = () => {
  ring.register();
  const user = useUser();
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    dispatch(getUser(user.uid));
  }, []);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      displayName: user?.displayName || "",
      tckn: user?.tckn || "",
    },
  });

  const saveChangeHandle = async (data) => {
    try {
      const userRef = doc(db, "users", user.uid);

      await updateDoc(userRef, {
        displayName: data.displayName,
        tckn: data.tckn,
      });

      toast.success("Değişiklikler kaydedildi");

      dispatch(getUser(user.uid));

      setEditMode(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-24 py-5 grid grid-cols-3 w-full gap-5">
      <div className="col-span-1 row-span-1 border h-[300px] rounded-lg overflow-hidden">
        <div className="flex justify-between items-center pb-3 border-b p-3 bg-sky-100 text-gray-700">
          <h1 className="font-semibold">Kişisel Bilgiler</h1>
          <button
            onClick={() => setEditMode(true)}
            className="hover:bg-sky-500 hover:text-white  rounded-full p-1"
          >
            <Edit size={17} />
          </button>
        </div>
        {editMode ? (
          <form
            className="p-3 flex flex-col gap-3"
            onSubmit={handleSubmit(saveChangeHandle)}
          >
            <input
              className="text-gray-800 font-semibold text-sm px-4 py-2 rounded-md border"
              {...register("displayName")}
            />
            <input
              className="text-gray-800 font-semibold text-sm px-4 py-2 rounded-md border"
              {...register("tckn")}
            />

            <span className="text-gray-500 text-sm">{user.email}</span>
            {editMode && (
              <button
                type="submit"
                className="hover:bg-sky-500 hover:text-white  rounded-xl py-1 px-4 flex items-center gap-x-3 border"
              >
                <Save size={17} /> Kaydet
              </button>
            )}
          </form>
        ) : (
          <div className="p-3 flex flex-col gap-3">
            <span className="text-gray-800 font-semibold text-sm">
              {user.displayName}
            </span>
            <span className="text-gray-500 text-sm">{user.email}</span>
            <span className="text-gray-500 text-sm">{user.tckn}</span>
          </div>
        )}
        <div className="p-3">
          <p className="px-4 py-2 rounded-md text-xs border bg-sky-50 border-sky-300 text-sky-500 mt-12 flex items-center gap-x-1">
            <AlertCircle size={18} />
            Anlık olarak e-posta değişikliği kabul edilmemektedir.
          </p>
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
      <div className="col-span-3 border h-[300px] rounded-lg overflow-hidden">
        <div className="flex justify-between items-center pb-3 border-b p-3 bg-sky-100 text-gray-700">
          <h1 className="font-semibold">Yaklaşan Randevular</h1>
        </div>
        <div className="p-3 flex flex-col gap-3">
          <div className="w-full border rounded-lg px-4 py-2 flex justify-between items-center">
            <div className="flex items-center gap-x-2">
              <span className="pr-2 border-r">
                <Calendar />
              </span>
              <div className="flex flex-col items-start justify-start">
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
