import { 
    useState,
    useEffect
 } from "react"
import { 
    TextField, 
    Typography, 
    Button, 
    Tooltip 
} from "@mui/material"
import PageLayout from "../../layout/PageLayout/PageLayout"
import FoodList from "../../components/FoodList/FoodList"
import { useGetFoodData } from "../../hooks/useGetFoodData"
import { FoodData } from "../../models"

function Add() {

    const [ searchValue, setSearchValue ] = useState<string>("")
    const [ foodList, setFoodList ] = useState<FoodData[]>([])

    const url = `${process.env.REACT_APP_API_URL}&ingr=${searchValue}`

    const { data, isPending, error } = useGetFoodData(url)

    useEffect(() => {
        setFoodList(data) 
    }, [data])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(foodList)
    }


  return (
    <PageLayout>
        <Typography
            variant="h2"
            className="font-medium text-center"
        >
            Search Food
        </Typography>
        <Typography className="text-center text-lg pt-4">
            Find food you want to record on your today's intake.
        </Typography>
        <form 
            className="flex justify-center max-w-3xl my-8 mx-auto"
            onSubmit={handleSubmit}
        >
            <TextField 
                label="Search keywords here"
                type="text"
                className="w-full"
                sx={{ paddingBottom: '0' }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
            />
            <Tooltip title="Search food list">
                <Button 
                    type="submit"
                    variant="contained"
                    className="ml-4"
                >
                    Search
                </Button>                
            </Tooltip>
        </form>
        { isPending && <Typography className="text-center">Loading...</Typography> }
        { error && <Typography className="text-center">{error}</Typography> }
        { data &&
            <div className="md:grid md:grid-cols-2 md:gap-5">
                <FoodList lists={foodList} />
            </div>
        }
        

    </PageLayout>
  )
}

export default Add