import { ReactNode } from "react";
import { useAppSelector } from "../redux/hooks";
import { useCurrentToken } from "../redux/features/user/userSlice";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({children}: {children: ReactNode}) => {

    const token = useAppSelector(useCurrentToken);
    
    if(!token){
        return <Navigate to="/signin" replace={true} />
    };

    return children;

}