import styles from "../styles/components/SignIn.module.css";

import { useAuthenticationStatus } from "@nhost/react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "./Spinner";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className={styles.container}>
        <Spinner />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
