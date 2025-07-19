import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from "./config/SidebarItems";

import { LogOut, PiIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import toast from "react-hot-toast";


export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { logout } = useAuthContext()
  const location = useLocation();
  const navigate = useNavigate()

  const handleLogout = () => {
    toast.success('Até breve!');
    logout()
  }

  return (
    <motion.div
      onHoverStart={() => setIsOpen(true)}
      onHoverEnd={() => {
        setIsOpen(false)
      }}
      animate={{ width: isOpen ? 170 : 80 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="md:flex inset-shadow-2 fixed z-10 mt-2 hidden flex-col items-center ml-3 rounded-4xl pt-2 h-[98%] bg-primary-600 border border-white overflow-hidden"
    >
      <div className="flex flex-col h-full w-full justify-between">
        <div className="mt-4 flex flex-col items-start">
          <div className="pl-6 mb-16 flex items-center justify-center gap-2">
            <PiIcon className="text-primary-200" size={26} />
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  key="logo-label"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="text-lg font-bold whitespace-nowrap"
                >
                  Logo
                </motion.h1>
              )}
            </AnimatePresence>
          </div>
          <div className="flex flex-col gap-4 pl-3">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-3 rounded-4xl p-3 hover:bg-primary-700 cursor-pointer ${location.pathname.startsWith(item.path) ? 'bg-primary-700' : ''}`}
                onClick={() => navigate(item.path)}
              >
                <span>{item.icon}</span>
                <AnimatePresence>
                  {isOpen && (
                    <motion.p
                      key="label"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="whitespace-nowrap text-white"
                    >
                      {item.label}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6 w-max ml-3">
          <div onClick={() => handleLogout()} className="flex items-center justify-center gap-2 rounded-4xl p-3 hover:bg-primary-700 cursor-pointer">
            <LogOut className="text-primary-50" size={26} />
            <AnimatePresence>
              {isOpen && (
                <motion.p
                  key="logout-label"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="whitespace-nowrap text-white"
                >
                  Sair
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div >
  );
};