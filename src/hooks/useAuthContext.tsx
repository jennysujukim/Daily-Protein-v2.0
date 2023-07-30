import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { AuthInitialState } from "../models";

export const useAuthContext = (): AuthInitialState => {
    const context = useContext(AuthContext);

    if(!context){
        throw new Error("useAuthContext must be used within AuthContextProvider.")
    }

    return context
}