import { 
    createContext,
    useState,
    useEffect
} from "react"
import { 
    ProteinIntakeModel,
    ProteinIntakeContextProviderProps
} from "../models"

export const ProteinIntakeContext = createContext<ProteinIntakeModel>({ 
    proteinSum: 0,
    proteinGoal: 0, 
    remainingProtein: 0, 
    barPercent: 0,
    setProteinSum: () => {}, 
    setProteinGoal: () => {}
}) 

export const ProteinIntakeContextProvider = ({children}: ProteinIntakeContextProviderProps) => {

    const [ proteinSum, setProteinSum ] = useState<number>(0)
    const [ proteinGoal, setProteinGoal ] = useState<number>(0)
    const [ remainingProtein, setRemainingProtein ] = useState<number>(0)
    const [ barPercent, setBarPercent ] = useState<number>(0)

    useEffect(() => {
        // logic to update remaining protein and bar percent
        const updatedRemainingProtein = (proteinGoal - proteinSum)
        const updatedBarPercent = (proteinSum / proteinGoal) * 100

        // make sure remaining protein and bar percent are not negative
        if(updatedRemainingProtein < 0) {
            setRemainingProtein(0)
            setBarPercent(100)
        } else {
            setRemainingProtein(updatedRemainingProtein);
            setBarPercent(updatedBarPercent);
        }
        
    }, [proteinSum, proteinGoal])

    return (
        <ProteinIntakeContext.Provider 
            value={{ 
                proteinSum, 
                proteinGoal, 
                remainingProtein, 
                barPercent,
                setProteinSum, 
                setProteinGoal
            }}
        >
            {children}
        </ProteinIntakeContext.Provider>
    )
}