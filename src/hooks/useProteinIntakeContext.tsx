import { ProteinIntakeContext } from "../context/ProteinIntakeContext";
import { useContext } from "react";
import { ProteinIntakeModel } from "../models";

export const useProteinIntakeContext = (): ProteinIntakeModel => {
    const context = useContext(ProteinIntakeContext);

    if(!context){
        throw new Error("useProteinIntakeContext must be used within ProteinIntakeContextProvider.")
    }

    return context
}