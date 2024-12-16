import {
  Calendar,
  Calendar1,
  CalendarPlus,
  ChevronDown,
  Hospital,
  LogOut,
  User,
  User2,
  UserCircle,
} from "lucide-react";
import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useUser } from "~/hooks/useUser";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "~/firebase/firebase";

const Navbar = () => {
  const user = useUser();

  const exitHandle = async () => {
    try {
      await signOut(auth);

      localStorage.removeItem("user");

      toast.success("Çıkış yapıldı");

      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.error("Çıkış sırasında bir hata oluştu:", error);

      toast.error("Çıkış sırasında bir hata oluştu.");
    }
  };

  return (
    <div className=" h-full flex justify-between items-center px-24">
      <Link
        to="/"
        className="font-bold tracking-tighter text-xl bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-sky-700"
      >
        Vega Sağlık
      </Link>
      <div className="flex items-center gap-x-5 text-sm">
        <Link
          to="/about"
          className="pb-1 border border-transparent hover:border-b-black  transition-all duration-300 "
        >
          Hakkımızda
        </Link>
        <Link
          to="/doctors"
          className="pb-1 border border-transparent hover:border-b-black  transition-all duration-300 "
        >
          Doktorlarımız
        </Link>
        {user ? (
          <div className="flex gap-x-1 items-center">
            <Menu>
              <MenuButton className="px-4 py-1 mb-1 flex items-center gap-x-2 font-semibold hover:from-blue-400 hover:to-sky-700 transition-all duration-300 rounded-full bg-gradient-to-r from-blue-500 to-sky-700 text-white">
                Profilim
                <ChevronDown />
              </MenuButton>
              <MenuItems
                anchor="bottom end"
                className="py-3 px-2 bg-white z-20 border rounded-lg flex justify-start items flex-col gap-2 drop-shadow-xl "
              >
                <MenuItem className="flex  justify-start items-start ">
                  <div className=" flex flex-col rounded-lg px-2 ">
                    <span className="text-[13px]"> {user.displayName}</span>
                    <span className="text-xs text-gray-500">{user.email}</span>
                  </div>
                </MenuItem>
                <hr />
                <MenuItem className="flex justify-start items-start ">
                  <Link
                    to="/profile"
                    className=" hover:bg-sky-50 hover:text-sky-600 transition-all duration-200 border border-transparent hover:border-sky-200 px-2 py-1 rounded-lg text-[13px] items-center  gap-x-2"
                  >
                    <User size={15} />
                    Profilim
                  </Link>
                </MenuItem>
                <MenuItem className="flex justify-start items-start ">
                  <Link
                    to="/profile"
                    className=" hover:bg-sky-50 hover:text-sky-600 transition-all duration-200 border border-transparent hover:border-sky-200 px-2 py-1 rounded-lg text-[13px] items-center  gap-x-2"
                  >
                    <Calendar size={15} />
                    Randevularım
                  </Link>
                </MenuItem>
                <MenuItem className="flex justify-start items-start ">
                  <Link
                    to="/profile"
                    className=" hover:bg-sky-50 hover:text-sky-600 transition-all duration-200 border border-transparent hover:border-sky-200 px-2 py-1 rounded-lg text-[13px] items-center  gap-x-2"
                  >
                    <CalendarPlus size={15} />
                    Randevu Al
                  </Link>
                </MenuItem>
                {user.role === "doctor" && (
                  <MenuItem className="flex justify-start items-start ">
                    <Link
                      to="/profile"
                      className=" hover:bg-sky-50 hover:text-sky-600 transition-all duration-200 border border-transparent hover:border-sky-200 px-2 py-1 rounded-lg text-[13px] items-center  gap-x-2"
                    >
                      <UserCircle size={15} />
                      Doktor Paneli
                    </Link>
                  </MenuItem>
                )}
                {user.role === "admin" && (
                  <MenuItem className="flex justify-start items-start ">
                    <Link
                      to="/profile"
                      className=" hover:bg-sky-50 hover:text-sky-600 transition-all duration-200 border border-transparent hover:border-sky-200 px-2 py-1 rounded-lg text-[13px] items-center  gap-x-2"
                    >
                      <UserCircle size={15} />
                      Admin Paneli
                    </Link>
                  </MenuItem>
                )}

                <hr />
                <MenuItem className="flex justify-start items-start ">
                  <button
                    onClick={exitHandle}
                    className=" hover:bg-red-50 hover:text-red-600 transition-all duration-200 border border-transparent hover:border-red-200 px-2 py-1 rounded-lg text-[13px] items-center  gap-x-2"
                  >
                    <LogOut size={15} />
                    Çıkış yap
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        ) : (
          <Link
            to="/auth/register"
            className="px-4 py-1 mb-1 font-semibold hover:from-blue-400 hover:to-sky-700 transition-all duration-300 rounded-full bg-gradient-to-r from-blue-500 to-sky-700 text-white"
          >
            Randevu Al
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
