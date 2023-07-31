import { useState } from "react"
import { 
    TextField, 
    Typography, 
    Button, 
    Tooltip,
    Alert
} from "@mui/material"
import { useGetFoodData } from "../../hooks/useGetFoodData"
import { FoodDataModel } from "../../models"
import PageLayout from "../../layout/PageLayout/PageLayout"
import FoodList from "../../components/FoodList/FoodList"


function Add() {

    const [ searchValue, setSearchValue ] = useState<string>("")
    const [ foodList, setFoodList ] = useState<FoodDataModel[]>([])

    // Edamam API url
    const url = `${process.env.REACT_APP_API_URL}&ingr=${searchValue}`

    // use custom hook to fetch data from Edamam API
    const { data, error } = useGetFoodData(url)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFoodList(data) 
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
        { error && 
            <Alert 
                severity="error"
                className="mt-4 mx-auto max-w-3xl"
            >
                Error when fetching data: {error}
            </Alert>  
        }
        { data.length !==0 &&
            <div className="md:grid md:grid-cols-2 md:gap-5">
                <FoodList lists={foodList} />
            </div>
        }
        { data.length === 0 &&
            <Typography className="text-center">
                No data available. Please search again.
            </Typography>
        }
    </PageLayout>
  )
}

export default Add