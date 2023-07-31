import { 
    useState, 
    useEffect 
} from 'react'
import axios from 'axios'
import { FoodDataModel } from '../models'

// Custome hook to fetch data from Edamam API
export const useGetFoodData = (url: string) => {

    const [ data, setData ] = useState<FoodDataModel[]>([])
    const [ isPending, setIsPending ] = useState<boolean>(false)
    const [ error, setError ] = useState<string | null>(null)

    useEffect(() => {
        const getData = async () => {
            setIsPending(true)

            try {
                const response = await axios(url)

                if(!response.data) {
                    throw new Error("No data available")
                }

                const data = await response.data.hints

                setIsPending(false)
                setData(data)
                setError(null)
            }
            catch(error) {
                setError(`Error when fetching data : ${error}`)
                setIsPending(false)
            }
        }

        getData()

    }, [url])

    return { data, isPending, error }
}