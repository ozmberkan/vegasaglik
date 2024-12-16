import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "~/firebase/firebase";
import { loginService } from "~/redux/slices/userSlice";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandle = async (data) => {
    try {
      dispatch(loginService(data));
      toast.success("Hesabınıza başarıyla giriş yaptınız.");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log("Giriş hatası:", error);
      toast.error("Giriş başarısız! Lütfen bilgilerinizi kontrol edin.");
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
        onSubmit={handleSubmit(loginHandle)}
      >
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-400">E-Posta</label>
          <input
            type="text"
            className="px-4 py-2 rounded-xl border outline-none w-80"
            {...register("email")}
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
            to="/auth/register"
            className="text-xs text-gray-400 hover:underline"
          >
            Hesabın yok mu?
          </Link>
        </div>
        <button className="bg-sky-500 text-white rounded-lg p-2">
          Giriş Yap
        </button>
      </form>
    </div>
  );
};

export default Login;
