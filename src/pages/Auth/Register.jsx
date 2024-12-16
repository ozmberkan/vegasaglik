import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "~/firebase/firebase";
import { registerService } from "~/redux/slices/userSlice";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerHandle = async (data) => {
    try {
      dispatch(registerService(data));
      toast.success("Hesabınız başarıyla oluşturuldu.");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Kullanıcı oluşturulurken hata oluştu:", error);
      toast.error("Kayıt işlemi sırasında bir hata oluştu.");
    }
  };

  return (
    <div className="flex justify-center items-start flex-col gap-3">
      <h1 className="font-bold tracking-tighter text-3xl bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-sky-700">
        Vega Sağlık
      </h1>
      <p className="text-sm text-gray-400 w-1/2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat
        porro numquam, ad cupiditate temporibus? adipisicing elit. Dolorum
        fugiat porro numquam, ad cupiditate temporibus?
      </p>
      <form
        className="mt-5 flex flex-col gap-3"
        onSubmit={handleSubmit(registerHandle)}
      >
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-400">Tckn*</label>
          <input
            type="text"
            className="px-4 py-2 rounded-xl border outline-none w-80"
            {...register("tckn")}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-400">E-Posta</label>
          <input
            type="text"
            className="px-4 py-2 rounded-xl border outline-none w-80"
            {...register("email")}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-400">Ad Soyad</label>
          <input
            type="text"
            className="px-4 py-2 rounded-xl border outline-none w-80"
            {...register("displayName")}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-400">Parola</label>
          <input
            type="password"
            className="px-4 py-2 rounded-xl border outline-none w-80"
            {...register("password")}
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <Link
            to="/auth/login"
            className="text-xs text-gray-400 hover:underline"
          >
            Hesabın var mı?
          </Link>
        </div>
        <button className="bg-sky-500 text-white rounded-lg p-2">
          Kaydı Tamamla
        </button>
      </form>
    </div>
  );
};

export default Register;
