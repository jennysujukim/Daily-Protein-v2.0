import { ProteinIntakeContext } from "../context/ProteinIntakeContext";
import { useContext } from "react";
import { ProteinIntakeProps } from "../models";

export const useProteinIntakeContext = (): ProteinIntakeProps => {
    const context = useContext(ProteinIntakeContext);

    if(!context){
        throw new Error("useProteinIntakeContext must be used within ProteinIntakeContextProvider.")
    }

    return context
}