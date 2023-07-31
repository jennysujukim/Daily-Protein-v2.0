import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { AuthContextModel } from "../models";

export const useAuthContext = (): AuthContextModel => {
    const context = useContext(AuthContext);

    if(!context){
        throw new Error("useAuthContext must be used within AuthContextProvider.")
    }

    return context
}