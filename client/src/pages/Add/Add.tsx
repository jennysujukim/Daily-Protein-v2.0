import { TextField, Typography, Button, Tooltip } from "@mui/material"
import PageLayout from "../../layout/PageLayout/PageLayout"
import FoodList from "../../components/FoodList/FoodList"

function Add() {
  return (
    <PageLayout>
        <Typography
            variant="h2"
            className="font-medium text-center"
        >
            Search Food
        </Typography>
        <Typography className="text-center text-lg pt-4">Search food you want to record on your today's intake.</Typography>
        <form className="flex justify-center max-w-3xl my-8 mx-auto">
            <TextField 
                label="Type keywords here"
                type="text"
                className="w-full"
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
        <div className="md:grid md:grid-cols-2 md:gap-5">
            <FoodList />
        </div>
    </PageLayout>
  )
}

export default Add