import { 
    createContext,
    useState,
    useEffect
} from "react"
import { 
    ProteinIntakeProps,
    ProteinIntakeContextProviderProps
} from "../models"

export const ProteinIntakeContext = createContext<ProteinIntakeProps>({ setProteinSum: () => {}, setProteinGoal: () => {}, proteinGoal: 0, proteinSum: 0 ,remainingProtein: 0, barPercent: 0}) 

export const ProteinIntakeContextProvider = ({children}: ProteinIntakeContextProviderProps) => {

    const [ proteinSum, setProteinSum ] = useState<number>(0)
    const [ proteinGoal, setProteinGoal ] = useState<number>(0)
    const [ remainingProtein, setRemainingProtein ] = useState<number>(0)
    const [ barPercent, setBarPercent ] = useState<number>(0)

    useEffect(() => {
        setRemainingProtein(proteinGoal - proteinSum)
        setBarPercent((proteinSum / proteinGoal) * 100)
        
    }, [proteinSum, proteinGoal])

    return (
        <ProteinIntakeContext.Provider value={{ setProteinSum, setProteinGoal, proteinSum, proteinGoal, remainingProtein, barPercent }}>
            {children}
        </ProteinIntakeContext.Provider>
    )
}