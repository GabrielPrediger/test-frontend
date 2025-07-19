import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';


const ProtectedRoute = () => {
  const { isAuthenticated } = useAuthContext();


  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;