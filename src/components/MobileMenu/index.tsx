import { NavLink } from 'react-router-dom';
import { MobileMenuItems } from './config/MobileMenuItems';
import { useAuthContext } from '../../hooks/useAuthContext';
import toast from 'react-hot-toast';

export default function MobileBottomNav() {
  const { logout } = useAuthContext()

  const handleLogout = () => {
    toast.success('Até breve!');
    logout()
  }

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-t-lg z-20">
      <div className="flex justify-around items-center h-16">
        {MobileMenuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => item.path == "/" ? handleLogout() : null}
            end
            className={({ isActive }) =>
              `flex flex-col items-center justify-center w-full h-full text-sm transition-colors
              ${isActive ? 'text-primary-600' : 'text-gray-500 hover:text-primary-500'}`
            }
          >
            <div>{item.icon}</div>
            <span className="mt-1">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}